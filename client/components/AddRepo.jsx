import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { addRepo } from '../apis/repos'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

class AddRepo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      repo_name: '',
      repo_link: ''
    }
  }

  useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    button: {
      margin: theme.spacing(2)
    }
  }))

  handleChange = (e) => {
    const { name, value } = e.target
    return this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    addRepo(this.state)
    this.setState({
      repo_name: '',
      repo_link: ''
    })
  }

  render () {
    return (
      <>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <FormControl>
            <InputLabel htmlFor="repo_name">Repo Name</InputLabel>
            <Input id="repo_name"
              name="repo_name"
              onChange={this.handleChange}
              value={this.state.repo_name}
              className="new-repo"
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="repo_link">Github Link</InputLabel>
            <Input id="repo_link"
              name="repo_link"
              onChange={this.handleChange}
              value={this.state.repo_link}
              className="new-repo-link"
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              className={ this.useStyles.button }
              startIcon={ <SaveIcon /> }
            >
              Save repo
            </Button>
          </FormControl>
        </form>
      </>
    )
  }
}

export default connect()(AddRepo)
