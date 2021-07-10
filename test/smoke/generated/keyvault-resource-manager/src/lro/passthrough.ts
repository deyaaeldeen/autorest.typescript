/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { LroResponse, LroStatus } from "./models";

export function processPassthroughOperationResult<TResult>(
  response: LroResponse<TResult>
): LroStatus<TResult> {
  return {
    ...response,
    done: true
  };
}
