import { combineReducers } from 'redux'
import videos from './videos'
import repos from './repos'
import users from './users'

export default combineReducers({
  videos,
  repos,
  users
})
