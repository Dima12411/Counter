import {combineReducers, createStore} from "redux";
import counterReducer from "./counterReducer";
import propertyForCounterReducer from "./propertyForCounterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    property: propertyForCounterReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)