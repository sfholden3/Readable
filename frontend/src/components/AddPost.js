import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import * as helpers from '../utils/helpers';

class AddPost extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    addPost: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      author: '',
      title: '',
      category: 'react',
      redirect: false
    };

    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  handleChangeBody(event) {
    this.setState({ body: event.target.value });
  }
  handleChangeAuthor(event) {
    this.setState({ author: event.target.value });
  }
  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }
  handleChangeCategory(event) {
    this.setState({ category: event.target.value });
  }

  addPost = text => {
    const { body, author, title, category } = this.state;
    const post = {
      id: helpers.getNewId(),
      timestamp: Date.now(),
      title: title,
      body: body,
      author: author ? author : 'anonymous',
      category: category
    };
    this.props.addPost(post);
    this.setState({ redirect: true });
  };
  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }
    let optionItems = this.props.categories.map(category => <option key={category.name}>{category.name}</option>);
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.addPost}>
          <label>
            Enter your Name:
            <textarea value={this.state.author} onChange={this.handleChangeAuthor} placeholder="Name" />
          </label>
          <br />
          <label>
            Enter Title of the Post:
            <textarea value={this.state.title} onChange={this.handleChangeTitle} placeholder="Title" />
          </label>
          <br />
          <label>
            Select Category:
            <select value={this.state.category} onChange={this.handleChangeCategory}>
              {optionItems}
              <option key="none">None</option>
            </select>
          </label>
          <br />
          <label>
            Enter Text of Post:
            <textarea value={this.state.body} onChange={this.handleChangeBody} placeholder="Post Text" />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default AddPost;
