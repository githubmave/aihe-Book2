import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { receiveVideos } from '../actions/videos'
import { fetchVideos } from '../apis/videos'

class VideoList extends React.Component {
  componentDidMount () {
    fetchVideos()
      // eslint-disable-next-line no-console
      .then((videoData) => {
        return this.props.dispatch(receiveVideos(videoData))
      })
      .catch((err) => console.log(err))
  }

  categoryList = ['auth', 'react', 'express']

  render () {
    return (
      <>
        <ul>
          {this.categoryList.map((video, i) => (
            <li key={i}>
              <Link to={`/videos/${video}`}>{video}</Link>
            </li>
          ))}
        </ul>
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
