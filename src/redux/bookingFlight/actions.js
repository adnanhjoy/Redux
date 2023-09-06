import { ADDBOOKING, CANCELBOOKING } from "./actionsTypes"

export const addBooking = (value) => {
    return {
        type: ADDBOOKING,
        payload: value
    }
}
export const cancelBooking = (value) => {
    return {
        type: CANCELBOOKING,
        payload: value
    }
}