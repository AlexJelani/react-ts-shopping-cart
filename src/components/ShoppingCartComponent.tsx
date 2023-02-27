


import { useShoppingCart } from "../context/ShoppingCartContext";

type ShoppingCartProps = {
    isOpen:boolean
}

export function ShoppingCart({isOpen}) {

    const {closeCart} = useShoppingCart()

    return (

    )

}

