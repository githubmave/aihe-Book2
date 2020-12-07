import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import NavNew from './NavNew'
import VideoList from './VideoList'
import VideoItem from './VideoItem'
import VideoNames from './VideoNames'
import Repos from './Repos'
import RegisterNew from './RegisterNew'
import SignInNew from './SignInNew'
import { IfAuthenticated, IfNotAuthenticated } from './Auth'

export default class App extends React.Component {
  render () {
    return (
      <>
        <Router>
          <div className='Navigation'>
            <Route path='/' component={ NavNew } />
            <Route path='/register' component={ RegisterNew } />
            <Route path='/signin' component={ SignInNew } />
          </div>
          <IfAuthenticated>
            <div>
              <Repos />
            </div>
            <div>
              <VideoList />
              <Route path="/videos/:category" component={ VideoNames } />
              <Route path="/videos/:category/:name" component={ VideoItem } />
            </div>
          </IfAuthenticated>
          <IfNotAuthenticated>
          </IfNotAuthenticated>
        </Router>
      </>
    )
  }
}
