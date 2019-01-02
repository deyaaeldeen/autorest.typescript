/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const ErrorModel: msRest.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HeaderResponseExistingKeyHeaders: msRest.CompositeMapper = {
  serializedName: "header-responseexistingkey-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseExistingKeyHeaders",
    modelProperties: {
      userAgent: {
        serializedName: "user-agent",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HeaderResponseProtectedKeyHeaders: msRest.CompositeMapper = {
  serializedName: "header-responseprotectedkey-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseProtectedKeyHeaders",
    modelProperties: {
      contentType: {
        serializedName: "content-type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HeaderResponseIntegerHeaders: msRest.CompositeMapper = {
  serializedName: "header-responseinteger-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseIntegerHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const HeaderResponseLongHeaders: msRest.CompositeMapper = {
  serializedName: "header-responselong-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseLongHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const HeaderResponseFloatHeaders: msRest.CompositeMapper = {
  serializedName: "header-responsefloat-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseFloatHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const HeaderResponseDoubleHeaders: msRest.CompositeMapper = {
  serializedName: "header-responsedouble-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseDoubleHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const HeaderResponseBoolHeaders: msRest.CompositeMapper = {
  serializedName: "header-responsebool-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseBoolHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const HeaderResponseStringHeaders: msRest.CompositeMapper = {
  serializedName: "header-responsestring-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseStringHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HeaderResponseDateHeaders: msRest.CompositeMapper = {
  serializedName: "header-responsedate-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseDateHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Date"
        }
      }
    }
  }
};

export const HeaderResponseDatetimeHeaders: msRest.CompositeMapper = {
  serializedName: "header-responsedatetime-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseDatetimeHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const HeaderResponseDatetimeRfc1123Headers: msRest.CompositeMapper = {
  serializedName: "header-responsedatetimerfc1123-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseDatetimeRfc1123Headers",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const HeaderResponseDurationHeaders: msRest.CompositeMapper = {
  serializedName: "header-responseduration-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseDurationHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "TimeSpan"
        }
      }
    }
  }
};

export const HeaderResponseByteHeaders: msRest.CompositeMapper = {
  serializedName: "header-responsebyte-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseByteHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const HeaderResponseEnumHeaders: msRest.CompositeMapper = {
  serializedName: "header-responseenum-headers",
  type: {
    name: "Composite",
    className: "HeaderResponseEnumHeaders",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Enum",
          allowedValues: [
            "White",
            "black",
            "GREY"
          ]
        }
      }
    }
  }
};
