import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./redusers";

const rootReducer=combineReducers(reducers)

export let store=createStore(rootReducer,applyMiddleware(thunk))

export type RootStateType=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
export type AppStateType=ReturnType<typeof rootReducer>
