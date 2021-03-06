/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/polymorphicrecursiveMappers";
import { AutoRestComplexTestServiceContext } from "../autoRestComplexTestServiceContext";

/** Class representing a Polymorphicrecursive. */
export class Polymorphicrecursive {
  private readonly client: AutoRestComplexTestServiceContext;

  /**
   * Create a Polymorphicrecursive.
   * @param {AutoRestComplexTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestComplexTestServiceContext) {
    this.client = client;
  }

  /**
   * Get complex types that are polymorphic and have recursive references
   * @param [options] The optional parameters
   * @returns Promise<Models.PolymorphicrecursiveGetValidResponse>
   */
  getValid(options?: coreHttp.RequestOptionsBase): Promise<Models.PolymorphicrecursiveGetValidResponse>;
  /**
   * @param callback The callback
   */
  getValid(callback: coreHttp.ServiceCallback<Models.FishUnion>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getValid(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.FishUnion>): void;
  getValid(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.FishUnion>, callback?: coreHttp.ServiceCallback<Models.FishUnion>): Promise<Models.PolymorphicrecursiveGetValidResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getValidOperationSpec,
      callback) as Promise<Models.PolymorphicrecursiveGetValidResponse>;
  }

  /**
   * Put complex types that are polymorphic and have recursive references
   * @param complexBody Please put a salmon that looks like this:
   * {
   * "fishtype": "salmon",
   * "species": "king",
   * "length": 1,
   * "age": 1,
   * "location": "alaska",
   * "iswild": true,
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "length": 20,
   * "age": 6,
   * "siblings": [
   * {
   * "fishtype": "salmon",
   * "species": "coho",
   * "length": 2,
   * "age": 2,
   * "location": "atlantic",
   * "iswild": true,
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "length": 20,
   * "age": 6
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * }
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putValid(complexBody: Models.FishUnion, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param complexBody Please put a salmon that looks like this:
   * {
   * "fishtype": "salmon",
   * "species": "king",
   * "length": 1,
   * "age": 1,
   * "location": "alaska",
   * "iswild": true,
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "length": 20,
   * "age": 6,
   * "siblings": [
   * {
   * "fishtype": "salmon",
   * "species": "coho",
   * "length": 2,
   * "age": 2,
   * "location": "atlantic",
   * "iswild": true,
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "length": 20,
   * "age": 6
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * }
   * @param callback The callback
   */
  putValid(complexBody: Models.FishUnion, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param complexBody Please put a salmon that looks like this:
   * {
   * "fishtype": "salmon",
   * "species": "king",
   * "length": 1,
   * "age": 1,
   * "location": "alaska",
   * "iswild": true,
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "length": 20,
   * "age": 6,
   * "siblings": [
   * {
   * "fishtype": "salmon",
   * "species": "coho",
   * "length": 2,
   * "age": 2,
   * "location": "atlantic",
   * "iswild": true,
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "length": 20,
   * "age": 6
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "length": 10,
   * "age": 105
   * }
   * ]
   * }
   * @param options The optional parameters
   * @param callback The callback
   */
  putValid(complexBody: Models.FishUnion, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  putValid(complexBody: Models.FishUnion, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putValidOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const getValidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/polymorphicrecursive/valid",
  responses: {
    200: {
      bodyMapper: Mappers.Fish
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putValidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/polymorphicrecursive/valid",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.Fish,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
