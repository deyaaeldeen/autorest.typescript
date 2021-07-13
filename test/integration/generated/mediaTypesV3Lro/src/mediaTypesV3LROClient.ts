/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { LroEngine } from "./lro";
import { LroImpl, shouldDeserializeLro } from "./lroImpl";
import * as Parameters from "./models/parameters";
import { MediaTypesV3LROClientContext } from "./mediaTypesV3LROClientContext";
import {
  MediaTypesV3LROClientOptionalParams,
  MediaTypesV3LROClientSendOnDefault$binaryOptionalParams,
  MediaTypesV3LROClientSendOnDefault$textOptionalParams,
  MediaTypesV3LROClientSend$binaryOptionalParams,
  MediaTypesV3LROClientSend$textOptionalParams,
  MediaTypesV3LROClientSendResponse
} from "./models";

export class MediaTypesV3LROClient extends MediaTypesV3LROClientContext {
  /**
   * Initializes a new instance of the MediaTypesV3LROClient class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: MediaTypesV3LROClientOptionalParams) {
    super($host, options);
  }

  private getOperationOptions<TOptions extends coreClient.OperationOptions>(
    options: TOptions | undefined,
    lroResourceLocationConfig?: string
  ): coreClient.OperationOptions {
    const operationOptions: coreClient.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLro(lroResourceLocationConfig)
    };
    return operationOptions;
  }

  /**
   * Send payload to Foo service.
   * @param contentType Upload file type
   * @param data
   * @param options The options parameters.
   */
  beginSendOnDefault(
    contentType: "application/octet-stream",
    data: coreRestPipeline.RequestBodyType,
    options?: MediaTypesV3LROClientSendOnDefault$binaryOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Send payload to Foo service.
   * @param contentType Upload file type
   * @param data simple string
   * @param options The options parameters.
   */
  beginSendOnDefault(
    contentType: "text/plain",
    data: string,
    options?: MediaTypesV3LROClientSendOnDefault$textOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Send payload to Foo service.
   * @param args Includes all the parameters for this operation.
   */
  async beginSendOnDefault(
    ...args:
      | [
          "application/octet-stream",
          coreRestPipeline.RequestBodyType,
          MediaTypesV3LROClientSendOnDefault$binaryOptionalParams?
        ]
      | [
          "text/plain",
          string,
          MediaTypesV3LROClientSendOnDefault$textOptionalParams?
        ]
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    let operationSpec: coreClient.OperationSpec;
    let operationArguments: coreClient.OperationArguments;
    let options;
    if (args[0] === "application/octet-stream") {
      operationSpec = sendOnDefault$binaryOperationSpec;
      operationArguments = {
        contentType: args[0],
        data: args[1],
        options: args[2]
      };
      options = args[2];
    } else if (args[0] === "text/plain") {
      operationSpec = sendOnDefault$textOperationSpec;
      operationArguments = {
        contentType: args[0],
        data: args[1],
        options: args[2]
      };
      options = args[2];
    } else {
      throw new TypeError(
        `"contentType" must be a valid value but instead was "${args[0]}".`
      );
    }
    operationArguments.options = this.getOperationOptions(options);
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(sendOperation, operationArguments, operationSpec);
    return new LroEngine(lro, { intervalInMs: options?.updateIntervalInMs });
  }

  /**
   * Send payload to Foo service.
   * @param args Includes all the parameters for this operation.
   */
  async beginSendOnDefaultAndWait(
    ...args:
      | [
          "application/octet-stream",
          coreRestPipeline.RequestBodyType,
          MediaTypesV3LROClientSendOnDefault$binaryOptionalParams?
        ]
      | [
          "text/plain",
          string,
          MediaTypesV3LROClientSendOnDefault$textOptionalParams?
        ]
  ): Promise<void> {
    if (args[0] === "application/octet-stream") {
      const poller = await this.beginSendOnDefault(...args);
      return poller.pollUntilDone();
    } else if (args[0] === "text/plain") {
      const poller = await this.beginSendOnDefault(...args);
      return poller.pollUntilDone();
    }
    throw new Error("Impossible case");
  }

  /**
   * Send payload to targetted thing in Foo service.
   * @param thing Target thing name
   * @param contentType Upload file type
   * @param data
   * @param options The options parameters.
   */
  send(
    thing: string,
    contentType: "application/octet-stream",
    data: coreRestPipeline.RequestBodyType,
    options?: MediaTypesV3LROClientSend$binaryOptionalParams
  ): Promise<MediaTypesV3LROClientSendResponse>;
  /**
   * Send payload to targetted thing in Foo service.
   * @param thing Target thing name
   * @param contentType Upload file type
   * @param data simple string
   * @param options The options parameters.
   */
  send(
    thing: string,
    contentType: "text/plain",
    data: string,
    options?: MediaTypesV3LROClientSend$textOptionalParams
  ): Promise<MediaTypesV3LROClientSendResponse>;
  /**
   * Send payload to targetted thing in Foo service.
   * @param args Includes all the parameters for this operation.
   */
  send(
    ...args:
      | [
          string,
          "application/octet-stream",
          coreRestPipeline.RequestBodyType,
          MediaTypesV3LROClientSend$binaryOptionalParams?
        ]
      | [
          string,
          "text/plain",
          string,
          MediaTypesV3LROClientSend$textOptionalParams?
        ]
  ): Promise<MediaTypesV3LROClientSendResponse> {
    let operationSpec: coreClient.OperationSpec;
    let operationArguments: coreClient.OperationArguments;
    let options;
    if (args[1] === "application/octet-stream") {
      operationSpec = send$binaryOperationSpec;
      operationArguments = {
        thing: args[0],
        contentType: args[1],
        data: args[2],
        options: args[3]
      };
      options = args[3];
    } else if (args[1] === "text/plain") {
      operationSpec = send$textOperationSpec;
      operationArguments = {
        thing: args[0],
        contentType: args[1],
        data: args[2],
        options: args[3]
      };
      options = args[3];
    } else {
      throw new TypeError(
        `"contentType" must be a valid value but instead was "${args[1]}".`
      );
    }
    operationArguments.options = options || {};
    return this.sendOperationRequest(operationArguments, operationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer({}, /* isXml */ false);

const sendOnDefault$binaryOperationSpec: coreClient.OperationSpec = {
  path: "/foo/api/v1",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.data,
  queryParameters: [Parameters.excluded],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "binary",
  serializer
};
const sendOnDefault$textOperationSpec: coreClient.OperationSpec = {
  path: "/foo/api/v1",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.data1,
  queryParameters: [Parameters.excluded],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  mediaType: "text",
  serializer
};
const send$binaryOperationSpec: coreClient.OperationSpec = {
  path: "/foo/api/v1/things/{thing}",
  httpMethod: "POST",
  responses: {
    204: {},
    400: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.data,
  queryParameters: [Parameters.excluded],
  urlParameters: [Parameters.$host, Parameters.thing],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "binary",
  serializer
};
const send$textOperationSpec: coreClient.OperationSpec = {
  path: "/foo/api/v1/things/{thing}",
  httpMethod: "POST",
  responses: {
    204: {},
    400: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: Parameters.data1,
  queryParameters: [Parameters.excluded],
  urlParameters: [Parameters.$host, Parameters.thing],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  mediaType: "text",
  serializer
};
