import request from 'superagent'
import { getRepos } from '../actions/index'

export function getAllRepos (dispatch) {
  return request
    .get('/api/v1/repos')
    .then((res) => {
      dispatch(getRepos(res.body))
      return null
    })
}
