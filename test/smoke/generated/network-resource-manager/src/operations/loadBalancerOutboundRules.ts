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
  LoadBalancerOutboundRulesListResponse,
  LoadBalancerOutboundRulesGetResponse,
  LoadBalancerOutboundRulesListNextResponse
} from "../models";

/**
 * Class representing a LoadBalancerOutboundRules.
 */
export class LoadBalancerOutboundRules {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class LoadBalancerOutboundRules class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the outbound rules in a load balancer.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    loadBalancerName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LoadBalancerOutboundRulesListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, loadBalancerName, options: operationOptions },
      listOperationSpec
    ) as Promise<LoadBalancerOutboundRulesListResponse>;
  }

  /**
   * Gets the specified load balancer outbound rule.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param outboundRuleName The name of the outbound rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    loadBalancerName: string,
    outboundRuleName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LoadBalancerOutboundRulesGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        loadBalancerName,
        outboundRuleName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<LoadBalancerOutboundRulesGetResponse>;
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
  ): Promise<LoadBalancerOutboundRulesListNextResponse> {
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
    ) as Promise<LoadBalancerOutboundRulesListNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/outboundRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoadBalancerOutboundRuleListResult
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/outboundRules/{outboundRuleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OutboundRule
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
    Parameters.outboundRuleName
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoadBalancerOutboundRuleListResult
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
