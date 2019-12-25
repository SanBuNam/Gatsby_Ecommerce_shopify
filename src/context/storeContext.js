import React, { createContext, useState } from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
    domain: "softdavidlee.myshopify.com",
    storefrontAccessToken: "c920597ddc729c0609fc097b3918a577"
})

const defaultValues = {
    isCartOpen: false,
    cart: [],
    addProductToCart: () => { console.log("added!") },
    client,
}

export const StoreContext = createContext(defaultValues)

export const StoreProvider = ({ children }) => {
    return (
        <StoreContext.Provider value={defaultValues}>
            {children}
        </StoreContext.Provider>
    )
}