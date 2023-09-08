import { ADDEDCART, DELETECART } from "./actionsType"

export const addedCart = (product) => {
    return {
        type: ADDEDCART,
        payload: product
    }
}

export const deleteCart = (productId) => {
    return {
        type: DELETECART,
        payload: productId
    }
}