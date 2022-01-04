import { createStore, applyMiddleware, compose,combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {rootReducer} from './reducer.js'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
export const store = createStore(rootReducer,composedEnhancer)