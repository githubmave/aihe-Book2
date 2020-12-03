import repos from '../reducers/repos'

export const RECEIVE_REPOS = 'RECEIVE_REPOS'

export const receiveRepos = (repos) => {
  return {
    type: RECEIVE_REPOS,
    repos: repos
  }
}
