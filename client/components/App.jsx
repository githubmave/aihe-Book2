import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Auth'
import Login from './Login'
import Nav from './Nav'
import TabNav from './TabNav'
import SignUp from './SignUp'
import Footer from './Footer'
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
            <div className="TabNav">
              <TabNav/>
            </div>
          </IfAuthenticated>
          <IfNotAuthenticated>
          </IfNotAuthenticated>
          <Footer />
        </Router>
      </>
    )
  }
}
