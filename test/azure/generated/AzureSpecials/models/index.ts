/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "ms-rest-azure-js";
import * as msRest from ;

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {number} [status]
   */
  status?: number;
  /**
   * @member {string} [message]
   */
  message?: string;
}

/**
 * @interface
 * An interface representing OdataFilter.
 */
export interface OdataFilter {
  /**
   * @member {number} [id]
   */
  id?: number;
  /**
   * @member {string} [name]
   */
  name?: string;
}

/**
 * @interface
 * An interface representing HeaderCustomNamedRequestIdParamGroupingParameters.
 * Additional parameters for customNamedRequestIdParamGrouping operation.
 *
 */
export interface HeaderCustomNamedRequestIdParamGroupingParameters {
  /**
   * @member {string} fooClientRequestId The fooRequestId
   */
  fooClientRequestId: string;
}

/**
 * @interface
 * An interface representing ApiVersionLocalGetMethodLocalNullOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ApiVersionLocalGetMethodLocalNullOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [apiVersion] This should appear as a method parameter,
   * use value null, this should result in no serialized parameter
   */
  apiVersion?: string;
}

/**
 * @interface
 * An interface representing SkipUrlEncodingGetMethodQueryNullOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface SkipUrlEncodingGetMethodQueryNullOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [q1] Unencoded query parameter with value null
   */
  q1?: string;
}

/**
 * @interface
 * An interface representing OdataGetWithFilterOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface OdataGetWithFilterOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [filter] The filter parameter with value '$filter=id gt 5
   * and name eq 'foo''.
   */
  filter?: string;
  /**
   * @member {number} [top] The top parameter with value 10.
   */
  top?: number;
  /**
   * @member {string} [orderby] The orderby parameter with value id.
   */
  orderby?: string;
}

/**
 * @interface
 * An interface representing AutoRestAzureSpecialParametersTestClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface AutoRestAzureSpecialParametersTestClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * @interface
 * An interface representing HeaderCustomNamedRequestIdHeaders.
 * Defines headers for customNamedRequestId operation.
 *
 */
export interface HeaderCustomNamedRequestIdHeaders {
  /**
   * @member {string} [fooRequestId] Gets the foo-request-id.
   */
  fooRequestId: string;
}

/**
 * @interface
 * An interface representing HeaderCustomNamedRequestIdParamGroupingHeaders.
 * Defines headers for customNamedRequestIdParamGrouping operation.
 *
 */
export interface HeaderCustomNamedRequestIdParamGroupingHeaders {
  /**
   * @member {string} [fooRequestId] Gets the foo-request-id.
   */
  fooRequestId: string;
}

/**
 * @interface
 * An interface representing HeaderCustomNamedRequestIdHeadHeaders.
 * Defines headers for customNamedRequestIdHead operation.
 *
 */
export interface HeaderCustomNamedRequestIdHeadHeaders {
  /**
   * @member {string} [fooRequestId] Gets the foo-request-id.
   */
  fooRequestId: string;
}


/**
 * Contains response data for the customNamedRequestId operation.
 */
export type HeaderCustomNamedRequestIdResponse = HeaderCustomNamedRequestIdHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: HeaderCustomNamedRequestIdHeaders;
    };
};

/**
 * Contains response data for the customNamedRequestIdParamGrouping operation.
 */
export type HeaderCustomNamedRequestIdParamGroupingResponse = HeaderCustomNamedRequestIdParamGroupingHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: HeaderCustomNamedRequestIdParamGroupingHeaders;
    };
};

/**
 * Contains response data for the customNamedRequestIdHead operation.
 */
export type HeaderCustomNamedRequestIdHeadResponse = HeaderCustomNamedRequestIdHeadHeaders & {
  /**
   * The parsed response body.
   */
  body: boolean;
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: HeaderCustomNamedRequestIdHeadHeaders;
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: boolean;
    };
};
