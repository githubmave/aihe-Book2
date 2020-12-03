import request from 'superagent'
import { receiveRepos } from '../actions/index'


export function getAllRepos (dispatch) {
  return request
  .get('/api/v1/repos')
  .then((res) => {
    dispatch(receiveRepos(res.body))
    return null
  })
}

