/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import {
  LoadBalancerBackendAddressPoolsListResponse,
  LoadBalancerBackendAddressPoolsGetResponse,
  LoadBalancerBackendAddressPoolsListNextResponse
} from "../models";

/**
 * Class representing a LoadBalancerBackendAddressPools.
 */
export class LoadBalancerBackendAddressPools {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class LoadBalancerBackendAddressPools class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the load balancer backed address pools.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    loadBalancerName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LoadBalancerBackendAddressPoolsListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, loadBalancerName, options: operationOptions },
      listOperationSpec
    ) as Promise<LoadBalancerBackendAddressPoolsListResponse>;
  }

  /**
   * Gets load balancer backend address pool.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param backendAddressPoolName The name of the backend address pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    loadBalancerName: string,
    backendAddressPoolName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LoadBalancerBackendAddressPoolsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        loadBalancerName,
        backendAddressPoolName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<LoadBalancerBackendAddressPoolsGetResponse>;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param loadBalancerName The name of the load balancer.
   * @param options The options parameters.
   */
  listNext(
    resourceGroupName: string,
    nextLink: string,
    loadBalancerName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LoadBalancerBackendAddressPoolsListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        nextLink,
        loadBalancerName,
        options: operationOptions
      },
      listNextOperationSpec
    ) as Promise<LoadBalancerBackendAddressPoolsListNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/backendAddressPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoadBalancerBackendAddressPoolListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.loadBalancerName
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/backendAddressPools/{backendAddressPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BackendAddressPool
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.loadBalancerName,
    Parameters.backendAddressPoolName
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoadBalancerBackendAddressPoolListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.loadBalancerName
  ],
  serializer
};
