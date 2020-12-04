import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import Repos from './Repos'
import Register from './Register'
import SignIn from './SignIn'

export default function App () {
  return (
    <Router>
      <Route path='/' component={ Nav } />
      <Route exact path='/' component={ Repos } />
      <Route path='/register' component={ Register } />
      <Route path='/signin' component={ SignIn } />
    </Router>
  )
}
