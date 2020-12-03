import React from 'react'
import { connect } from 'react-redux'
import Repo from './Repo'
import receiveRepos from '../actions'

class Repos extends React.Component {
  componentDidMount () {
    this.props.dispatch(receiveRepos)
  }

  render () {
    return (
      <div>
        <h3>Repo List</h3>
        <ul className='repo-list'>
          {this.props.repos.map(repo => <Repo key={repo.id} repo={repo} />)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ repos }) => {
  return { repos }
}

export default connect(mapStateToProps)(Repos)