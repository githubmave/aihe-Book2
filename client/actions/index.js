// export const SET_ERROR = 'SET_ERROR'
export const GET_REPOS = 'GET_REPOS'

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

export const updateComment = (updatedComment, id) => {
  return {
    type: UPDATE_COMMENT,
    updatedComment,
    id
  }
}
