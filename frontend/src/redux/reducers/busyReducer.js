  
function busyReducer(state = false, action) {
    switch (action.type) {
      case "FETCHING":
        return true
      case "LOAD_QUESTIONS":
        return false
      case "LOAD_KNIGHTS":
          return false 
      default:
        return state
    }
  }
  
  export default busyReducer