import React from 'react'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import Comment from './Comment'
import CommentForm from './CommentForm'

export default class Comments extends React.Component {
  render () {
    const { postId, comments, fetchComments } = this.props
    return (
      <Router>
        <div>
          <p>
            <Link
              className='pure-button'
              to={`/posts/${postId}/comments/new`}>
            Add A New Comment
            </Link>
          </p>
          <Route
            path='/posts/:postId/comments/new'
            render={props => (
              <CommentForm
                fetchComments={fetchComments}
                {...props}
              />
            )}
          />
          <div>
            {comments.map(comment => (
              <Comment
                key={comment.id}
                postId={postId}
                comment={comment}
                fetchComments={fetchComments}
              />
            ))}
          </div>
        </div>
      </Router>
    )
  }
}

Comments.defaultProps = {
  comments: []
}
