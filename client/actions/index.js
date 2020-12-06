// export const SET_ERROR = 'SET_ERROR'
export const GET_REPOS = 'GET_REPOS'
export const ADD_USER = 'ADD_USER'
export const GET_USERS = 'GET_USERS'
export const EDIT_USER = 'EDIT_USER'

// function setError(msg) {
//   return { type: SET_ERROR, msg }
// }

export const getRepos = (repos) => {
  return {
    type: GET_REPOS,
    repos: repos
  }
}

export const addUser = (user) => {
  return {
    type: ADD_USER,
    user
  }
}

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    users: users
  }
}

export const editUser = (user) => {
  return {
    type: EDIT_USER,
    user
  }
}
