/* eslint-disable promise/catch-or-return */
import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import { borders } from '@material-ui/system'

import CommentForm from './CommentForm'
import { deleteComment } from '../apis/comments'

export default class Comments extends React.Component {
  constructor (props) {
    super(props)
    this.deleteComment = this.deleteComment.bind(this)
  }

  deleteComment () {
    deleteComment(this.props.comment.id)
      .then(() => this.props.fetchComments(this.props.postId))
  }

  render () {
    const { postId, comment, fetchComments } = this.props
    return (
      <div>
        <Switch>
          <Route
            path={`/posts/${postId}/comments/${comment.id}`}
            render={(props) =>
              <CommentForm
                fetchComments={fetchComments}
                comment={comment}
                postId={postId}
                {...props}
              />
            }
          />
          <Route
            path={`/posts/${postId}`}
            render={props => (
              <Box color='white' bgcolor="info.main" p={1} border={2} borderColor='white' marginBottom={1}>
                <div className="comment" key={comment.id}>
                  <p>
                    <span className="comment-content">{comment.comment}</span>
                    <p></p>
                    <span className="comment-date">Date Posted: {new Date(comment.datePosted).toDateString()}</span>
                    <p></p>
                    <Link to={`/posts/${postId}/comments/${comment.id}`}>
                      <button className='pure-button'>Edit</button>
                    </Link>

                    <button
                      className='pure-button'
                      onClick={this.deleteComment}>
                      Delete
                    </button>
                  </p>
                </div>
              </Box>
            )}
          />
        </Switch>
      </div>
    )
  }
}
