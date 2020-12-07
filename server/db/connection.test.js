// this isn't testing the connection.js files, I would suggest having individual tests like repos.test.js, users.test.js etc.

const knex = require('knex')
const config = require('./knexfile')
const connection = knex(config.test)

const { listRepos } = require('./repos')
const { getVideos } = require('./videodb')

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run().catch(console.log)
})

describe('listRepos', () => {
  test('lists the repos', () => {
    expect.assertions(2)
    return listRepos(connection).then((repos) => {
      expect(repos).toHaveLength(3)
      expect(repos[0].repo_name).toEqual('dog-tinder')
      return null
    })
  })
})

describe('list videos', () => {
  test('returns a single video from seed', () => {
    expect.assertions(2)
    return getVideos(connection).then((vids) => {
      expect(vids).toHaveLength(2)
      expect(vids[0].video_name).toEqual('authentication')
      return null
    })
  })
})
