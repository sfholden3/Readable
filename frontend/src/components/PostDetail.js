import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

class PostDetail extends Component {
  state = {
    redirect: false
  };
  static propTypes = {
    post: PropTypes.object.isRequired,
    deletePost: PropTypes.func.isRequired
  };
  render() {
    const { redirect } = this.state;
    const { post } = this.props;

    if(redirect){
      return <Redirect to='/'/>;
    }
    return (
      <div>
        <button onClick={() => {
          this.props.deletePost(post.id);
          this.setState({ redirect: true });
        }}>Delete</button>
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
