const request = require('supertest')
const { listRepos } = require('../db/repos')
const server = require('../server')

const repos = [{ id: 1, repo_name: 'dog-tinder', repo_link: 'https://github.com/aihe-2020/dog-tinder' }]

jest.mock('../db/repos', () => ({
  listRepos: jest.fn(() => Promise.resolve(repos))
}))

describe('GET /api/v1/repos', () => {
  test('list repos', () => {
    expect.assertions(2)
    return request(server)
      .get('/api/v1/repos')
      .then(res => {
        expect(listRepos).toHaveBeenCalled()
        expect(res.body).toHaveLength(1)
        return null
      })
  })
  test('shows an error when the route is failing', () => {
    const err = new Error('Route is currently failing')
    listRepos.mockImplementation(() => Promise.reject(err))
    expect.assertions(1)
    return request(server)
      .get('/api/v1/repos')
      .then(res => {
        expect(res.status).toEqual(500)
        return null
      })
  })
})
