import knightReducer from "./reducers/knightReducer";
import { createStore } from 'redux';

const store = createStore(knightReducer);

export default store;