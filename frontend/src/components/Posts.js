import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PostDetail from './PostDetail';

class Posts extends Component {
  static propTypes = {
    currentCategory: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired
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
