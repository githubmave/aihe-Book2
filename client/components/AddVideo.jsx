import React from 'react'
import { connect } from 'react-redux'

//import { saveVideo } from '../actions/videos'
import {postVideo} from '../apis/videos'

class AddVideo extends React.Component {
  // state = {
  //   title: '',
  //   link: '',
  //   category: ''
  // }
     
  state = {
       video_name: '',
       video_link: '',
       video_category: ''
  }
  // press a category button 'auth'
  // update the category state (line 10) to 'auth'
  // when you submit, it will pass the data through saveVideo as this.state.category

  // handleTitleChange = (e) => {
  //   this.setState({ title: e.target.value })
  // }

  // handleLinkChange = (e) => {
  //   this.setState({ link: e.target.value })
  // }

  handleChange = (e) => {
     const {name, value} = e.target
     return this.setState({
       [name]: value
     })

  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   const action = saveVideo(
  //     this.state.title,
  //     this.state.link,
  //     this.state.category
  //   )
  //   this.props.dispatch(action)
  //   this.setState({ title: '', link: '' })
  // }

  handleSubmit = (e) => {

       e.preventDefault()
       postVideo(this.state)
       this.setState({
            video_name: '',
            video_link: '',
            video_category: ''
       })
  }

  render () {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label>
          <p> Video Name:</p>
          <input type = "text" name = "video_name"
            // onChange={this.handleTitleChange}
            onChange={this.handleChange}
            value={this.state.video_name}
            className="new-video"
          />
        </label>

        <label>
          <p> Video Link</p>
          <input type = "text" name = "video_link"
            // onChange={this.handleLinkChange}
            onChange={this.handleChange}
            value={this.state.video_link}
            className="new-video"
          />
        </label>
  
        <label>
          <p>Video category</p>
          <input type = "text" name = "video_category"
           // onChange={this.handleLinkChange}
            onChange={this.handleChange}
            value={this.state.video_category}
            className="new-video"
          />
        </label>

        <input type = 'submit' value = "Add video"/>

      </form>
      </>
    )
  }
}

export default connect()(AddVideo)
