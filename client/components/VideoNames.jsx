import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'

const VideoNames = (props) => {
  const { category } = useParams()
  console.log('category is: ', category)

  return (
    <div>
      <ul>
        {props.videos.map((video, i) => {
          if (video.video_category == category) {
            return (
              <li key={i}>
                {' '}
                <Link
                  to={`/videos/${video.video_category}/${video.video_name}`}
                >
                  {' '}
                  {video.video_name}
                </Link>
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
