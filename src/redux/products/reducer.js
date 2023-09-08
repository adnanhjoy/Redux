import { ADDED } from "./actionsTypes"

const initialState = {
    products: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return {
                ...state,
                products: [...state, action.payload]
            }
        default:
            return state
    }
}

export default productReducer