import React from 'react'
import { connect } from 'react-redux'
import Repo from './Repo'
import { getAllRepos } from '../apis/repos'

import AddRepo from './AddRepo'

class Repos extends React.Component {
  componentDidMount () {
    getAllRepos(this.props.dispatch)
  }

   refresh = (e) => {
     e.preventDefault()
     // addRepo(this.state)
     getAllRepos(this.props.dispatch)
   }

   render () {
     return (
       <>
         <h1>Repos</h1>
         <ul>
           {this.props.repos.map((repo) => {
             return <Repo key={repo.id} repo={repo} />
           })}
         </ul>
         <AddRepo />
       </>
     )
   }
}

const mapStateToProps = (state) => {
  return {
    repos: state.repos
  }
}

export default connect(mapStateToProps)(Repos)
