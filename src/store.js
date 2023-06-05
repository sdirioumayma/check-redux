import {createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { toDoReducer } from './reducers/toDoReducer'

 const reducer= combineReducers({
  todo : toDoReducer,
 })
 const initialState={}
 const middleWare= [thunk]
  export const store= createStore(
    reducer,
    initialState,
   composeWithDevTools(applyMiddleware(...middleWare))
 )