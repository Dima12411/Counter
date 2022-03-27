import {combineReducers, createStore} from "redux";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>
const store = createStore(rootReducer)

export default store;