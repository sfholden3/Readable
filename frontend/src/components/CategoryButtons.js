import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../App.css';

const CategoryButtons = ({ categories, currentCategory }) => (
  <div>
    {categories.map(category => (
      <Link
        key={category.name}
        className={`button category-button ${currentCategory === category.name ? 'selected' : ''}`}
        to={`/${category.name}`}>
        {category.name}
      </Link>
    ))}
    <Link className="button" to={'/'}>
      Clear Category
    </Link>
  </div>
);

CategoryButtons.propTypes = {
  categories: PropTypes.array.isRequired,
  currentCategory: PropTypes.string.isRequired
}

export default CategoryButtons;
