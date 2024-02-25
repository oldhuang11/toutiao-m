import request from '../utils/request'

const loginApi = data => {
  return request({
    url: '/v1_0/authorizations',
    data,
    method: 'POST'
  }
  )
}

const sendSmsApi = mobile => request({
  url: `/v1_0/sms/codes/${mobile}`
})

export {
  loginApi,
  sendSmsApi
}
