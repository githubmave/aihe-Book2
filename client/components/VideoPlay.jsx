import React from 'react'
import YouTube from 'react-youtube'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

let youtubeID = ''

function YouTubeGetID (url) {
  var ID = ''
  url = url
    .replace(/(>|<)/gi, '')
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_]/i)
    ID = ID[0]
    youtubeID = ID
  } else {
    ID = url
    youtubeID = ID
  }
}

const VideoNames = (props) => {
  const { name } = useParams()
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0
    }
  }

  return (
    <div>
      <ul>
        {props.videos.map((video, i) => {
          if (video.video_name === name) {
            YouTubeGetID(video.video_link)
            return (
              <li key={i}>
                <YouTube videoId={youtubeID} opts={opts} />
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
    videos: globalState.videos
  }
}

export default connect(mapStateToProps)(VideoNames)
