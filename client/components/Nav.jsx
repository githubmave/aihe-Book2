import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { logOff } from 'authenticare/client'
import { IfAuthenticated, IfNotAuthenticated } from './Auth'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export default function ButtonAppBar () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.homeButton} color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            🐬 Aihe Book 📚
          </Typography>
          <IfAuthenticated>
            <Button color="inherit" component={RouterLink} to="#" onClick={logOff}>Log Off</Button>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <Button color="inherit" component={RouterLink} to="/signup">Sign Up</Button>
            <Button color="inherit" component={RouterLink} to="/login">Login</Button>
          </IfNotAuthenticated>
        </Toolbar>
      </AppBar>
    </div>
  )
}
