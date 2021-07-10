// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  HttpOperationResponse,
  OperationArguments,
  OperationSpec
} from "@azure/core-http";
import { LongRunningOperation, LroResponse, RawResponse } from "./lro";

const successStates = ["succeeded"];
const failureStates = ["failed", "canceled", "cancelled"];
const terminalStates = successStates.concat(failureStates);

export type SendOperationFn<T> = (
  args: OperationArguments,
  spec: OperationSpec
) => Promise<LroResponse<T>>;

/**
 * We need to selectively deserialize our responses, only deserializing if we
 * are in a final Lro response, not deserializing any polling non-terminal responses
 */
export function shouldDeserializeLro(lroResourceLocationConfig?: string) {
  let initialOperationInfo: LroResponseInfo | undefined;
  let isInitialRequest = true;

  return (response: HttpOperationResponse) => {
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
  response: HttpOperationResponse,
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

function isLocationFinalResponse(response: HttpOperationResponse): boolean {
  return response.status !== 202;
}

function isBodyPollingFinalResponse(response: HttpOperationResponse): boolean {
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

function getLroData(result: HttpOperationResponse): LroResponseInfo {
  return {
    azureAsyncOperation: result.headers.get("azure-asyncoperation"),
    operationLocation: result.headers.get("operation-location"),
    location: result.headers.get("location"),
    requestMethod: result.request.method
  };
}

export function getSpecPath(spec: OperationSpec): string {
  if (spec.path) {
    return spec.path;
  } else {
    throw Error("Bad spec: request path is not found!");
  }
}

export class CoreHttpLro<T> implements LongRunningOperation<T> {
  constructor(
    private sendOperationFn: SendOperationFn<T>,
    private args: OperationArguments,
    private spec: OperationSpec,
    public requestPath: string = spec.path!,
    public requestMethod: string = spec.httpMethod
  ) {}
  public async sendInitialRequest(
    initializeState: (
      rawResponse: RawResponse,
      flatResponse: unknown
    ) => boolean
  ): Promise<LroResponse<T>> {
    const response = await this.sendOperationFn(this.args, this.spec);
    initializeState(response.rawResponse, response.flatResponse);
    return response;
  }

  public async sendPollRequest(path: string): Promise<LroResponse<T>> {
    const updatedArgs = { ...this.args };
    if (updatedArgs.options) {
      (updatedArgs.options as any).shouldDeserialize = true;
    }
    const { requestBody, responses, ...restSpec } = this.spec;
    return this.sendOperationFn(updatedArgs, {
      ...restSpec,
      responses: responses,
      httpMethod: "GET",
      ...(path && { path })
    });
  }
}
