export const ADD_KNIGHT = 'ADD_KNIGHT'
export const WIPE_STORE = 'WIPE_STORE'
export const DELETE_KNIGHT = 'DELETE_KNIGHT'
export const ADD_QUESTION = 'ADD_QUESTION'

export function addKnightRedux(payload) {
    return {
        type: ADD_KNIGHT,
        payload
    }
}

export function wipeStore() {
    return {
        type: WIPE_STORE,
    }
}

export function deleteKnight(knight) {
    return {
        type: DELETE_KNIGHT,
        payload: knight
    }
}

export function addQuestion(payload) {
    return {
        type: ADD_QUESTION,
        payload
    }
}