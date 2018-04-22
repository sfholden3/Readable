import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class EditComment extends Component {
  static propTypes = {
    editComment: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired,
    editThisComment: PropTypes.func.isRequired,
    currentCategory: PropTypes.string.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.handleChangeComment = this.handleChangeComment.bind(this);
  }

  handleChangeComment(event) {
    const { comment, editThisComment } = this.props;
    editThisComment({
      id: comment.id,
      timestamp: comment.id,
      body: event.target.value,
      author: comment.author,
      parentId: comment.parentId
    })
  };

  editComment = () => {
    const { comment, editComment } = this.props;
    const thisComment = {
      id: comment.id,
      timestamp: comment.timestamp,
      body: comment.body,
      author: comment.author,
      parentId: comment.parentId
    };
    editComment(thisComment);
    this.setState({ redirect: true });
  };
  render() {
    const { redirect } = this.state;
    const { comment, currentCategory } = this.props;
    if (redirect) {
      return <Redirect to={`/${currentCategory}/${comment.parentId}`} />;
    }
    return (
      <div>
        <h1>Edit Comment</h1>
        <form onSubmit={this.editComment}>
          <label>
            Enter your Name:
            <textarea value={comment.author} placeholder="Name" disabled />
          </label>
          <br />
          <label>
            Enter Text of Comment:
            <textarea value={comment.body} onChange={this.handleChangeComment} placeholder="Comment" />
          </label>

          <input type="submit" value="Submit" />
        </form>
        <Link to={`/post/${comment.parentId}`}>Back to post</Link>
      </div>
    );
  }
}
export default EditComment;
