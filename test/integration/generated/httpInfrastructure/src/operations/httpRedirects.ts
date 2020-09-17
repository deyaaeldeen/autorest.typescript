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
import { HttpInfrastructureClient } from "../httpInfrastructureClient";
import {
  HttpRedirectsHead300Response,
  HttpRedirectsGet300Response,
  HttpRedirectsHead301Response,
  HttpRedirectsGet301Response,
  HttpRedirectsPut301Response,
  HttpRedirectsHead302Response,
  HttpRedirectsGet302Response,
  HttpRedirectsPatch302Response,
  HttpRedirectsPost303Response,
  HttpRedirectsHead307Response,
  HttpRedirectsGet307Response,
  HttpRedirectsOptions307Response,
  HttpRedirectsPut307Response,
  HttpRedirectsPatch307Response,
  HttpRedirectsPost307Response,
  HttpRedirectsDelete307Response
} from "../models";

/**
 * Class representing a HttpRedirects.
 */
export class HttpRedirects {
  private readonly client: HttpInfrastructureClient;

  /**
   * Initialize a new instance of the class HttpRedirects class.
   * @param client Reference to the service client
   */
  constructor(client: HttpInfrastructureClient) {
    this.client = client;
  }

  /**
   * Return 300 status code and redirect to /http/success/200
   * @param options The options parameters.
   */
  head300(
    options?: coreHttp.OperationOptions
  ): Promise<HttpRedirectsHead300Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      head300OperationSpec
    ) as Promise<HttpRedirectsHead300Response>;
  }

  /**
   * Return 300 status code and redirect to /http/success/200
   * @param options The options parameters.
   */
  get300(
    options?: coreHttp.OperationOptions
  ): Promise<HttpRedirectsGet300Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      get300OperationSpec
    ) as Promise<HttpRedirectsGet300Response>;
  }

  /**
   * Return 301 status code and redirect to /http/success/200
   * @param options The options parameters.
   */
  head301(
    options?: coreHttp.OperationOptions
  ): Promise<HttpRedirectsHead301Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      head301OperationSpec
    ) as Promise<HttpRedirectsHead301Response>;
  }

  /**
   * Return 301 status code and redirect to /http/success/200
   * @param options The options parameters.
   */
  get301(
    options?: coreHttp.OperationOptions
  ): Promise<HttpRedirectsGet301Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      get301OperationSpec
    ) as Promise<HttpRedirectsGet301Response>;
  }

  /**
   * Put true Boolean value in request returns 301.  This request should not be automatically redirected,
   * but should return the received 301 to the caller for evaluation
   * @param options The options parameters.
   */
  put301(
    options?: coreHttp.OperationOptions
  ): Promise<HttpRedirectsPut301Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      put301OperationSpec
    ) as Promise<HttpRedirectsPut301Response>;
  }

  /**
   * Return 302 status code and redirect to /http/success/200
   * @param options The options parameters.
   */
  head302(
    options?: coreHttp.OperationOptions
  ): Promise<HttpRedirectsHead302Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      head302OperationSpec
    ) as Promise<HttpRedirectsHead302Response>;
  }

  /**
   * Return 302 status code and redirect to /http/success/200
   * @param options The options parameters.
   */
  get302(
    options?: coreHttp.OperationOptions
  ): Promise<HttpRedirectsGet302Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      get302OperationSpec
    ) as Promise<HttpRedirectsGet302Response>;
  }

  /**
   * Patch true Boolean value in request returns 302.  This request should not be automatically
   * redirected, but should return the received 302 to the caller for evaluation
   * @param options The options parameters.
   */
  patch302(
    options?: coreHttp.OperationOptions
  ): Promise<HttpRedirectsPatch302Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      patch302OperationSpec
    ) as Promise<HttpRedirectsPatch302Response>;
  }

  /**
   * Post true Boolean value in request returns 303.  This request should be automatically redirected
   * usign a get, ultimately returning a 200 status code
   * @param options The options parameters.
   */
  post303(
    options?: coreHttp.OperationOptions
  ): Promise<HttpRedirectsPost303Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      post303OperationSpec
    ) as Promise<HttpRedirectsPost303Response>;
  }

  /**
   * Redirect with 307, resulting in a 200 success
   * @param options The options parameters.
   */
  head307(
    options?: coreHttp.OperationOptions
  ): Promise<HttpRedirectsHead307Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      head307OperationSpec
    ) as Promise<HttpRedirectsHead307Response>;
  }

  /**
   * Redirect get with 307, resulting in a 200 success
   * @param options The options parameters.
   */
  get307(
    options?: coreHttp.OperationOptions
  ): Promise<HttpRedirectsGet307Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      get307OperationSpec
    ) as Promise<HttpRedirectsGet307Response>;
  }

  /**
   * options redirected with 307, resulting in a 200 after redirect
   * @param options The options parameters.
   */
  options307(
    options?: coreHttp.OperationOptions
  ): Promise<HttpRedirectsOptions307Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      options307OperationSpec
    ) as Promise<HttpRedirectsOptions307Response>;
  }

  /**
   * Put redirected with 307, resulting in a 200 after redirect
   * @param options The options parameters.
   */
  put307(
    options?: coreHttp.OperationOptions
  ): Promise<HttpRedirectsPut307Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      put307OperationSpec
    ) as Promise<HttpRedirectsPut307Response>;
  }

  /**
   * Patch redirected with 307, resulting in a 200 after redirect
   * @param options The options parameters.
   */
  patch307(
    options?: coreHttp.OperationOptions
  ): Promise<HttpRedirectsPatch307Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      patch307OperationSpec
    ) as Promise<HttpRedirectsPatch307Response>;
  }

  /**
   * Post redirected with 307, resulting in a 200 after redirect
   * @param options The options parameters.
   */
  post307(
    options?: coreHttp.OperationOptions
  ): Promise<HttpRedirectsPost307Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      post307OperationSpec
    ) as Promise<HttpRedirectsPost307Response>;
  }

  /**
   * Delete redirected with 307, resulting in a 200 after redirect
   * @param options The options parameters.
   */
  delete307(
    options?: coreHttp.OperationOptions
  ): Promise<HttpRedirectsDelete307Response> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      delete307OperationSpec
    ) as Promise<HttpRedirectsDelete307Response>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const head300OperationSpec: coreHttp.OperationSpec = {
  path: "/http/redirect/300",
  httpMethod: "HEAD",
  responses: {
    200: {},
    300: {
      headersMapper: Mappers.HttpRedirectsHead300Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get300OperationSpec: coreHttp.OperationSpec = {
  path: "/http/redirect/300",
  httpMethod: "GET",
  responses: {
    200: {},
    300: {
      bodyMapper: {
        type: { name: "Sequence", element: { type: { name: "String" } } }
      },
      headersMapper: Mappers.HttpRedirectsGet300Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const head301OperationSpec: coreHttp.OperationSpec = {
  path: "/http/redirect/301",
  httpMethod: "HEAD",
  responses: {
    200: {},
    301: {
      headersMapper: Mappers.HttpRedirectsHead301Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get301OperationSpec: coreHttp.OperationSpec = {
  path: "/http/redirect/301",
  httpMethod: "GET",
  responses: {
    200: {},
    301: {
      headersMapper: Mappers.HttpRedirectsGet301Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const put301OperationSpec: coreHttp.OperationSpec = {
  path: "/http/redirect/301",
  httpMethod: "PUT",
  responses: {
    301: {
      headersMapper: Mappers.HttpRedirectsPut301Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const head302OperationSpec: coreHttp.OperationSpec = {
  path: "/http/redirect/302",
  httpMethod: "HEAD",
  responses: {
    200: {},
    302: {
      headersMapper: Mappers.HttpRedirectsHead302Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get302OperationSpec: coreHttp.OperationSpec = {
  path: "/http/redirect/302",
  httpMethod: "GET",
  responses: {
    200: {},
    302: {
      headersMapper: Mappers.HttpRedirectsGet302Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const patch302OperationSpec: coreHttp.OperationSpec = {
  path: "/http/redirect/302",
  httpMethod: "PATCH",
  responses: {
    302: {
      headersMapper: Mappers.HttpRedirectsPatch302Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const post303OperationSpec: coreHttp.OperationSpec = {
  path: "/http/redirect/303",
  httpMethod: "POST",
  responses: {
    200: {},
    303: {
      headersMapper: Mappers.HttpRedirectsPost303Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const head307OperationSpec: coreHttp.OperationSpec = {
  path: "/http/redirect/307",
  httpMethod: "HEAD",
  responses: {
    200: {},
    307: {
      headersMapper: Mappers.HttpRedirectsHead307Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const get307OperationSpec: coreHttp.OperationSpec = {
  path: "/http/redirect/307",
  httpMethod: "GET",
  responses: {
    200: {},
    307: {
      headersMapper: Mappers.HttpRedirectsGet307Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const options307OperationSpec: coreHttp.OperationSpec = {
  path: "/http/redirect/307",
  httpMethod: "OPTIONS",
  responses: {
    200: {},
    307: {
      headersMapper: Mappers.HttpRedirectsOptions307Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const put307OperationSpec: coreHttp.OperationSpec = {
  path: "/http/redirect/307",
  httpMethod: "PUT",
  responses: {
    200: {},
    307: {
      headersMapper: Mappers.HttpRedirectsPut307Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const patch307OperationSpec: coreHttp.OperationSpec = {
  path: "/http/redirect/307",
  httpMethod: "PATCH",
  responses: {
    200: {},
    307: {
      headersMapper: Mappers.HttpRedirectsPatch307Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const post307OperationSpec: coreHttp.OperationSpec = {
  path: "/http/redirect/307",
  httpMethod: "POST",
  responses: {
    200: {},
    307: {
      headersMapper: Mappers.HttpRedirectsPost307Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const delete307OperationSpec: coreHttp.OperationSpec = {
  path: "/http/redirect/307",
  httpMethod: "DELETE",
  responses: {
    200: {},
    307: {
      headersMapper: Mappers.HttpRedirectsDelete307Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.booleanValue,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};