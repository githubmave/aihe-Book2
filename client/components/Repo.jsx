import { connect } from "react-redux"
import React from 'react'
import { connect } from 'react-redux'

class Repo extends React.Component {
  render () {
    return (
      <a key={this.props.id} href={this.props.repo_link}>
        {this.props.repo.repo_name}
      </a>
    )
  }
}

export default connect()(Repo)