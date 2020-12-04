import request from 'supertest'
import server from './server'
import { listRepos } from './db/repos'
import {listVideos} from './db/videodb'
import { expect } from '@jest/globals'

jest.mock('./db/connection', () => ({
  listRepos: jest.fn(() => Promise.resolve(repos)),
}))

const repos = [
  {
    id: 1,
    repo_name: 'dog-tinder',
    repo_link: 'https://github.com/aihe-2020/dog-tinder',
  },
]

describe('GET /api/v1/repos', () => {
  test('list repos', () => {
    expect.assertions(2)
    return request(server)
      .get('/api/v1/repos')
      .then((res) => {
        expect(listRepos).toHaveBeenCalled()
        expect(res.body).toHaveLength(1)
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
  test('list of videos', ()=>{
    expect.assertions(2)
    return request(server)
    .get('/api/v1/videos')
    .then((res) => {
      expect(listVideos).toHaveBeenCalled()
      expect(res.body).toHaveLength(1)
      return null 
    })
  })
})
