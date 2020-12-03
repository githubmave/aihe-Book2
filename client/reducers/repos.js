import { GET_REPOS } from '../actions/index'

function repos (state = [], action) {
  switch(action.type) {
    case GET_REPOS:
      return action.repos
      
      default:
        return state
  }
}

export default repos