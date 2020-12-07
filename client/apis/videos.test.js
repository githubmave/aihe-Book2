import nock from 'nock'
import { fetchVideos } from './videos'

// good start but video.js needs more coverage

describe('get all videos', () => {
  const fakeVideo = [
    {
      id: 1,
      video_name: 'authentication',
      video_link: 'https://www.youtube.com/watch?v=j3d5NdG6c6k',
      video_category: 'auth'
    },
    {
      id: 2,
      video_name: 'intro to react',
      video_link: 'https://www.youtube.com/watch?v=rt43528rthh',
      video_category: 'react'
    }
  ]

  const scope = nock('http://localhost')
    .get('/api/v1/videos')
    .reply(200, fakeVideo)

  test('returns a video from api', () => {
    expect.assertions(2)
    return fetchVideos().then((videos) => {
      expect(videos).toEqual(fakeVideo)
      expect(scope.isDone()).toBe(true)
      return null
    })
  })
})
