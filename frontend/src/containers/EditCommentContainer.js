import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as commentsActionCreators from '../ducks/comments';
import * as currentCategoryActionCreators from '../ducks/currentCategory';
import * as postsActionCreators from '../ducks/posts';
import EditComment from '../components/EditComment';

class EditCommentContainer extends Component {
  static propTypes = {
    editComment: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired,
    fetchComment: PropTypes.func.isRequired,
    editThisComment: PropTypes.func.isRequired,
    currentCategory: PropTypes.string.isRequired,
    setCurrentCategory: PropTypes.func.isRequired,
    fetchPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
  };
  componentDidMount() {
    const commentId = this.props.match.params.commentId;
    this.props.fetchComment(commentId);
    this.props.fetchPost(this.props.comment.parentId);
    this.props.setCurrentCategory(this.props.post.category);
  }

  render() {
    const { editComment, comment, editThisComment, currentCategory } = this.props;
    return (
      <div>
        <EditComment
          editComment={editComment}
          editThisComment={editThisComment}
          comment={comment}
          currentCategory={currentCategory}
        />
        <Link to={'/'}>Back to Home</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ comments, currentCategory, posts }) => ({
  currentCategory,
  comments: [...comments.comments],
  comment: { ...comments.comment },
  post: { ...posts.post }
});

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators(
    {
      ...commentsActionCreators,
      ...currentCategoryActionCreators,
      ...postsActionCreators
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentContainer);
