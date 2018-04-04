import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import '../App.css';
import AddPost from './AddPost';
import MainContainer from '../containers/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <MainContainer />} />
        <Route exact path="/AddPost" render={() => <AddPost />} />
      </div>
    );
  }
}

export default App;
