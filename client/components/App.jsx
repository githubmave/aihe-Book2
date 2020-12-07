import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import VideoList from './VideoList'
import VideoItem from './VideoItem'
import VideoNames from './VideoNames'
import Repos from './Repos'
import Forum from './Forum'
import Register from './Register'
import SignIn from './SignIn'
export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <div className="Navigation">
            <Route path="/" component={Nav} />
            <Route path="/register" component={Register} />
            <Route path="/signin" component={SignIn} />
          </div>
          <div>
            <h1>Repos</h1>
            <Repos />
          </div>
          <div>
            <h1>Videos</h1>
            <VideoList />
            <Route path="/videos/:category" component={VideoNames} />
            <Route path="/videos/:category/:name" component={VideoItem} />
          </div>
          <div>
            <h1>Forum</h1>
            <Forum />
          </div>
        </Router>
      </>
    )
  }
}
