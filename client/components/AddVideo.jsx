import React from 'react'
import { connect } from 'react-redux'

import { saveVideo } from '../actions'

class AddVideo extends React.Component {
  state = {
    title: '',
    link: '',
    category: '',
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }
  handleLinkChange = (e) => {
    this.setState({ link: e.target.value })
  }

  handleTitleSubmit = (e) => {
    e.preventDefault()
    const action = saveVideo(this.state.title)
    this.props.dispatch(action)
    this.setState({ title: '' })
  }
  handleLinkSubmit = (e) => {
    e.preventDefault()
    const action = saveVideo(this.state.link)
    this.props.dispatch(action)
    this.setState({ link: '' })
  }
}
