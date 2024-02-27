// 封装axios请求模块
// 引入axios
import axios from 'axios'

import store from '../store'

const request = axios.create({
  baseURL: 'http://geek.itheima.net'
  // baseURL: 'http://toutiao.itheima.net' http://geek.itheima.net/v1_0/authorizations
  // baseURL: 'http://api-toutiao-web.itheima.net/mp'
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = 'Bearer ' + user.token
  }
  console.log(config)
  // 必须 return config 否则请求就停止这里出不去
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 导出
export default request
