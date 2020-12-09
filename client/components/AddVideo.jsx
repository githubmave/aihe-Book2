import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'

import { connect } from 'react-redux'
import { postVideo } from '../apis/videos'

class AddVideo extends React.Component {
  state = {
    video_name: '',
    video_link: '',
    video_category: ''
  }

  useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    button: {
      margin: theme.spacing(2)
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
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
    postVideo(this.state)
    this.setState({
      video_name: '',
      video_link: '',
      video_category: ''
    })
  }

  render () {
    return (
      <>
        <form onSubmit={ this.handleSubmit } autoComplete="off">
          <FormControl className={ this.useStyles.root } required>
            <InputLabel htmlFor="video_name">Video Name</InputLabel>
            <Input id="video_name"
              name="video_name"
              onChange={ this.handleChange }
              value={ this.state.video_name }
              className="new-video"
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <p></p>
          <FormControl className={ this.useStyles.root } required>
            <InputLabel htmlFor="video_link">Video Link</InputLabel>
            <Input id="video_link"
              name="video_link"
              onChange={ this.handleChange }
              value={ this.state.video_link }
              className="new-video"
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <p></p>
          <FormControl className={ this.useStyles.root } required>
            <FormLabel htmlFor="video_category">Video Category</FormLabel>
            <RadioGroup aria-label="video-category" name="video_category" value={ this.state.video_category } onChange={ this.handleChange }>
              <FormControlLabel value="auth" control={ <Radio /> } label="auth" />
              <FormControlLabel value="react" control={ <Radio /> } label="react" />
              <FormControlLabel value="express" control={ <Radio /> } label="express" />
            </RadioGroup>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <p></p>
          <FormControl>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              className={ this.useStyles.button }
              startIcon={ <SaveIcon /> }
            >
              Save video
            </Button>
          </FormControl>
        </form>
      </>
    )
  }
}

export default connect()(AddVideo)
