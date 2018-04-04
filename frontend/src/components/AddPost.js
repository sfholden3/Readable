import React, { Component } from 'react';

import * as API from '../utils/api';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: 'Please write something you would like to share'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ post: event.target.value });
  }

  addPost = text => {
    const post = {
      id: Math.random().toString(36).substr(-8),
      timestamp: Date.now(),
      title: 'Test',
      body: this.state.post,
      author: 'Shelby Holden',
      category: 'react'
    };
    API.addPost(post);
  };
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.addPost}>
          <label>
            Enter Text of Post:
            <textarea value={this.state.post} onChange={this.handleChange} placeholder="Write here" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default AddPost;
