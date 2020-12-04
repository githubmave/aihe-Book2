import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { receiveVideos } from '../actions/videos'
import { fetchVideos } from '../apis/videos'
// import VideoNames from './VideoNames'

class VideoList extends React.Component {
  componentDidMount() {
    fetchVideos()
      .then((videoData) => {
        this.props.dispatch(receiveVideos(videoData))
      })
      .catch((err) => console.log(err))
  }

  render() {
    console.log('videos from videoList', this.props.videos)
    return (
      <>
        <ul>
          {this.props.videos.map((video, i) => (
            <li key={i}>
              {' '}
              <Link to={`/videos/${video.video_category}`}>
                {' '}
                {video.video_category}
              </Link>
            </li>
          ))}
        </ul>

        {/* <VideoNames /> */}
      </>
    )
  }
}

const mapStateToProps = (globalState) => {
  return {
    videos: globalState.videos,
  }
}

export default connect(mapStateToProps)(VideoList)
