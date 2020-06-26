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
  PublicIPPrefixesGetOptionalParams,
  PublicIPPrefixesGetResponse,
  PublicIPPrefix,
  PublicIPPrefixesCreateOrUpdateResponse,
  TagsObject,
  PublicIPPrefixesUpdateTagsResponse,
  PublicIPPrefixesListAllResponse,
  PublicIPPrefixesListResponse,
  PublicIPPrefixesListAllNextResponse,
  PublicIPPrefixesListNextResponse
} from "../models";

/**
 * Class representing a PublicIPPrefixes.
 */
export class PublicIPPrefixes {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class PublicIPPrefixes class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Deletes the specified public IP prefix.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the PublicIpPrefix.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    publicIpPrefixName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      publicIpPrefixName,
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
   * Gets the specified public IP prefix in a specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the public IP prefix.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    publicIpPrefixName: string,
    options?: PublicIPPrefixesGetOptionalParams
  ): Promise<PublicIPPrefixesGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, publicIpPrefixName, options: operationOptions },
      getOperationSpec
    ) as Promise<PublicIPPrefixesGetResponse>;
  }

  /**
   * Creates or updates a static or dynamic public IP prefix.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the public IP prefix.
   * @param parameters Parameters supplied to the create or update public IP prefix operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    publicIpPrefixName: string,
    parameters: PublicIPPrefix,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<PublicIPPrefixesCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      publicIpPrefixName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        PublicIPPrefixesCreateOrUpdateResponse
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
      finalStateVia: "location"
    });
  }

  /**
   * Updates public IP prefix tags.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpPrefixName The name of the public IP prefix.
   * @param parameters Parameters supplied to update public IP prefix tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    publicIpPrefixName: string,
    parameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<PublicIPPrefixesUpdateTagsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        publicIpPrefixName,
        parameters,
        options: operationOptions
      },
      updateTagsOperationSpec
    ) as Promise<PublicIPPrefixesUpdateTagsResponse>;
  }

  /**
   * Gets all the public IP prefixes in a subscription.
   * @param options The options parameters.
   */
  listAll(
    options?: coreHttp.OperationOptions
  ): Promise<PublicIPPrefixesListAllResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listAllOperationSpec
    ) as Promise<PublicIPPrefixesListAllResponse>;
  }

  /**
   * Gets all public IP prefixes in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PublicIPPrefixesListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, options: operationOptions },
      listOperationSpec
    ) as Promise<PublicIPPrefixesListResponse>;
  }

  /**
   * ListAllNext
   * @param nextLink The nextLink from the previous successful call to the ListAll method.
   * @param options The options parameters.
   */
  listAllNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PublicIPPrefixesListAllNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listAllNextOperationSpec
    ) as Promise<PublicIPPrefixesListAllNextResponse>;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PublicIPPrefixesListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<PublicIPPrefixesListNextResponse>;
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIpPrefixName}",
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
    Parameters.publicIpPrefixName
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIpPrefixName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPPrefix
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.publicIpPrefixName
  ],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIpPrefixName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPPrefix
    },
    201: {
      bodyMapper: Mappers.PublicIPPrefix
    },
    202: {
      bodyMapper: Mappers.PublicIPPrefix
    },
    204: {
      bodyMapper: Mappers.PublicIPPrefix
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters43,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.publicIpPrefixName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes/{publicIpPrefixName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPPrefix
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
    Parameters.publicIpPrefixName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listAllOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/publicIPPrefixes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPPrefixListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPPrefixes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPPrefixListResult
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
const listAllNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPPrefixListResult
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
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPPrefixListResult
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
