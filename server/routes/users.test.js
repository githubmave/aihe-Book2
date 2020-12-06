const request = require('supertest')
const {
  userExists,
  getUserByName,
  createUser
} = require('../db/users')
const server = require('../server')

const users = [{ id: 1, username: 'Test', email: 'test@test.com', password: 'password123' }]

jest.mock('../db/users.js', () => ({
  getUserByName: jest.fn(() => Promise.resolve(users))
}))

describe('GET /api/v1', () => {
  test('get user by name', () => {
    return request(server)
      .get('/api/v1')
      .then(res => {
        expect(getUserByName).toHaveBeenCalled()
        expect(res.body).toHaveLength(1)
        return null
      })
  })
})
