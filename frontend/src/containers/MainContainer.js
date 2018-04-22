import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as categoriesActionCreators from '../ducks/categories';
import * as categoryActionCreators from '../ducks/currentCategory';
import * as postsActionCreators from '../ducks/posts';
import Posts from '../components/Posts';
import CategoryButtons from '../components/CategoryButtons';

class MainContainer extends Component {
  static propTypes = {
    fetchCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    setCurrentCategory: PropTypes.func.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    deletePost: PropTypes.func.isRequired,
    postVote: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.setCurrentCategory(this.props.match.params.category || 'none');
    this.props.fetchPosts();
    this.props.fetchCategories();
  }
  componentWillReceiveProps(nextProps) {
    nextProps.setCurrentCategory(nextProps.match.params.category || 'none');
  }
  render() {
    return (
      <div>
        <h1>This is the App Container</h1>
        <CategoryButtons categories={this.props.categories} />
        <div className="add-post">
          <Link to="/AddPost">Add Post</Link>
        </div>
        <Posts
          currentCategory={this.props.currentCategory}
          posts={this.props.posts}
          deletePost={this.props.deletePost}
          postVote={this.props.postVote}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentCategory, categories, posts } = state;
  return {
    currentCategory,
    categories: [...categories],
    posts: [...posts.posts]
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators(
    {
      ...categoryActionCreators,
      ...categoriesActionCreators,
      ...postsActionCreators
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
