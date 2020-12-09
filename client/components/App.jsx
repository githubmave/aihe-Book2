import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Auth'
import Login from './Login'
import Nav from './Nav'
import TabNav from './TabNav'
import SignUp from './SignUp'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'

function Copyright () {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.youtube.com/watch?v=oHg5SJYRHA0">
        Jayden, Kienan, Lukin and Mave
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
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
          <Box mt={5}>
            <Copyright />
          </Box>
        </Router>
      </>
    )
  }
}
