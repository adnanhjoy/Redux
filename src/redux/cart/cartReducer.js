import { ADDEDCART, DELETECART, INCREMENT } from "./actionsType";

const initialState = {
    carts: [],
    qty: 0,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDEDCART:
            return {
                ...state,
                carts: state.carts.map(cart => {
                  if (cart === action.payload) {
                    return { ...cart, qty: cart.qty + 1 };
                  } else {
                    return [...state.carts, action.payload];
                  }
                })
              };
              
        case DELETECART:
            return {
                ...state,
                cart: state.filter(product => product.id !== action.payload)
            }
        case INCREMENT:
            return {
                ...state,
                qty: state.qty + 1
            }

        default:
            return state;
    }
}

export default cartReducer