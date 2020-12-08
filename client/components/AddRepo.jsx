import React from 'react'
import { connect } from 'react-redux'
import { addRepo, getAllRepos } from '../apis/repos'

class AddRepo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repo_name: '',
      repo_link: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    return this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    addRepo(this.state)
    this.setState({
      repo_name: '',
      repo_link: '',
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Name: </p>
            <input
              type="text"
              name="repo_name"
              onChange={this.handleChange}
              value={this.state.repo_name}
            />
          </label>
          <label>
            <p>Link:</p>
            <input
              type="text"
              name="repo_link"
              onChange={this.handleChange}
              value={this.state.repo_link}
            />
          </label>
          <input type="submit" value="Add repo" />
        </form>
      </>
    )
  }
}

export default connect()(AddRepo)
