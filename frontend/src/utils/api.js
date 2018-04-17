const APP_URL = 'http://localhost:3001';

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: 'application/json',
  Authorization: 'shelbyreadableproject'
};

export const getAllCategories = () =>
  fetch(`${APP_URL}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const getAllPosts = () =>
  fetch(`${APP_URL}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getPostComments = postId =>
  fetch(`${APP_URL}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getCommentDetails = commentId =>
  fetch(`${APP_URL}/comments/${commentId}`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getCategoryPosts = category =>
  fetch(`${APP_URL}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getPost = postId =>
  fetch(`${APP_URL}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data);

export const addPost = post =>
  fetch(`${APP_URL}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category
    })
  })
    .then(res => res.json())
    .then(data => data);

export const postVote = (postId, vote) =>
  fetch(`${APP_URL}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option: vote
    })
  })
    .then(res => res.json())
    .then(data => data);

export const commentVote = (commentId, vote) =>
  fetch(`${APP_URL}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option: vote
    })
  })
    .then(res => res.json())
    .then(data => data);

export const addComment = comment =>
  fetch(`${APP_URL}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: comment.id,
      timestamp: comment.timestamp,
      body: comment.body,
      author: comment.author,
      parentId: comment.parentId
    })
  })
    .then(res => res.json())
    .then(data => data);

export const editPost = (post) =>
  fetch(`${APP_URL}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: post.title,
      body: post.body
    })
  }).then(res => res.json());

export const editComment = (comment) =>
  fetch(`${APP_URL}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      timestamp: comment.timestamp,
      body: comment.body
    })
  }).then(res => res.json());

export const deletePost = (postId) =>
  fetch(`${APP_URL}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());

export const deleteComment = (commentId) =>
  fetch(`${APP_URL}/comments/${commentId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());
