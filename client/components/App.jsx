import React from 'react'
//import { connect } from 'react-redux'
//import Nav from './Nav'
import VideoList from './VideoList'

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Fullstack with video!</h1>
        <div>
          {/* <Nav /> */}
          <VideoList />
        </div>

        <ul>
          {/* {this.props.videos.map( (video,i) => (<li key = {i}> {video.video_name}  </li>))} */}
        </ul>
      </div>
    )
  }
}

// function mapStateToProps (globalState) {
//   return {
//     //fruits: globalState.fruits,
//     videos: globalState.videos
//   }
// }

// //export default App

// export default connect(mapStateToProps)(App)
