// axios

import axios from 'axios'
import {posts} from '@/api/index.js'

// const posts = [
//     { id :1, title :'title1', content:'content1', createAt:'2025-01-01'},
//     { id :2, title :'title2', content:'content2', createAt:'2025-02-01'},
//     { id :3, title :'title3', content:'content3', createAt:'2025-03-01'},
//     { id :4, title :'title4', content:'content4', createAt:'2025-04-01'},
//     { id :5, title :'title5', content:'content5', createAt:'2025-05-01'},
// ]

export function getPosts(params){
//  return posts;
//  return axios.get('http://localhost:5000/posts', { params });
  return posts.get('/', { params });
}

export function getPostById(id){
  // const numberId = parseInt(id);
  // return posts.find(post => post.id === numberId);
//  return axios.get(`http://localhost:5000/posts/${id}`);
//  return posts.get(`/${id}`);
  return posts.get(id);
}

export function createPost(data){
//  return axios.post('http://localhost:5000/posts', data);
  return posts.post('/', data);
}

export function updatePost(id, data){
//  return axios.put(`http://localhost:5000/posts/${id}`, data);
  return posts.put(id, data);
}

export function deletePost(id){
//  return axios.delete(`http://localhost:5000/posts/${id}`);
  return posts.delete(id);
}
