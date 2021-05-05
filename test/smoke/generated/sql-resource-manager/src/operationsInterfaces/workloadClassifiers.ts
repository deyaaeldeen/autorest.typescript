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
  WorkloadClassifier,
  WorkloadClassifiersGetResponse,
  WorkloadClassifiersCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WorkloadClassifiers. */
export interface WorkloadClassifiers {
  /**
   * Gets the list of workload classifiers for a workload group
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifiers from.
   * @param options The options parameters.
   */
  listByWorkloadGroup(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<WorkloadClassifier>;
  /**
   * Gets a workload classifier
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifier from.
   * @param workloadClassifierName The name of the workload classifier.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    workloadClassifierName: string,
    options?: coreHttp.OperationOptions
  ): Promise<WorkloadClassifiersGetResponse>;
  /**
   * Creates or updates a workload classifier.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifier from.
   * @param workloadClassifierName The name of the workload classifier to create/update.
   * @param parameters The properties of the workload classifier.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    workloadClassifierName: string,
    parameters: WorkloadClassifier,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<WorkloadClassifiersCreateOrUpdateResponse>,
      WorkloadClassifiersCreateOrUpdateResponse
    >
  >;
  /**
   * Deletes a workload classifier.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifier from.
   * @param workloadClassifierName The name of the workload classifier to delete.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    workloadClassifierName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
}