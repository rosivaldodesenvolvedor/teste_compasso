import React from 'react';
import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://api.github.com/users/',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 1000,
});


 
export default Api;