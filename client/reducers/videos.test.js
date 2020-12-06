import videos from './videos'
import { receiveVideos } from '../actions/videos'

describe('Video Reducer', () => {
  test('GET_VIDEOS', () => {
    const state = []
    const action = receiveVideos([{ id: 1, video_name: 'dog-tinder', video_link: 'https://github.com/aihe-2020/dog-tinder' },
      { id: 2, video_name: 'day-tripper', video_link: 'https://github.com/aihe-2020/day-tripper' },
      { id: 3, video_name: 'aihe-book', video_link: 'https://github.com/aihe-2020/aihe-book' }])
    const newState = videos(state, action)
    return expect(newState).toHaveLength(3)
  })
  test('Default state', () => {
    const state = undefined
    const action = { type: '_INIT_' }
    const newState = videos(state, action)
    return expect(newState).toEqual([])
  })
})
