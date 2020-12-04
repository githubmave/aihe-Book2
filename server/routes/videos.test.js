const { thisExpression } = require('@babel/types')
const { expect } = require('@jest/globals')
const request = require('supertest')
const { describe } = require('yargs')
const { test } = require('../db/knexfile')
const { getVideos } = require('../db/videodb')
const server = require('../server')

const videos = [
  {
    id: 1,
    video_name: 'authentication',
    video_link: 'https://www.youtube.com/watch?v=j3d5NdG6c6k',
    video_category: 'auth',
  },
]

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
})
