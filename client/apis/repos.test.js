import { getAllRepos } from '../apis/repos'
import { GET_REPOS } from '../actions/index'
import nock from 'nock'

describe('getAllRepos', () => {
  const fakeRepos = [{ id: 1, repo_name: 'dog-tinder', repo_link: 'https://github.com/aihe-2020/dog-tinder' },
    { id: 2, repo_name: 'day-tripper', repo_link: 'https://github.com/aihe-2020/day-tripper' }]
  const scope = nock('http://localhost')
    .get('/api/v1/repos')
    .reply(200, fakeRepos)

  test('returns repos', () => {
    expect.assertions(3)
    const fakeDispatch = jest.fn()
    return getAllRepos(fakeDispatch)
      .then(repos => {
        const action = fakeDispatch.mock.calls[0][0]
        expect(action.repos).toEqual(fakeRepos)
        expect(action.type).toEqual(GET_REPOS)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})
