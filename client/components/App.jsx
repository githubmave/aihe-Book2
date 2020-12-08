import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Widget } from 'react-chat-widget'

import 'react-chat-widget/lib/styles.css'

import Nav from './Nav'
import VideoList from './VideoList'
import VideoItem from './VideoItem'
import VideoNames from './VideoNames'
import Repos from './Repos'
import SignUp from './SignUp'
import Login from './Login'
import { IfAuthenticated, IfNotAuthenticated } from './Auth'

export default class App extends React.Component {
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`)
    // Now send the message through the backend API
  }

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
              <Repos />
            </div>
            <div>
              <VideoList />
              <Route path="/videos/:category" component={ VideoNames } />
              <Route path="/videos/:category/:name" component={ VideoItem } />
            </div>
            <Widget
              handleNewUserMessage={ this.handleNewUserMessage }
            />
          </IfAuthenticated>
          <IfNotAuthenticated>
          </IfNotAuthenticated>
        </Router>
      </>
    )
  }
}
