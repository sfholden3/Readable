import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as commentsActionCreators from '../ducks/comments';
import EditComment from '../components/EditComment';

class EditCommentContainer extends Component {
  static propTypes = {
    editComment: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired,
    fetchComment: PropTypes.func.isRequired,
    editThisComment: PropTypes.func.isRequired
  };
  componentDidMount() {
    const commentId = this.props.match.params.commentId;
    this.props.fetchComment(commentId);
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
  const { comments } = state;
  return {
    comments: [...comments.comments],
    comment: {...comments.comment}
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators(
    {
      ...commentsActionCreators
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentContainer);
