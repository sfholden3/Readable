import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as API from '../utils/api';
import * as categoriesActionCreators from '../ducks/categories';
import * as categoryActionCreators from '../ducks/currentCategory';
import Posts from '../components/Posts';
import CategoryButtons from '../components/CategoryButtons';

class MainContainer extends Component {
  static propTypes = {
    fetchCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    setCurrentCategory: PropTypes.func.isRequired
  };
  state = {
    posts: []
  };
  componentDidMount() {
    this.getAllPosts();
    this.props.fetchCategories();
  }
  getAllPosts = () => {
    API.getAllPosts().then(posts => {
      this.setState({ posts });
    });
  };

  render() {
    return (
      <div>
        <h1>This is the App Container</h1>
        <CategoryButtons categories={this.props.categories} setCurrentCategory={this.props.setCurrentCategory}/>
        <div className="add-post">
          <Link to="/AddPost">Add Post</Link>
        </div>
        <Posts currentCategory={this.props.currentCategory} posts={this.state.posts} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentCategory, categories } = state;
  return { 
    currentCategory, 
    categories: [...categories] || categories
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators(
    {
      ...categoryActionCreators,
      ...categoriesActionCreators
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
