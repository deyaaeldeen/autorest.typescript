// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Poller, PollOperationState } from "@azure/core-lro";
import {
  LongRunningOperation,
  LroEngineOptions,
  ResumablePollOperationState
} from "./models";
import { GenericPollOperation } from "./operation";

/**
 * The LRO Engine, a class that performs polling.
 */
export class LroEngine<
  TResult,
  TState extends PollOperationState<TResult>
> extends Poller<TState, TResult> {
  private intervalInMs: number;

  constructor(lro: LongRunningOperation<TResult>, options?: LroEngineOptions) {
    const { intervalInMs = 2000, resumeFrom } = options || {};
    function deserializeState(
      serializedState: string
    ): TState & ResumablePollOperationState<TResult> {
      try {
        return JSON.parse(serializedState).state;
      } catch (e) {
        throw new Error(
          `LroEngine: Unable to deserialize state: ${serializedState}`
        );
      }
    }
    const state: TState & ResumablePollOperationState<TResult> = resumeFrom
      ? deserializeState(resumeFrom)
      : ({} as any);

    const operation = new GenericPollOperation(
      state,
      lro,
      options?.lroResourceLocationConfig
    );
    super(operation);

    this.intervalInMs = intervalInMs;
    operation.setPollerConfig(this as any);
  }

  /**
   * The method used by the poller to wait before attempting to update its operation.
   */
  delay(): Promise<void> {
    return new Promise(resolve =>
      setTimeout(() => resolve(), this.intervalInMs)
    );
  }
}
