import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'
import { getRepos } from '../actions/index'

const acceptJsonHeader = { Accept: 'application/json' }

export function getAllRepos (dispatch) {
  return request
    .get('/api/v1/repos')
    .set(acceptJsonHeader)
    .then((res) => {
      dispatch(getRepos(res.body))
      return null
    })
    .catch(logError)
}

function logError (err) {
  if (err.message === 'Forbidden') {
    throw new Error('Only the user who added the repo may update and delete it')
  } else {
    // eslint-disable-next-line no-console
    console.error(
      'Error consuming the API (in client/apis/repos.js):',
      err.message
    )
    throw err
  }
}
