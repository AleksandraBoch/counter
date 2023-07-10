
import {combineReducers, createStore, legacy_createStore} from 'redux';
import {counterReducer} from "./reducer";

const rootReducer=combineReducers({
 values:counterReducer
})

export  const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>


