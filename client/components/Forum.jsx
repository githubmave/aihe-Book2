import React from 'react'
import Container from '@material-ui/core/Container'

import Header from './Header'
import AppRoutes from './ForumRoutes'

import { getPosts } from '../apis/forum'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      errorMessage: ''
    }
    this.fetchPosts = this.fetchPosts.bind(this)
  }

  componentDidMount () {
    this.fetchPosts()
  }

  fetchPosts () {
    return getPosts()
      .then(posts => {
        this.setState({ posts: posts })
        return null
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      })
  }

  render () {
    return (
      <Container maxWidth="sm">
        <h1>Forum</h1>
        <div id='layout' className='pure-g'>
          <div className='sidebar pure-u-1 pure-u-md-1-4'>
            <Header />
          </div>
          <div className='content pure-u-1 pure-u-md-3-4'>
            <AppRoutes
              posts={this.state.posts}
              fetchPosts={this.fetchPosts}
            />
            {this.state.errorMessage &&
              <h1>{this.state.errorMessage}</h1>
            }
          </div>
        </div>
      </Container>
    )
  }
}

export default App
