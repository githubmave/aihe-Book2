import React from 'react'
import { connect } from 'react-redux'

import { fetchFruits } from '../actions'
import fetchVideos from '../apis/videos'

export class App extends React.Component {
  // state = {
  //   fruits: []
  // }

  state = {
    videos: []
  }

  componentDidMount () {
   // this.props.dispatch(fetchFruits())
    fetchVideos()
    //  console.log(res.body)
      .then (res => {
        console.log(res)
        this.setState({videos: res})
      })
       // console.log("what is in state") 
      .catch( err => console.log(err))
      

  }

  render () {
    return (
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        {/* <ul>
          {this.props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul> */}

        <ul>

            {this.state.videos.map( (video,i) => (<li key = {i}> {video.video_name}  </li>))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    fruits: globalState.fruits
  }
}

//export default App

export default connect(mapStateToProps)(App)
