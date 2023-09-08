import { combineReducers } from "redux";
import productReducer from "./products/reducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
    pro: productReducer,
    car: cartReducer
})

export default rootReducer