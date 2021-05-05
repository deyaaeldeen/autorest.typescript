/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ServiceEndpointPolicyDefinition,
  ServiceEndpointPolicyDefinitionsGetResponse,
  ServiceEndpointPolicyDefinitionsCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServiceEndpointPolicyDefinitions. */
export interface ServiceEndpointPolicyDefinitions {
  /**
   * Gets all service endpoint policy definitions in a service end point policy.
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the service endpoint policy name.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    serviceEndpointPolicyName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ServiceEndpointPolicyDefinition>;
  /**
   * Deletes the specified ServiceEndpoint policy definitions.
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the Service Endpoint Policy.
   * @param serviceEndpointPolicyDefinitionName The name of the service endpoint policy definition.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceEndpointPolicyName: string,
    serviceEndpointPolicyDefinitionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Get the specified service endpoint policy definitions from service endpoint policy.
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the service endpoint policy name.
   * @param serviceEndpointPolicyDefinitionName The name of the service endpoint policy definition name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceEndpointPolicyName: string,
    serviceEndpointPolicyDefinitionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServiceEndpointPolicyDefinitionsGetResponse>;
  /**
   * Creates or updates a service endpoint policy definition in the specified service endpoint policy.
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the service endpoint policy.
   * @param serviceEndpointPolicyDefinitionName The name of the service endpoint policy definition name.
   * @param serviceEndpointPolicyDefinitions Parameters supplied to the create or update service endpoint
   *                                         policy operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceEndpointPolicyName: string,
    serviceEndpointPolicyDefinitionName: string,
    serviceEndpointPolicyDefinitions: ServiceEndpointPolicyDefinition,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<
        ServiceEndpointPolicyDefinitionsCreateOrUpdateResponse
      >,
      ServiceEndpointPolicyDefinitionsCreateOrUpdateResponse
    >
  >;
}