import React from 'react'
import YouTube from 'react-youtube'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'

const VideoNames = (props) => {
  const { category } = useParams()
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <div>
      <ul>
        {props.videos.map((video, i) => {
          if (video.video_category === category) {
            return (
              <li>
                <YouTube videoId={video.video_link} opts={opts} />
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    videos: globalState.videos,
  }
}

export default connect(mapStateToProps)(VideoNames)
