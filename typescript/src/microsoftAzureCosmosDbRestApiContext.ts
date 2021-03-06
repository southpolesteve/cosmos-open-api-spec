/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  HostOptions,
  Enum1,
  PartitionKeyItemsItem,
  MicrosoftAzureCosmosDbRestApiOptionalParams
} from "./models";

const packageName = "Cosmos";
const packageVersion = "1.0.0";

export class MicrosoftAzureCosmosDbRestApiContext extends coreHttp.ServiceClient {
  $host: HostOptions;
  databaseName: string;
  collectionName: string;
  xMsVersion: Enum1;
  xMsDate: Date;
  xMsDocumentdbPartitionkey: PartitionKeyItemsItem[];
  xMsMaxItemCount?: number;
  xMsContinuation?: string;
  documentId: string;
  xMsOfferThroughput: number;

  /**
   * Initializes a new instance of the MicrosoftAzureCosmosDbRestApiContext class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param databaseName The database name.
   * @param collectionName The collection name.
   * @param xMsVersion The API version.
   * @param xMsDate The date the request was sent.
   * @param xMsDocumentdbPartitionkey The logical partition key value
   * @param documentId The document id.
   * @param xMsOfferThroughput The user specified throughput for the collection expressed in units of
   *                           request units per second.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    databaseName: string,
    collectionName: string,
    xMsVersion: Enum1,
    xMsDate: Date,
    xMsDocumentdbPartitionkey: PartitionKeyItemsItem[],
    documentId: string,
    xMsOfferThroughput: number,
    options?: MicrosoftAzureCosmosDbRestApiOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (databaseName === undefined) {
      throw new Error("'databaseName' cannot be null");
    }
    if (collectionName === undefined) {
      throw new Error("'collectionName' cannot be null");
    }
    if (xMsVersion === undefined) {
      throw new Error("'xMsVersion' cannot be null");
    }
    if (xMsDate === undefined) {
      throw new Error("'xMsDate' cannot be null");
    }
    if (xMsDocumentdbPartitionkey === undefined) {
      throw new Error("'xMsDocumentdbPartitionkey' cannot be null");
    }
    if (documentId === undefined) {
      throw new Error("'documentId' cannot be null");
    }
    if (xMsOfferThroughput === undefined) {
      throw new Error("'xMsOfferThroughput' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "{$host}";

    // Parameter assignments
    this.databaseName = databaseName;
    this.collectionName = collectionName;
    this.xMsVersion = xMsVersion;
    this.xMsDate = xMsDate;
    this.xMsDocumentdbPartitionkey = xMsDocumentdbPartitionkey;
    this.documentId = documentId;
    this.xMsOfferThroughput = xMsOfferThroughput;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://localhost:8081/";
  }
}
