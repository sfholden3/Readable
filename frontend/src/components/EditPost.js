import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

class EditPost extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    editPost: PropTypes.func.isRequired,
    editThisPost: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  handleChangeBody(event) {
    const { post } = this.props;
    this.props.editThisPost({
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: event.target.value,
      author: post.author,
      category: post.category
    });
  }
  handleChangeTitle(event) {
    const { post } = this.props;
    this.props.editThisPost({
      id: post.id,
      timestamp: post.timestamp,
      title: event.target.value,
      body: post.body,
      author: post.author,
      category: post.category
    });
  }

  editPost = () => {
    const { post, editPost } = this.props;
    const thisPost = {
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category
    };
    editPost(thisPost);
    this.setState({ redirect: true });
  };
  render() {
    const { redirect } = this.state;
    const { post } = this.props;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Edit Post</h1>
        <form onSubmit={this.editPost}>
          <label>
            Enter your Name:
            <textarea value={post.author} placeholder="Name" disabled />
          </label>
          <br />
          <label>
            Enter Title of the Post:
            <textarea value={post.title} onChange={this.handleChangeTitle} placeholder="Title" />
          </label>
          <br />
          <label>
            Select Category:
            <select value={post.category} disabled>
              <option key={post.category}>{post.category}</option>
            </select>
          </label>
          <br />
          <label>
            Enter Text of Post:
            <textarea value={post.body} onChange={this.handleChangeBody} placeholder="Post Text" />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default EditPost;
