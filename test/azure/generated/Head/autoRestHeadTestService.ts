/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestHeadTestServiceContext } from "./autoRestHeadTestServiceContext";


class AutoRestHeadTestService extends AutoRestHeadTestServiceContext {
  // Operation groups
  httpSuccess: operations.HttpSuccess;

  /**
   * Initializes a new instance of the AutoRestHeadTestService class.
   *
   * @param credentials Credentials needed for the client to connect to Azure.
   *
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.AutoRestHeadTestServiceOptions) {
    super(credentials, options);
    this.httpSuccess = new operations.HttpSuccess(this);
  }
}

// Operation Specifications

export {
  AutoRestHeadTestService,
  AutoRestHeadTestServiceContext,
  Models as AutoRestHeadTestServiceModels,
  Mappers as AutoRestHeadTestServiceMappers
};
export * from "./operations";
