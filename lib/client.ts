import { createClient } from "microcms-js-sdk";

export const client=createClient({
  serviceDomain:"std-tech",
  apiKey:process.env.API_KEY||''
})