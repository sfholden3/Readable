import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as commentsActionCreators from '../ducks/comments';
import AddComment from '../components/AddComment';

class AddCommentContainer extends Component {
  static propTypes = {
    addPostComment: PropTypes.func.isRequired
  };

  render() {
    const postId = this.props.match.params.postId;
    const { addPostComment } = this.props;
    return (
      <div>
        <AddComment postId={postId} addPostComment={addPostComment} />
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => ({
  comments: [...comments.comments]
});

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators(
    {
      ...commentsActionCreators
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentContainer);
