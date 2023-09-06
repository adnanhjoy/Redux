import { ADDBOOKING, CANCELBOOKING } from "./actionsTypes"

const initialState = {
    value: []
}

const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDBOOKING:
            return {
                ...state,
                value: [...state.value, action.payload]
            }
        case CANCELBOOKING:
            return {
                ...state,
                value: state.value.filter(flight => flight !== action.payload)
            }
        default:
            return state
    }
}

export default flightReducer;