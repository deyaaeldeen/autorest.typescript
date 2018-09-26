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
import { AutoRestSwaggerBATFormDataServiceContext } from "./autoRestSwaggerBATFormDataServiceContext";

class AutoRestSwaggerBATFormDataService extends AutoRestSwaggerBATFormDataServiceContext {
  // Operation groups
  formdata: operations.Formdata;

  /**
   * Initializes a new instance of the AutoRestSwaggerBATFormDataService class.
   *
   * @param [options] The parameter options
   */
  constructor(options?: Models.AutoRestSwaggerBATFormDataServiceOptions) {
    super(options);
    this.formdata = new operations.Formdata(this);
  }
}

// Operation Specifications

export {
  AutoRestSwaggerBATFormDataService,
  AutoRestSwaggerBATFormDataServiceContext,
  Models as AutoRestSwaggerBATFormDataServiceModels,
  Mappers as AutoRestSwaggerBATFormDataServiceMappers
};
export * from "./operations";
