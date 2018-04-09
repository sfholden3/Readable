import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as commentsActionCreators from '../ducks/comments';
import AddCommentForm from '../components/AddCommentForm';

class AddCommentContainer extends Component {
  static propTypes = {
    addPostComment: PropTypes.func.isRequired
  };

  render() {
    const postId = this.props.match.params.postId;
    const { addPostComment } = this.props;
    return (
      <div>
        <AddCommentForm postId={postId} addPostComment={addPostComment} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { comments } = state;
  return {
    comments: [...comments.comments]
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentContainer);
