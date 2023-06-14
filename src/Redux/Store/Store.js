import {  createStore,applyMiddleware} from "redux";
import {rootReducer} from "../Reducers/RootReducers";
import thunk from "redux-thunk";
export const store = createStore(rootReducer,applyMiddleware(thunk))