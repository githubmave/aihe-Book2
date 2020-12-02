import React from 'react'
import { connect } from 'react-redux'
//import Nav from './Nav'

import { fetchFruits, receiveVideos } from '../actions'
import fetchVideos from '../apis/videos'

export class App extends React.Component {
  // state = {
  //   fruits: []
  // }

  state = {
    videos: [],
  }

  componentDidMount() {
    // this.props.dispatch(fetchFruits())

    fetchVideos()
      //  console.log(res.body)
      .then((videoData) => {
        console.log(videoData)
        // this.setState({videos: res})
        this.props.dispatch(receiveVideos(videoData))
      })
      // console.log("what is in state")
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        {/* <ul>
          {this.props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul> */}
        <div>{/* <Nav /> */}</div>

        <ul>
          {this.props.videos.map((video, i) => (
            <li key={i}> {video.video_name} </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    //fruits: globalState.fruits,
    videos: globalState.videos,
  }
}

//export default App

export default connect(mapStateToProps)(App)
