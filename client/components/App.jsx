import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import AddRepo from './AddRepo'
import AddVideo from './AddVideo'
import { IfAuthenticated, IfNotAuthenticated } from './Auth'
import Forum from './Forum'
import Login from './Login'
import Nav from './Nav'
import Repos from './Repos'
import SignUp from './SignUp'
import VideoList from './VideoList'
import VideoNames from './VideoNames'
import VideoPlay from './VideoPlay'

export default class App extends React.Component {
  render () {
    return (
      <>
        <Router>
          <div className="Navigation">
            <Route path="/" component={Nav} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
          </div>
          <IfAuthenticated>
            <div>
              <h1>Repos</h1>
              <Repos />
              <AddRepo />
            </div>
            <div>
              <h1>Videos</h1>
              <VideoList />
              <Route path="/videos/:category" component={VideoNames} />
              <Route path="/videos/:category/:name" component={VideoPlay} />
              <AddVideo />
            </div>
            <div>
              <h1>Forum</h1>
              <Forum />
            </div>
          </IfAuthenticated>
          <IfNotAuthenticated></IfNotAuthenticated>
        </Router>
      </>
    )
  }
}
