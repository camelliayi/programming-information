import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建新的axios实例
const server = axios.create({
  // 请求接口的基础地址
  baseURL: '/api',
  // 设置超时时间
  timeout: 20 * 1000
})

// 请求拦截
server.interceptors.request.use(config => {
  // 如果有token值，则在请求头上加上token
  config.headers.Authorization = sessionStorage.getItem('token')
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

// 响应拦截
server.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== 200) {
    ElMessage({
      message: res.message || 'Error',
      type: 'error'
    })
    return Promise.reject(new Error(res.message || 'Error'))
  } else {
    return response
  }
}, error => {
  console.log('接口信息报错' + error)
  ElMessage({
    message: error.message,
    type: error
  })
  return Promise.reject(error)
})

export default server
