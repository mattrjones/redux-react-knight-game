import { combineReducers } from 'redux'
import knightReducer from './reducers/knightReducer'
import busyReducer from './reducers/busyReducer'

export default combineReducers({ data: knightReducer, busySignal: busyReducer })