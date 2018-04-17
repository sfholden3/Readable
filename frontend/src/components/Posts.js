import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Posts extends Component {
  static propTypes = {
    currentCategory: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
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
    const filteredPosts =
      this.props.currentCategory !== 'none'
        ? this.props.posts.filter(post => post.category === this.props.currentCategory)
        : this.props.posts;
    return (
      <div>
        <h1>{this.props.currentCategory}</h1>
        {filteredPosts.map(post => (
          <div key={post.id} style={{ borderStyle: 'solid' }}>
            <br />
            <button onClick={() => this.upVote(post.id)}>Up Vote</button>
            <button onClick={() => this.downVote(post.id)}>Down Vote</button>
            <button onClick={() => this.props.deletePost(post.id)}>Delete</button>
            <Link to={`/EditPost/${post.id}`}>Edit Post</Link>
            <div>{post.commentCount} Comments</div>
            <div>{post.voteScore} Votes</div>
            <Link to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
            <h4 key={post.id}>{post.body}</h4>
            <br />
          </div>
        ))}
      </div>
    );
  }
}
export default Posts;
