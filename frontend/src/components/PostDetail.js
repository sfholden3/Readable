import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class PostDetail extends Component {
  state = {
    redirect: false
  };
  static propTypes = {
    post: PropTypes.object.isRequired,
    deletePost: PropTypes.func.isRequired,
    postVote: PropTypes.func.isRequired
  };
  upVote = postId => {
    const { postVote } = this.props;
    postVote(postId, 'upVote');
  };
  downVote = postId => {
    const { postVote } = this.props;
    postVote(postId, 'downVote');
  };
  render() {
    const { redirect } = this.state;
    const { post } = this.props;

    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <button
          onClick={() => {
            this.props.deletePost(post.id);
            this.setState({ redirect: true });
          }}>
          Delete
        </button>
        <button onClick={() => this.upVote(post.id)}>Up Vote</button>
        <button onClick={() => this.downVote(post.id)}>Down Vote</button>
        <Link to={`/EditPost/${post.id}`}>Edit Post</Link>
        <h1>{post.title}</h1>
        <h2>{post.author}</h2>
        <div>{post.voteScore} Vote(s)</div>
        <div>{post.id}</div>
        <div>{post.timestamp}</div>
        <div>{post.category}</div>
        <div>{post.body}</div>
      </div>
    );
  }
}
export default PostDetail;
