import { getFruits } from '../apis/fruits'

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS'

export const SET_FRUITS = 'SET_FRUITS'

export const receiveVideos = (videoData) => {
  return {
    type: RECEIVE_VIDEOS,
    videoData,
  }
}

export function setFruits(fruits) {
  return {
    type: SET_FRUITS,
    fruits,
  }
}

export function fetchFruits() {
  return (dispatch) => {
    return getFruits().then((fruits) => {
      dispatch(setFruits(fruits))
      return null
    })
  }
}
