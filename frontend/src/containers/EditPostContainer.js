import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as postsActionCreators from '../ducks/posts';
import EditPost from '../components/EditPost';

class EditPostContainer extends Component {
  static propTypes = {
    editPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    fetchPost: PropTypes.func.isRequired,
    editThisPost: PropTypes.func.isRequired
  };
  componentDidMount() {
    const postId = this.props.match.params.postId;
    this.props.fetchPost(postId);
  }

  render() {
    const { editPost, post, editThisPost } = this.props;
    return (
      <div>
        <EditPost editPost={editPost} editThisPost={editThisPost} post={post} />
        <Link to={'/'}>Back to Home</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts: [...posts.posts],
  post: { ...posts.post }
});

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators(
    {
      ...postsActionCreators
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostContainer);
