const request = require('supertest')
const { getVideos } = require('../db/videodb')
const server = require('../server')

const videos = [
  {
    id: 1,
    video_name: 'authentication',
    video_link: 'https://www.youtube.com/watch?v=j3d5NdG6c6k',
    video_category: 'auth'
  }
]

jest.mock('../db/videodb', () => ({
  getVideos: jest.fn(() => Promise.resolve(videos))
}))

describe('GET /api/v1/videos', () => {
  test('list the videossss', () => {
    expect.assertions(2)
    return request(server)
      .get('/api/v1/videos')
      .then((res) => {
        expect(getVideos).toHaveBeenCalled()
        expect(res.body).toHaveLength(1)
        return null
      })
  })
  test('error code when route fails', () => {
    const err = new Error('route failing :<')
    getVideos.mockImplementation(() => Promise.reject(err))
    expect.assertions(1)
    return request(server)
      .get('/api/v1/videos')
      .then(res => {
        expect(res.status).toEqual(500)
        return null
      })
  })
})
