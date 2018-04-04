import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Posts extends Component {
  static propTypes = {
    currentCategory: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired
  };
  render() {
    const filteredPosts = this.props.currentCategory !== 'none' ?
          this.props.posts.filter(
            post => (
              post.category === this.props.currentCategory
            )
          ) : this.props.posts
    return (
      <div>
        <h1>{this.props.currentCategory}</h1>
        {filteredPosts.map(
            post => 
              <h1 key={post.id}>{post.body}</h1>
          )}
      </div>
    );
  }
}
export default Posts;
