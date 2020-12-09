import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import VideoList from './VideoList'
import VideoItem from './VideoItem'
import VideoNames from './VideoNames'
import Repos from './Repos'
import Forum from './Forum'
import SignUp from './SignUp'
import Login from './Login'
import { IfAuthenticated, IfNotAuthenticated } from './Auth'

export default class App extends React.Component {
  render () {
    return (
      <>
        <Router>
          <div className='Navigation'>
            <Route path='/' component={ Nav } />
            <Route path='/signup' component={ SignUp } />
            <Route path='/login' component={ Login } />
          </div>
          <IfAuthenticated>
            <div>
              <h1>Repos</h1>
              <Repos />
            </div>
            <div>
              <h1>Videos</h1>
              <VideoList />
              <Route path="/videos/:category" component={ VideoNames } />
              <Route path="/videos/:category/:name" component={ VideoItem } />
            </div>
            <div>
              <h1>Forum</h1>
              <Forum />
            </div>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <Login />
          </IfNotAuthenticated>
        </Router>
      </>
    )
  }
}
