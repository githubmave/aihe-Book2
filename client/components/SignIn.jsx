/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
import React from 'react'
import { signIn, isAuthenticated } from 'authenticare/client'

import { baseApiUrl as baseUrl } from '../config'

export default class SignIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
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
    const { email, password } = this.state
    return signIn({ email, password }, { baseUrl })
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
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Email: </p>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
          </label>
          <label>
            <p>Password:</p>
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <input type ="submit" value="Submit"></input>
        </form>
      </>
    )
  }
}
