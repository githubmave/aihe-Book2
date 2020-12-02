import { RECEIVE_VIDEOS } from '../actions/index'

const initialState = []

const videos = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videoData

    default:
      return state
  }
}

export default videos
