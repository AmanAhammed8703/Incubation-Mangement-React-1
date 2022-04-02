import axios from 'axios'
import { API_BASE_URL } from './url'
const api=axios.create({baseURL:API_BASE_URL});


api.interceptors.request.use(
    function(configs) {
        let admin=JSON.parse( localStorage.getItem("adminData"))
      const token = admin.token
      if (token) {
        configs.headers["Authorization"] = token;
      }
      return configs;
    },
    function(error) {
      return Promise.reject(error);
    }
  );

export default api;