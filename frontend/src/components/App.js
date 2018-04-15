import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import '../App.css';
import AddPostContainer from '../containers/AddPostContainer';
import EditPostContainer from '../containers/EditPostContainer';
import MainContainer from '../containers/MainContainer';
import PostDetailContainer from '../containers/PostDetailContainer';
import AddCommentContainer from '../containers/AddCommentContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/AddPost" component={AddPostContainer} />
        <Route path="/EditPost/:postId" component={EditPostContainer} />
        <Route path="/post/:id" component={PostDetailContainer} />
        <Route path="/AddComment/:postId" component={AddCommentContainer} />
      </div>
    );
  }
}

export default App;
