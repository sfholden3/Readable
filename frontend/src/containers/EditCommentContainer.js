import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as commentsActionCreators from '../ducks/comments';
import * as currentCategoryActionCreators from '../ducks/currentCategory';
import EditComment from '../components/EditComment';

class EditCommentContainer extends Component {
  static propTypes = {
    editComment: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired,
    fetchComment: PropTypes.func.isRequired,
    editThisComment: PropTypes.func.isRequired,
    currentCategory: PropTypes.string.isRequired
  };
  componentDidMount() {
    const commentId = this.props.match.params.commentId;
    this.props.fetchComment(commentId);
    this.props.currentCategory();
  }

  render() {
    const { editComment, comment, editThisComment } = this.props;
    return (
      <div>
        <EditComment editComment={editComment} editThisComment={editThisComment} comment={comment} />
        <Link to={'/'}>Back to Home</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { comments, currentCategory } = state;
  return {
    currentCategory,
    comments: [...comments.comments],
    comment: {...comments.comment}
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators(
    {
      ...commentsActionCreators,
      ...currentCategoryActionCreators
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentContainer);
