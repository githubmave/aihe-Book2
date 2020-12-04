const knex = require('knex')
const config = require('./knexfile')
const connection = knex(config.test)
const { listRepos } = require('./repos')
const { test } = require('./knexfile')

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run()
})

describe('listRepos', () => {
  test('lists the repos', () => {
    expect.assertions(2)
    return listRepos(connection)
      .then(repos => {
        expect(repos).toHaveLength(3)
        expect(repos[0].repo_name).toEqual('dog-tinder')
        return null
      })
  })
})

describe('list videos', () => {
  test(''
})