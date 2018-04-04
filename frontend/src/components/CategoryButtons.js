import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';


class CategoryButtons extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    setCurrentCategory: PropTypes.func.isRequired
  };
  setCategory = (event) =>
  {
    this.props.setCurrentCategory(event.target.value);
  }
  render() {
    return (
      <div>
        {this.props.categories.map(category => (
          <div key={category.name}>
            <button key={category.name} value={category.name} onClick={this.setCategory}>
              {category.name}
            </button>
          </div>
        ))}
      </div>
    );
  }
}
export default CategoryButtons;
