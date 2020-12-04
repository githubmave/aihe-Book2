// import React from 'react'
// import {MemoryRouter as Router} from 'react-router'
// import { Provider } from 'react-redux'
// import { screen, render } from '@testing-library/react'
// import VideoList from './VideoList'
// import { fetchVideos } from '../apis/videos'

// const fakeStore = {
//   dispatch: jest.fn(),
//   getState: jest.fn(),
//   subscribe: jest.fn()
// }

// jest.mock('../apis/videos', () => ({
//   fetchVideos: jest.fn()
// }))

// fakeStore.getState.mockImplementation(() => ({
//   videos: [
//     {id:1, video_name: 'authentication', video_link:'https://www.youtube.com/watch?v=j3d5NdG6c6k', video_category:'auth'},
//     {id:2, video_name: 'intro to react', video_link:'https://www.youtube.com/watch?v=rt43528rthh', video_category:'react'}
//   ]
// }))

// describe('<VideoList/>', () => {
//   test('receiving list of videos', async () => {
//     render(<Provider store={fakeStore}><Router><VideoList /></Router></Provider>)
//     const items = await screen.findAllByRole('listitem')
//     expect(items).toHaveLength(2)
//   })
//   test('that fetchVideos gets called', () => {
//     render(<Provider store={fakeStore}><Router><VideoList /></Router></Provider>)
//     expect(fetchVideos).toHaveBeenCalled
//   })
// })
