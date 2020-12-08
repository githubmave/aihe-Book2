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
