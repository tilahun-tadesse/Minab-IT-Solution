import { defineApolloClient } from "@nuxtjs/apollo/config";
export default defineApolloClient({
     httpEndpoint: "",
  browserHttpEndpoint: "",
  httpLinkOptions: {},
  websocketsOnly: false,
  defaultOptions: {},
  inMemoryCacheOptions: {},
  tokenName: "matching_console_id_token",
  tokenStorage: "cookie",
  // authType: "Bearer",
  authHeader: "Authorization",
})