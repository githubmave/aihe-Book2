import { RECEIVE_REPOS } from '../actions/index'

function repos (state = [], action) {
  switch(action.type) {
    case RECEIVE_REPOS:
      return action.repos
      default:
        return state
  }
}

export default repos