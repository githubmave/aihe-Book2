import React from 'react'
import {Route, Switch} from 'react-router-dom'

import ForumPost from './ForumPost'
import ForumPosts from './ForumPosts'
import ForumPostsForm from './ForumPostsForm'

class Routes extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={props => (
            <ForumPosts
              posts={this.props.posts}
              fetchPosts={this.props.fetchPosts}
              {...props}
            />
          )} />
          <Route path='/posts/new' render={(props) => (
            <ForumPostsForm
              fetchPosts={this.props.fetchPosts}
              {...props}
            />
          )} />
          <Route path='/posts/edit/:id' render={(props) => (
            <ForumPostsForm
              fetchPosts={this.props.fetchPosts}
              post={this.props.posts.find(post => (
                post.id === Number(props.match.params.id))
              )}
              {...props}
            />
          )} />
          <Route path='/posts/:id' render={props => (
            <ForumPost
              fetchPosts={this.props.fetchPosts}
              post={this.props.posts.find((post) =>
                post.id === Number(props.match.params.id)
              )}
              {...props}
            />
          )} />
          <Route path='/posts/:postId/comments/:commentId' render={(props) => (
            <ForumPost
              fetchPosts={this.props.fetchPosts}
              post={this.props.posts.find(post => (
                post.id === Number(props.match.params.id)
              ))}
              {...props}
            />
          )} />
        </Switch>
      </div>
    )
  }
}

export default Routes
