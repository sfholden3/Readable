import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Posts extends Component {
  static propTypes = {
    currentCategory: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    deletePost: PropTypes.func.isRequired
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
          <div key={post.id}>
            <button onClick={() => this.props.deletePost(post.id)}>Delete</button>
            <Link to={`/EditPost/${post.id}`}>
              Edit Post
            </Link>
            <Link to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
            <h4 key={post.id}>{post.body}</h4>
          </div>
        ))}
      </div>
    );
  }
}
export default Posts;
