import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../App.css';

class CategoryButtons extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    currentCategory: PropTypes.string.isRequired
  };
  render() {
    return (
      <div>
        {this.props.categories.map(category => 
          <Link key={category.name} className={`button category-button ${this.props.currentCategory === category.name ? 'selected' : ''}`} to={`/${category.name}`}>{category.name}</Link>
        )}
        <Link className='button' to={'/'}>Clear Category</Link>
      </div>
    );
  }
}
export default CategoryButtons;
