export const GET_REPOS = 'GET_REPOS'

export const getRepos = (repos) => {
  return {
    type: GET_REPOS,
    repos: repos
  }
}
