import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CategoryButtons extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired
  };
  render() {
    return (
      <div>
        {this.props.categories.map(category => (
          <div key={category.name}>
            <Link to={`/${category.name}`}>{category.name}</Link>
          </div>
        ))}
        <Link to={'/'}>Clear Category</Link>
      </div>
    );
  }
}
export default CategoryButtons;
