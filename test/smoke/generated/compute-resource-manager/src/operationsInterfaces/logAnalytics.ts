/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  RequestRateByIntervalInput,
  LogAnalyticsExportRequestRateByIntervalResponse,
  ThrottledRequestsInput,
  LogAnalyticsExportThrottledRequestsResponse
} from "../models";

/** Interface representing a LogAnalytics. */
export interface LogAnalytics {
  /**
   * Export logs that show Api requests made by this subscription in the given time window to show
   * throttling activities.
   * @param location The location upon which virtual-machine-sizes is queried.
   * @param parameters Parameters supplied to the LogAnalytics getRequestRateByInterval Api.
   * @param options The options parameters.
   */
  exportRequestRateByInterval(
    location: string,
    parameters: RequestRateByIntervalInput,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<LogAnalyticsExportRequestRateByIntervalResponse>,
      LogAnalyticsExportRequestRateByIntervalResponse
    >
  >;
  /**
   * Export logs that show total throttled Api requests for this subscription in the given time window.
   * @param location The location upon which virtual-machine-sizes is queried.
   * @param parameters Parameters supplied to the LogAnalytics getThrottledRequests Api.
   * @param options The options parameters.
   */
  exportThrottledRequests(
    location: string,
    parameters: ThrottledRequestsInput,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<LogAnalyticsExportThrottledRequestsResponse>,
      LogAnalyticsExportThrottledRequestsResponse
    >
  >;
}