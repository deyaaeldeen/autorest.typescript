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
import { MicrosoftAzureTestUrlContext } from "./microsoftAzureTestUrlContext";


class MicrosoftAzureTestUrl extends MicrosoftAzureTestUrlContext {
  // Operation groups
  group: operations.Group;

  /**
   * Initializes a new instance of the MicrosoftAzureTestUrl class.
   *
   * @param credentials Credentials needed for the client to connect to Azure.
   *
   * @param subscriptionId Subscription Id.
   *
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.MicrosoftAzureTestUrlOptions) {
    super(credentials, subscriptionId, options);
    this.group = new operations.Group(this);
  }
}

// Operation Specifications

export {
  MicrosoftAzureTestUrl,
  MicrosoftAzureTestUrlContext,
  Models as MicrosoftAzureTestUrlModels,
  Mappers as MicrosoftAzureTestUrlMappers
};
export * from "./operations";
