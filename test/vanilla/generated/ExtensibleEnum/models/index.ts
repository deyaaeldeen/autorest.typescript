/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";


/**
 * @interface
 * An interface representing Pet.
 */
export interface Pet {
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {DaysOfWeekExtensibleEnum} [daysOfWeek] Type of Pet. Possible
   * values include: 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
   * 'Saturday', 'Sunday'. Default value: 'Friday' .
   */
  daysOfWeek?: DaysOfWeekExtensibleEnum;
  /**
   * @member {IntEnum} intEnum Possible values include: '1', '2', '3'
   */
  intEnum: IntEnum;
}

/**
 * @interface
 * An interface representing PetStoreIncOptions.
 * @extends ServiceClientOptions
 */
export interface PetStoreIncOptions extends ServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * @interface
 * An interface representing PetAddPetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PetAddPetOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {Pet} [petParam]
   */
  petParam?: Pet;
}

/**
 * Defines values for DaysOfWeekExtensibleEnum.
 * Possible values include: 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
 * 'Sunday'
 * @readonly
 * @enum {string}
 */
export type DaysOfWeekExtensibleEnum = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

/**
 * Defines values for IntEnum.
 * Possible values include: '1', '2', '3'
 * @readonly
 * @enum {string}
 */
export type IntEnum = '1' | '2' | '3';

/**
 * Contains response data for the getByPetId operation.
 */
export type PetGetByPetIdResponse = Pet & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Pet;
    };
};

/**
 * Contains response data for the addPet operation.
 */
export type PetAddPetResponse = Pet & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Pet;
    };
};
