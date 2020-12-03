import repos from './repos'
import { getRepos } from '../actions/index'

describe('Repos Reducer', () => {
  test('GET_REPOS', () => {
    const state = []
    const action = getRepos([{ id: 1, repo_name: 'dog-tinder', repo_link: 'https://github.com/aihe-2020/dog-tinder' },
      { id: 2, repo_name: 'day-tripper', repo_link: 'https://github.com/aihe-2020/day-tripper' },
      { id: 3, repo_name: 'aihe-book', repo_link: 'https://github.com/aihe-2020/aihe-book' }])
    const newState = repos(state, action)
    return expect(newState).toHaveLength(3)
  })
  test('Default state', () => {
    const state = undefined
    const action = { type: '_INIT_' }
    const newState = repos(state, action)
    return expect(newState).toEqual([])
  })
})
