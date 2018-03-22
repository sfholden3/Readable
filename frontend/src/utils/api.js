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
