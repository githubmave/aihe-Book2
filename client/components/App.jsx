import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'


//import { connect } from 'react-redux'
//import Nav from './Nav'
import VideoList from './VideoList'
import VideoItem from './VideoItem'
import VideoNames from './VideoNames'


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

              <p>
                <Route path='/videos/:category' component={VideoNames}/>
              </p>
              {/* <p class="country">
                <Route path='/answList/:name/:index' component={ShowAnsws} />
              </p> */}
            </div>

          
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
