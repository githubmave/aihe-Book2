import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import { receiveVideos } from '../actions/videos'
import { fetchVideos } from '../apis/videos'
import Container from '@material-ui/core/Container'

import VideoNames from './VideoNames'
import VideoPlay from './VideoPlay'
import AddVideo from './AddVideo'
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
      <Container maxWidth="sm">
        <Router>
          <h1>Videos</h1>
          <AddVideo />
          <ul>
            {this.categoryList.map((video, i) => (
              <li key={i}>
                <Link to={`/videos/${video}`}>{video}</Link>
              </li>
            ))}
          </ul>
          <Route path="/videos/:category" component={VideoNames} />
          <Route path="/videos/:category/:name" component={VideoPlay} />
        </Router>
      </Container>
    )
  }
}

const mapStateToProps = (globalState) => {
  return {
    videos: globalState.videos
  }
}

export default connect(mapStateToProps)(VideoList)
