import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'


//import { connect } from 'react-redux'
//import Nav from './Nav'
import VideoList from './VideoList'

export default class App extends React.Component {

//class App extends React.Component {
  render() {
    return (
      <>
       <Router>
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
        </Router>
      </>
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
