import { Flotiq } from "@flotiq/flotiq-api-sdk";
import { createNextMiddleware } from "@flotiq/nextjs-addon";

/// <reference path="./flotiq-api.d.ts" />

export const flotiqApiClient = new Flotiq({
  apiKey: process.env.FLOTIQ_API_KEY,

  middleware: [createNextMiddleware()],
});
