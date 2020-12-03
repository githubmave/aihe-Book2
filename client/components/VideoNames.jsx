import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { connect } from 'react-redux'





const VideoNames = (props) => {
    let {category} = useParams()
    console.log("category", category)

    return(

        <div >

            <h1 > it is a video names</h1>

            <ul>
                {props.videos.map( (video, i) => {
                        if (video.video_category == category) {
                    <li key={i}> <Link to = {`/videos/${video.video_name}`} > {video.video_name}</Link>
                    </li>
                        }
                     } )
                }
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