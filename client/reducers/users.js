import { ADD_USER, GET_USERS, EDIT_USER } from '../actions/index'

const users = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users

    case ADD_USER:
      return [...state, action.user]

    case EDIT_USER:
      return action.user

    default:
      return state
  }
}

export default users
