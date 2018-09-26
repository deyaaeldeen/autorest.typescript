/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestSwaggerBATArrayServiceContext } from "./autoRestSwaggerBATArrayServiceContext";

class AutoRestSwaggerBATArrayService extends AutoRestSwaggerBATArrayServiceContext {
  // Operation groups
  arrayModel: operations.ArrayModel;

  /**
   * Initializes a new instance of the AutoRestSwaggerBATArrayService class.
   *
   * @param [options] The parameter options
   */
  constructor(options?: Models.AutoRestSwaggerBATArrayServiceOptions) {
    super(options);
    this.arrayModel = new operations.ArrayModel(this);
  }
}

// Operation Specifications

export {
  AutoRestSwaggerBATArrayService,
  AutoRestSwaggerBATArrayServiceContext,
  Models as AutoRestSwaggerBATArrayServiceModels,
  Mappers as AutoRestSwaggerBATArrayServiceMappers
};
export * from "./operations";
