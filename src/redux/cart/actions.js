import { ADDEDCART, DECREMENT, DELETECART, INCREMENT } from "./actionsType"

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

export const increment = () => {
    return {
        type: INCREMENT,
    }
}

export const decrement = (productId) => {
    return {
        type: DECREMENT,
        payload: productId
    }
}