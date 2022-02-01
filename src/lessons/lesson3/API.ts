import axios from 'axios';

const configOMB = {
   baseURL: 'http://www.omdbapi.com',
};
const key = 'f28a034f';
const axiosInstance = axios.create(configOMB);

const API = {
   searchFilmsByTitle: async (title: string) => {
      return await axiosInstance.get(`?apikey=${key}&s=${title}`).then(response => {
         console.log(response)
         return response.data
      })
   },
   searchFilmsByType: (title: string, type: string) => {
      return axiosInstance.get(`?apikey=${key}&s=${title}&type=${type}`).then(response => response.data)
   }
};


export default API;
