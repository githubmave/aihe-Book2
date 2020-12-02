import React from 'react'
import { connect } from 'react-redux'

import { receiveVideos } from '../actions'
import { fetchVideos } from '../apis/videos'

class VideoList extends React.Component {
  componentDidMount() {
    fetchVideos()
      .then((videoData) => {
        this.props.dispatch(receiveVideos(videoData))
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <ul>
        {this.props.videos.map((video, i) => (
          <li key={i}> {video.video_name} </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = (globalState) => {
  return {
    videos: globalState.videos,
  }
}

export default connect(mapStateToProps)(VideoList)
