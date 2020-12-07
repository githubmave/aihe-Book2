import React from 'react'
import { register, isAuthenticated } from 'authenticare/client'
import { baseApiUrl as baseUrl } from '../config'

export default class Register extends React.Component {
  constructor (props) {
    // I would do this with a state variable instead of constructor
    // e.g. replace the whole constructor with
    // state = {username: '', email: '', password: ''}
    super(props)
    this.state = {
      username: '',
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
    const { username, email, password } = this.state
    return register({ username, email, password }, { baseUrl })
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
        <div className="container">
          <div>
            <h3>👋</h3>
            <p>Please register to continue</p>
            <form onSubmit={ this.handleClick }>
              <label>
                <p>Username: </p>
                <input type="text" name="username" value={ this.state.username } onChange={ this.handleChange } />
              </label>
              <label>
                <p>Email: </p>
                <input type="text" name="email" value={ this.state.email } onChange={ this.handleChange } />
              </label>
              <label>
                <p>Password:</p>
                <input type="password" name="password" value={ this.state.password } onChange={ this.handleChange } />
              </label>
              <input type="submit" value="Register"></input>
            </form>
          </div>
        </div>
      </>
    )
  }
}
