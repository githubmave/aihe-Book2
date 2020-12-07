import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { receiveVideos } from '../actions/videos'
import { fetchVideos } from '../apis/videos'
// import VideoNames from './VideoNames'

class VideoList extends React.Component {
  componentDidMount () {
    fetchVideos()
      // maybe just return null instead?
      // eslint-disable-next-line promise/always-return
      .then((videoData) => {
        this.props.dispatch(receiveVideos(videoData))
      })
      .catch((err) => console.log(err))
  }

  render () {
    // should remove all client side debugging code before getting in to master
    console.log('videos from videoList', this.props.videos)
    return (
      <>
        <ul>
          {this.props.videos.map((video, i) => (
            <li key={i}>
              {' ' /* this is a little hacky, use css to control spacing */}
              <Link to={`/videos/${video.video_category}`}>
                {' '}
                {video.video_category}
              </Link>
            </li>
          ))}
        </ul>

        {/* <VideoNames />  - just delete things instead of commenting them out */}
      </>
    )
  }
}

const mapStateToProps = (globalState) => {
  return {
    videos: globalState.videos
  }
}

export default connect(mapStateToProps)(VideoList)
