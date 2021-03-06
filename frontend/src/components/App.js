import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../App.css';
import AddPostContainer from '../containers/AddPostContainer';
import EditPostContainer from '../containers/EditPostContainer';
import MainContainer from '../containers/MainContainer';
import PostDetailContainer from '../containers/PostDetailContainer';
import AddCommentContainer from '../containers/AddCommentContainer';
import EditCommentContainer from '../containers/EditCommentContainer';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/AddPost" component={AddPostContainer} />
          <Route path="/EditPost/:postId" component={EditPostContainer} />
          <Route path="/AddComment/:postId" component={AddCommentContainer} />
          <Route path="/EditComment/:commentId" component={EditCommentContainer} />
          <Route path="/:category/:id" component={PostDetailContainer} />
          <Route exact path="/:category" component={MainContainer} />
          <Route path="/NotFound" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
