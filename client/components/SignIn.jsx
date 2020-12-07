import React from 'react'
import { signIn, isAuthenticated } from 'authenticare/client'

import { baseApiUrl as baseUrl } from '../config'

export default class SignIn extends React.Component {
  constructor (props) {
    // I would replace constructor with a class variable to instantiate the state
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = e => {
    e.preventDefault()
    const { username, password } = this.state
    return signIn({ username, password }, { baseUrl })
      .then((token) => {
        if (isAuthenticated()) {
          this.props.history.push(`/${token.id}`)
          document.location.reload()
        }
        return null
      })
  }

  render () {
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={this.handleClick}>
          <label>
            <p>Username: </p>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          </label>
          <label>
            <p>Password:</p>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <input type ="submit" value="Submit"></input>
        </form>
      </>
    )
  }
}
