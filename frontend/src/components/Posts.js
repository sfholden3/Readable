import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Posts extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired
  };
  render() {
    return (
      <div>
        <h1>{this.props.category}</h1>
        {this.props.posts.map(post => <h1 key={post.id}>{post.body}</h1>)}
      </div>
    );
  }
}
export default Posts;
