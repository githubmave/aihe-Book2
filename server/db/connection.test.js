const knex = require('knex')
const config = require('./knexfile')
const connection = knex(config.test)

const { listRepos } = require('./repos')
const { getVideos } = require('./videodb')

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run()
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
      expect(vids).toHaveLength(16)
      expect(vids[0].video_name).toEqual('authentication')
      return null
    })
  })
})
