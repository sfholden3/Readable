import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import * as API from '../utils/api';
import Posts from './Posts';
import AddPost from './AddPost';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      posts: []
    };
  }

  componentDidMount() {
    this.getAllCategories();
    this.getAllPosts();
  }

  getAllCategories = () => {
    API.getAllCategories().then(categories => {
      this.setState({ categories });
    });
  };

  getAllPosts = () => {
    API.getAllPosts().then(posts => {
      this.setState({ posts });
    });
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <Posts category="none" posts={this.state.posts} />} />
        <Route exact path="/AddPost" render={() => <AddPost />} />
        {this.state.categories.map(category => (
          <Route
            exact
            path={`/${category.path}`}
            key={category.name}
            render={() => <Posts key={category.name} category={category.name} posts={this.state.posts} />}
          />
        ))}
      </div>
    );
  }
}

export default App;
