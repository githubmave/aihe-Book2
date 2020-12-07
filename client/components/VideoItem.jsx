import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

const VideoItem = (props) => {
  const { name } = useParams()
  console.log('name from Route: ', name)

  return (
    <div>
      <h1>it is a video item</h1>
      <ul>
        {props.videos.map((video, i) => {
        // this looks like it is matching the name from params - perhaps you want filter or find instead of map?
          if (video.video_name === name) {
            // since you're in a ul you probably want to return li elements
            return <a key={i} href={video.video_link}>{video.video_name}</a>
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

export default connect(mapStateToProps)(VideoItem)
