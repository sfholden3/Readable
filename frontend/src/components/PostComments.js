import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostComments extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired
  };
  render() {
    const { comments } = this.props;
    return (
      <div>
        {comments.map(comment => (
          <div key={comment.id}>
            <button onClick={() => this.props.deleteComment(comment.id)}>Delete Comment</button>
            <h3>{comment.author}</h3>
            <h2>{comment.body}</h2>
          </div>
        ))}
      </div>
    );
  }
}
export default PostComments;
