import { createContext, useContext } from "react";

const ShoppingCartContent = createContext({})

export function useShoppingCart() {
    return useContext(ShoppingCartContent)
}