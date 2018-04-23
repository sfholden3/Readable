import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import * as helpers from '../utils/helpers';

class AddComment extends Component {
  static propTypes = {
    addPostComment: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired
  };
  constructor() {
    super();
    this.state = {
      comment: '',
      author: '',
      redirect: false
    };
    this.handleChangeComment = this.handleChangeComment.bind(this);
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
  }

  handleChangeComment(event) {
    this.setState({ comment: event.target.value });
  }
  handleChangeAuthor(event) {
    this.setState({ author: event.target.value });
  }

  addComment = text => {
    const { comment, author } = this.state;
    const { postId } = this.props;
    const commentObj = {
      id: helpers.getNewId(),
      timestamp: Date.now(),
      body: comment,
      author: author ? author : 'anonymous',
      parentId: postId
    };
    this.props.addPostComment(commentObj);
    this.setState({ redirect: true });
  };
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={`/post/${this.props.postId}`} />;
    }
    return (
      <div>
        <h1>Add Comment</h1>
        <form onSubmit={this.addComment}>
          <label>
            Enter your Name:
            <textarea value={this.state.author} onChange={this.handleChangeAuthor} placeholder="Name" />
          </label>
          <br />
          <label>
            Enter Text of Comment:
            <textarea value={this.state.comment} onChange={this.handleChangeComment} placeholder="Comment" />
          </label>

          <input type="submit" value="Submit" />
        </form>
        <Link to={`/post/${this.props.postId}`}>Back to post</Link>
      </div>
    );
  }
}
export default AddComment;
