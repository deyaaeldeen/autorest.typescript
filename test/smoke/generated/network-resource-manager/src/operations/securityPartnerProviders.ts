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
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  SecurityPartnerProvidersGetResponse,
  SecurityPartnerProvider,
  SecurityPartnerProvidersCreateOrUpdateResponse,
  TagsObject,
  SecurityPartnerProvidersUpdateTagsResponse,
  SecurityPartnerProvidersListByResourceGroupResponse,
  SecurityPartnerProvidersListResponse,
  SecurityPartnerProvidersListByResourceGroupNextResponse,
  SecurityPartnerProvidersListNextResponse
} from "../models";

/**
 * Class representing a SecurityPartnerProviders.
 */
export class SecurityPartnerProviders {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class SecurityPartnerProviders class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Deletes the specified Security Partner Provider.
   * @param resourceGroupName The name of the resource group.
   * @param securityPartnerProviderName The name of the Security Partner Provider.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    securityPartnerProviderName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      securityPartnerProviderName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      deleteOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: deleteOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets the specified Security Partner Provider.
   * @param resourceGroupName The name of the resource group.
   * @param securityPartnerProviderName The name of the Security Partner Provider.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    securityPartnerProviderName: string,
    options?: coreHttp.OperationOptions
  ): Promise<SecurityPartnerProvidersGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        securityPartnerProviderName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<SecurityPartnerProvidersGetResponse>;
  }

  /**
   * Creates or updates the specified Security Partner Provider.
   * @param resourceGroupName The name of the resource group.
   * @param securityPartnerProviderName The name of the Security Partner Provider.
   * @param parameters Parameters supplied to the create or update Security Partner Provider operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    securityPartnerProviderName: string,
    parameters: SecurityPartnerProvider,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<SecurityPartnerProvidersCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "azure-async-operation"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      securityPartnerProviderName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        SecurityPartnerProvidersCreateOrUpdateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      createOrUpdateOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "azure-async-operation"
    });
  }

  /**
   * Updates tags of a Security Partner Provider resource.
   * @param resourceGroupName The name of the resource group.
   * @param securityPartnerProviderName The name of the Security Partner Provider.
   * @param parameters Parameters supplied to update Security Partner Provider tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    securityPartnerProviderName: string,
    parameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<SecurityPartnerProvidersUpdateTagsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        securityPartnerProviderName,
        parameters,
        options: operationOptions
      },
      updateTagsOperationSpec
    ) as Promise<SecurityPartnerProvidersUpdateTagsResponse>;
  }

  /**
   * Lists all Security Partner Providers in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<SecurityPartnerProvidersListByResourceGroupResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, options: operationOptions },
      listByResourceGroupOperationSpec
    ) as Promise<SecurityPartnerProvidersListByResourceGroupResponse>;
  }

  /**
   * Gets all the Security Partner Providers in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: coreHttp.OperationOptions
  ): Promise<SecurityPartnerProvidersListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listOperationSpec
    ) as Promise<SecurityPartnerProvidersListResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<SecurityPartnerProvidersListByResourceGroupNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options: operationOptions },
      listByResourceGroupNextOperationSpec
    ) as Promise<SecurityPartnerProvidersListByResourceGroupNextResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<SecurityPartnerProvidersListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<SecurityPartnerProvidersListNextResponse>;
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/securityPartnerProviders/{securityPartnerProviderName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.securityPartnerProviderName
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/securityPartnerProviders/{securityPartnerProviderName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityPartnerProvider
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
    Parameters.securityPartnerProviderName
  ],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/securityPartnerProviders/{securityPartnerProviderName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityPartnerProvider
    },
    201: {
      bodyMapper: Mappers.SecurityPartnerProvider
    },
    202: {
      bodyMapper: Mappers.SecurityPartnerProvider
    },
    204: {
      bodyMapper: Mappers.SecurityPartnerProvider
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters45,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.securityPartnerProviderName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/securityPartnerProviders/{securityPartnerProviderName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityPartnerProvider
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.securityPartnerProviderName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/securityPartnerProviders",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityPartnerProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/securityPartnerProviders",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityPartnerProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityPartnerProviderListResult
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
    Parameters.nextLink
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityPartnerProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  serializer
};
