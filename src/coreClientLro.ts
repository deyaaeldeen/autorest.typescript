// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  OperationArguments,
  OperationSpec,
  FullOperationResponse
} from "@azure/core-client";
import { LongRunningOperation, LroResponse, RawResponse } from "./lro";

const successStates = ["succeeded"];
const failureStates = ["failed", "canceled", "cancelled"];
const terminalStates = successStates.concat(failureStates);

export type SendOperationFn<T> = (
  args: OperationArguments,
  spec: OperationSpec
) => Promise<LroResponse<T>>;

function createPollingMethod<TResult>(
  sendOperationFn: SendOperationFn<TResult>,
  args: OperationArguments,
  spec: OperationSpec
): (path?: string) => Promise<LroResponse<TResult>> {
  // Make sure we don't send any body to the get request
  const { requestBody, ...restSpec } = spec;
  return async (path?: string) => {
    return sendOperationFn(args, {
      ...restSpec,
      httpMethod: "GET",
      ...(path && { path })
    });
  };
}

/**
 * We need to selectively deserialize our responses, only deserializing if we
 * are in a final Lro response, not deserializing any polling non-terminal responses
 */
export function shouldDeserializeLro(lroResourceLocationConfig?: string) {
  let initialOperationInfo: LroResponseInfo | undefined;
  let isInitialRequest = true;

  return (response: FullOperationResponse) => {
    if (response.status < 200 || response.status >= 300) {
      return true;
    }

    if (!initialOperationInfo) {
      initialOperationInfo = getLroData(response);
    } else {
      isInitialRequest = false;
    }

    if (
      initialOperationInfo.azureAsyncOperation ||
      initialOperationInfo.operationLocation
    ) {
      return (
        !isInitialRequest &&
        isAsyncOperationFinalResponse(
          response,
          initialOperationInfo,
          lroResourceLocationConfig
        )
      );
    }

    if (initialOperationInfo.location) {
      return isLocationFinalResponse(response);
    }

    if (initialOperationInfo.requestMethod === "PUT") {
      return isBodyPollingFinalResponse(response);
    }

    return true;
  };
}

function isAsyncOperationFinalResponse(
  response: FullOperationResponse,
  initialOperationInfo: LroResponseInfo,
  lroResourceLocationConfig?: string
): boolean {
  const status: string = response.parsedBody?.status || "Succeeded";
  if (!terminalStates.includes(status.toLowerCase())) {
    return false;
  }

  if (initialOperationInfo.requestMethod === "DELETE") {
    return true;
  }

  if (
    initialOperationInfo.requestMethod === "PUT" &&
    lroResourceLocationConfig &&
    lroResourceLocationConfig.toLowerCase() === "azure-asyncoperation"
  ) {
    return true;
  }

  if (
    initialOperationInfo.requestMethod !== "PUT" &&
    !initialOperationInfo.location
  ) {
    return true;
  }

  return false;
}

function isLocationFinalResponse(response: FullOperationResponse): boolean {
  return response.status !== 202;
}

function isBodyPollingFinalResponse(response: FullOperationResponse): boolean {
  const provisioningState: string =
    response.parsedBody?.properties?.provisioningState || "Succeeded";

  if (terminalStates.includes(provisioningState.toLowerCase())) {
    return true;
  }

  return false;
}

interface LroResponseInfo {
  requestMethod: string;
  azureAsyncOperation?: string;
  operationLocation?: string;
  location?: string;
}

function getLroData(result: FullOperationResponse): LroResponseInfo {
  return {
    azureAsyncOperation: result.headers.get("azure-asyncoperation"),
    operationLocation: result.headers.get("operation-location"),
    location: result.headers.get("location"),
    requestMethod: result.request.method
  };
}

export class CoreClientLro<T> implements LongRunningOperation<T> {
  constructor(
    private sendOperationFn: SendOperationFn<T>,
    private args: OperationArguments,
    private spec: OperationSpec,
    public requestPath: string = spec.path!,
    public requestMethod: string = spec.httpMethod
  ) {}
  public async sendInitialRequest(): Promise<LroResponse<T>> {
    return this.sendOperationFn(this.args, this.spec);
  }

  public async sendPollRequest(path: string): Promise<LroResponse<T>> {
    const updatedArgs = { ...this.args };
    if (updatedArgs.options) {
      (updatedArgs.options as any).shouldDeserialize = true;
    }
    return createPollingMethod(
      this.sendOperationFn,
      updatedArgs,
      this.spec
    )(path);
  }
}
