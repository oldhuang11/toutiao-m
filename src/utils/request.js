// 封装axios请求模块
// 引入axios
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://geek.itheima.net'
  // baseURL: 'http://toutiao.itheima.net' http://geek.itheima.net/v1_0/authorizations
  // baseURL: 'http://api-toutiao-web.itheima.net/mp'
})

// 导出
export default request
