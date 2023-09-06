import { createStore } from "redux";
import flightReducer from "./bookingFlight/flightReducer";

const store = createStore(flightReducer);

export default store;