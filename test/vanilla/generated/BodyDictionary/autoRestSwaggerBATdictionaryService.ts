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
import { AutoRestSwaggerBATdictionaryServiceContext } from "./autoRestSwaggerBATdictionaryServiceContext";

class AutoRestSwaggerBATdictionaryService extends AutoRestSwaggerBATdictionaryServiceContext {
  // Operation groups
  dictionary: operations.Dictionary;

  /**
   * Initializes a new instance of the AutoRestSwaggerBATdictionaryService class.
   *
   * @param [options] The parameter options
   */
  constructor(options?: Models.AutoRestSwaggerBATdictionaryServiceOptions) {
    super(options);
    this.dictionary = new operations.Dictionary(this);
  }
}

// Operation Specifications

export {
  AutoRestSwaggerBATdictionaryService,
  AutoRestSwaggerBATdictionaryServiceContext,
  Models as AutoRestSwaggerBATdictionaryServiceModels,
  Mappers as AutoRestSwaggerBATdictionaryServiceMappers
};
export * from "./operations";
