import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>Not Found</h1>
        <Link to={'/'}>Back to Home</Link>
      </div>
    );
  }
}
export default NotFound;
