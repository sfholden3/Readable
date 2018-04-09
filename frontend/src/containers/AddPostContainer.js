import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as categoriesActionCreators from '../ducks/categories';
import * as postsActionCreators from '../ducks/posts';
import AddPost from '../components/AddPost';

class AddPostContainer extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    addPost: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div>
        <AddPost categories={this.props.categories} addPost={this.props.addPost} />
        <Link to={'/'}>Back to Home</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { categories } = state;
  return {
    categories: [...categories]
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators(
    {
      ...categoriesActionCreators,
      ...postsActionCreators
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostContainer);
