import { ADDED } from "./actionsTypes"

export const added = (product) => {
    return {
        type: ADDED,
        payload: product
    }
}