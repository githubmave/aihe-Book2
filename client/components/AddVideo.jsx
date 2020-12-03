import React from 'react'
import { connect } from 'react-redux'

import { saveVideo } from '../actions'

class AddVideo extends React.Component {
  state = {
    title: '',
    link: '',
    category: '',
  }

  // press a category button 'auth'
  // update the category state (line 10) to 'auth'
  // when you submit, it will pass the data through saveVideo as this.state.category

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleLinkChange = (e) => {
    this.setState({ link: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const action = saveVideo(
      this.state.title,
      this.state.link,
      this.state.category
    )
    this.props.dispatch(action)
    this.setState({ title: '', link: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleTitleChange}
          value={this.state.title}
          className="new-video"
        />
        <input
          onChange={this.handleLinkChange}
          value={this.state.link}
          className="new-video"
        />
      </form>
    )
  }
}

export default connect()(AddVideo)
