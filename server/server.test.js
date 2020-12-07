import request from 'supertest'
import server from './server'
import { listRepos } from './db/repos'
import { getVideos } from './db/videodb'

// these tests are duplicated in the routes tests - e.g. repos.test.js - I would delete this one and put the tests in the route specific ones

jest.mock('./db/repos', () => ({
  listRepos: jest.fn(() => Promise.resolve(repos))
}))

jest.mock('./db/videodb', () => ({
  getVideos: jest.fn(() => Promise.resolve(videos))
}))

// I would call this fakeRepos, makes assertions read better
const repos = [
  {
    id: 1,
    repo_name: 'dog-tinder',
    repo_link: 'https://github.com/aihe-2020/dog-tinder'
  }
]

// same here - fakeVideos
const videos = [
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

describe('GET /api/v1/repos', () => {
  test('list repos', () => {
    expect.assertions(2)
    return request(server)
      .get('/api/v1/repos')
      .then((res) => {
        expect(listRepos).toHaveBeenCalled()
        expect(res.body).toHaveLength(1)
        // expect(res.body).toEqual(repos) would be better than length 1
        return null
      })
  })
  test('show error when route fails', () => {
    const err = new Error('route has failed')
    listRepos.mockImplementation(() => Promise.reject(err))
    expect.assertions(1)
    return request(server)
      .get('/api/v1/repos')
      .then((res) => {
        expect(res.status).toBe(500)
        return null
      })
  })
})

describe('GET /api/v1/videos', () => {
  test('list of videos', () => {
    expect.assertions(3)
    return request(server)
      .get('/api/v1/videos')
      .then((res) => {
        expect(getVideos).toHaveBeenCalled()
        expect(res.body).toHaveLength(2)
        expect(res.body).toEqual(videos)
        return null
      })
  })

  // need a test for posting a video
})

// need tests for user routes
//
// try mocking out getTokenDecoder with a fake function like
//
// jest.mock('authenticare/server', () => ({
//  getTokenDecoder: jest.fn(() => {
//    return (req, res, next) => {
//      res.user = fakeUser //if you want to fake a valid token
//      //throw('sadness') if you want to fake an invalid token
//      next()
//    }
//  })
//
// })
//
// note you will also need to mock the other authenticare/server functions like applyAuthRoutes or other code will break
