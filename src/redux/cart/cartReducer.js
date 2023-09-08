import { ADDEDCART, DELETECART } from "./actionsType";

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDEDCART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case DELETECART:
            return {
                ...state,
                cart: state.filter(product => product.id !== action.payload)
            }

        default:
            return state;
    }
}

export default cartReducer