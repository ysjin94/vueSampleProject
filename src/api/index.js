import axios from 'axios';

function create(baseUrl, options){
  const instance = axios.create({
    baseURL: baseUrl,
    ...options,
  });
    return instance;
}

//DEV
//export const posts = create('http://localhost:5000/posts')
export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/` );
