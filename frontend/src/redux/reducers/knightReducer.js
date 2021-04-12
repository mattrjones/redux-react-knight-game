import { ADD_KNIGHT, DELETE_KNIGHT, WIPE_STORE, ADD_QUESTION } from "../actions.js"

const initialState = {
    knights: [],
    questions: []
};

function knightReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_KNIGHT:
            if (!state.knights.includes(action.payload)){
            return Object.assign({}, state, {
                knights: [...state.knights, action.payload]
            })}
        case WIPE_STORE:
            state = {knights:[], questions:[]};
        case DELETE_KNIGHT:
            return {...state, knights: state.knights.filter(knight => knight.id !== action.payload)};
        case ADD_QUESTION:
            if (!state.questions.includes(action.payload)){
            return Object.assign({}, state, {
                questions: [...state.questions, action.payload]
            })}
        default:
            return state;
    }
}

export default knightReducer;