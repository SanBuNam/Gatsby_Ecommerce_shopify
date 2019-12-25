import React from "react";
import Client from "shopify-buy";

export const client = Client.buildClient({
  domain: "good-daddy-shop.myshopify.com",
  storefrontAccessToken: "99c10973dc22ab94c09cbe5a3c8e176e"
});

export const StoreContext = React.createContext({
  client
});
