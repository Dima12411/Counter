import {combineReducers, createStore} from "redux";
import counterReducer from "./counterReducer";
import {loadState, saveState} from "../utils/localstorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>
const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})



export default store;