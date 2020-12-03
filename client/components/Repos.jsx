import React from 'react'
import { connect } from 'react-redux'
import Repo from './Repo'
import { getAllRepos } from '../apis/repos'

class Repos extends React.Component {
  componentDidMount () {
    getAllRepos(this.props.dispatch)
  }

  render () {
    return (
      <ul>
        {this.props.repos.map((repo) => {
          return <Repo key={repo.id} repo={repo} />
        })}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    repos: state.repos
  }
}

export default connect(mapStateToProps)(Repos)
