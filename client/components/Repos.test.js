import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import Repos from './Repos'
import { getAllRepos } from '../apis/repos'

const fakeStore = {
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn()
}
jest.mock('../apis/repos', () => ({
  getAllRepos: jest.fn()
}))

fakeStore.getState.mockImplementation(() => ({
  repos: [
    { id: 1, repo_name: 'dog-tinder', repo_link: 'https://github.com/aihe-2020/dog-tinder' },
    { id: 2, repo_name: 'day-tripper', repo_link: 'https://github.com/aihe-2020/day-tripper' },
    { id: 3, repo_name: 'aihe-book', repo_link: 'https://github.com/aihe-2020/aihe-book' }
  ]
}))

describe('<Repos/>', () => {
  test('receiving list of repos', async () => {
    render(<Provider store={fakeStore}><Repos /></Provider>)
    const items = await screen.findAllByRole('listitem')
    expect(items).toHaveLength(3)
  })
  test('that getAllRepos gets called', () => {
    render(<Provider store={fakeStore}><Repos /></Provider>)
    expect(getAllRepos).toHaveBeenCalledWith(fakeStore.dispatch)
  })
})
