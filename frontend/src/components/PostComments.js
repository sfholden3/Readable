import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PostComments extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired,
    commentVote: PropTypes.func.isRequired
  };
  upVote = commentId => {
    const { commentVote } = this.props;
    commentVote(commentId, 'upVote');
  };
  downVote = commentId => {
    const { commentVote } = this.props;
    commentVote(commentId, 'downVote');
  };
  render() {
    const { comments } = this.props;
    return (
      <div>
        {comments.map(comment => (
          <div key={comment.id}>
            <button onClick={() => this.props.deleteComment(comment.id)}>Delete Comment</button>
            <button onClick={() => this.upVote(comment.id)}>Up Vote</button>
            <button onClick={() => this.downVote(comment.id)}>Down Vote</button>
            <Link to={`/EditComment/${comment.id}`}>Edit Comment</Link>
            <div>{comment.voteScore} Vote(s)</div>
            <h3>{comment.author}</h3>
            <h2>{comment.body}</h2>
            
          </div>
        ))}
      </div>
    );
  }
}
export default PostComments;
