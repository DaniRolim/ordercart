import axios from "axios";

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/bc5c50d8563c4b81aec2f819d1b83442',
    timeout: 10000,
  });