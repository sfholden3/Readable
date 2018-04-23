import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as postsActionCreators from '../ducks/posts';
import * as commentsActionCreators from '../ducks/comments';
import PostDetail from '../components/PostDetail';
import PostComments from '../components/PostComments';
import NotFound from '../components/NotFound';

class PostDetailContainer extends Component {
  static propTypes = {
    fetchPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    fetchPostComments: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired,
    deletePost: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    commentVote: PropTypes.func.isRequired,
    postVote: PropTypes.func.isRequired
  };
  componentDidMount() {
    const postId = this.props.match.params.id;
    this.props.fetchPostComments(postId);
    this.props.fetchPost(postId);
  }

  render() {
    const { post, comments, deletePost, deleteComment, commentVote, postVote } = this.props;
    return (
      <div>
        {typeof post.id !== 'undefined' && (
          <div>
            <Link to={'/'}>Back to Home</Link>
            <Link to={`/AddComment/${post.id}`}>
              <h1>Add Comment</h1>
            </Link>
            <h1>THE POST</h1>
            <PostDetail post={post} postVote={postVote} deletePost={deletePost} />
            <h1>THE COMMENTS</h1>
            <PostComments comments={comments} deleteComment={deleteComment} commentVote={commentVote} />
          </div>
        )}
        {typeof post.id === 'undefined' && <NotFound />}
      </div>
    );
  }
}

const mapStateToProps = ({ posts, comments }) => ({
  comments: [...comments.comments],
  post: { ...posts.post }
});

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators(
    {
      ...commentsActionCreators,
      ...postsActionCreators
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
