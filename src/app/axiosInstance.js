import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  // headers: {
  //   'Access-Control-Allow-Origin:': '*'
  // }
})

export default axiosInstance
