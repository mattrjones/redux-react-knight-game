export const ADD_KNIGHT = 'ADD_KNIGHT'
export const WIPE_STORE = 'WIPE_STORE'
export const DELETE_KNIGHT = 'DELETE_KNIGHT'
export const ADD_QUESTION = 'ADD_QUESTION'
export const LOAD_QUESTIONS = 'LOAD_QUESTIONS'
export const LOAD_KNIGHTS = 'LOAD_KNIGHTS'

const URL = 'http://localhost:3001/api/v1/'
const parseJSON = res => res.json()

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

export function loadQuestions() {
    return (dispatch) => {
      dispatch({ type: 'FETCHING' })
      fetch(URL + 'questions').then(parseJSON)
      .then(data => {
        dispatch({ type: 'LOAD_QUESTIONS', payload: data })
      })
    }
  }

  export function loadKnights() {
    return (dispatch) => {
      dispatch({ type: 'FETCHING' })
      fetch(URL + 'knights').then(parseJSON)
      .then(data => {
        dispatch({ type: 'LOAD_KNIGHTS', payload: data })
      })
    }
  }