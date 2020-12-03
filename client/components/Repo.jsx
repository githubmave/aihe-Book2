import { connect } from 'react-redux'
import React from 'react'

class Repo extends React.Component {
  render () {
    return (
      <li key={this.props.id} >
        <a href={this.props.repo.repo_link} >{this.props.repo.repo_name}</a>
      </li>
    )
  }
}

export default connect()(Repo)
