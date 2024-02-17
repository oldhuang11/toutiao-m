// 封装axios请求模块
// 引入axios
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})

// 导出
export default request
