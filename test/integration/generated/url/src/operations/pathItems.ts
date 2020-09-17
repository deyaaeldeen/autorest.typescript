/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { UrlClient } from "../urlClient";
import {
  PathItemsGetAllWithValuesOptionalParams,
  PathItemsGetGlobalQueryNullOptionalParams,
  PathItemsGetGlobalAndLocalQueryNullOptionalParams,
  PathItemsGetLocalPathItemQueryNullOptionalParams
} from "../models";

/**
 * Class representing a PathItems.
 */
export class PathItems {
  private readonly client: UrlClient;

  /**
   * Initialize a new instance of the class PathItems class.
   * @param client Reference to the service client
   */
  constructor(client: UrlClient) {
    this.client = client;
  }

  /**
   * send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath',
   * localStringPath='localStringPath', globalStringQuery='globalStringQuery',
   * pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery'
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param localStringPath should contain value 'localStringPath'
   * @param options The options parameters.
   */
  getAllWithValues(
    pathItemStringPath: string,
    localStringPath: string,
    options?: PathItemsGetAllWithValuesOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { pathItemStringPath, localStringPath, options: operationOptions },
      getAllWithValuesOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath',
   * localStringPath='localStringPath', globalStringQuery=null,
   * pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery'
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param localStringPath should contain value 'localStringPath'
   * @param options The options parameters.
   */
  getGlobalQueryNull(
    pathItemStringPath: string,
    localStringPath: string,
    options?: PathItemsGetGlobalQueryNullOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { pathItemStringPath, localStringPath, options: operationOptions },
      getGlobalQueryNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * send globalStringPath=globalStringPath, pathItemStringPath='pathItemStringPath',
   * localStringPath='localStringPath', globalStringQuery=null,
   * pathItemStringQuery='pathItemStringQuery', localStringQuery=null
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param localStringPath should contain value 'localStringPath'
   * @param options The options parameters.
   */
  getGlobalAndLocalQueryNull(
    pathItemStringPath: string,
    localStringPath: string,
    options?: PathItemsGetGlobalAndLocalQueryNullOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { pathItemStringPath, localStringPath, options: operationOptions },
      getGlobalAndLocalQueryNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath',
   * localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery=null,
   * localStringQuery=null
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param localStringPath should contain value 'localStringPath'
   * @param options The options parameters.
   */
  getLocalPathItemQueryNull(
    pathItemStringPath: string,
    localStringPath: string,
    options?: PathItemsGetLocalPathItemQueryNullOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { pathItemStringPath, localStringPath, options: operationOptions },
      getLocalPathItemQueryNullOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getAllWithValuesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/pathItemStringQuery/localStringQuery",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.pathItemStringQuery,
    Parameters.globalStringQuery,
    Parameters.localStringQuery
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.pathItemStringPath,
    Parameters.globalStringPath,
    Parameters.localStringPath
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getGlobalQueryNullOperationSpec: coreHttp.OperationSpec = {
  path:
    "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/localStringQuery",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.pathItemStringQuery,
    Parameters.globalStringQuery,
    Parameters.localStringQuery
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.pathItemStringPath,
    Parameters.globalStringPath,
    Parameters.localStringPath
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getGlobalAndLocalQueryNullOperationSpec: coreHttp.OperationSpec = {
  path:
    "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.pathItemStringQuery,
    Parameters.globalStringQuery,
    Parameters.localStringQuery
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.pathItemStringPath,
    Parameters.globalStringPath,
    Parameters.localStringPath
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getLocalPathItemQueryNullOperationSpec: coreHttp.OperationSpec = {
  path:
    "/pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/null/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.pathItemStringQuery,
    Parameters.globalStringQuery,
    Parameters.localStringQuery
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.pathItemStringPath,
    Parameters.globalStringPath,
    Parameters.localStringPath
  ],
  headerParameters: [Parameters.accept],
  serializer
};