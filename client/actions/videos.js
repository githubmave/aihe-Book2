import { postVideo } from '../apis/videos'
export const ADD_VIDEO = 'ADD_VIDEO'
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS'
export const SET_ERROR = 'SET_ERROR'

function setError (msg) {
  return { type: SET_ERROR, msg }
}

export function addVideo (video) {
  return { type: ADD_VIDEO, video: video }
}

export function saveVideo (title, link) {
  return (dispatch) => {
    postVideo(title, link)
      .then((newVideo) => dispatch(addVideo(newVideo)))
      .catch((err) => dispatch(setError(err)))
  }
}

export const receiveVideos = (videoData) => {
  return {
    type: RECEIVE_VIDEOS,
    videoData
  }
}
