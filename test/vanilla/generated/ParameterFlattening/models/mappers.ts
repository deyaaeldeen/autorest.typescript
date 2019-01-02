/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const AvailabilitySetUpdateParameters: msRest.CompositeMapper = {
  serializedName: "AvailabilitySetUpdateParameters",
  type: {
    name: "Composite",
    className: "AvailabilitySetUpdateParameters",
    modelProperties: {
      tags: {
        required: true,
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};
