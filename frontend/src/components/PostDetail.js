import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

class PostDetail extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  };
  render() {
    const { post } = this.props;
    return (
      <div>
        <h1>{post.title}</h1>
        <h2>{post.author}</h2>
        <p>{post.id}</p>
        <p>{post.timestamp}</p>
        <p>{post.category}</p>
        <h3>{post.body}</h3>
      </div>
    );
  }
}
export default PostDetail;
