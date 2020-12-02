import { getFruits } from '../apis/fruits'

export const RECIEVE_VIDEOS = 'RECIEVE_VIDEOS'

export const SET_FRUITS = 'SET_FRUITS'

export const recieveVideos = (videoData) => {

       return {
         type: RECIEVE_VIDEOS,
         videoData
         
       }
}

export function setFruits (fruits) {
  return {
    type: SET_FRUITS,
    fruits
  }
}

export function fetchFruits () {
  return dispatch => {
    return getFruits()
      .then(fruits => {
        dispatch(setFruits(fruits))
        return null
      })
  }
}
