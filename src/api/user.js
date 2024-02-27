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

/*
获取用户自己信息
Path： /v1_0/user
Method： GET

返回状态码
400 请求参数错误
401 用户认证失败
507 数据库错误
200 OK

header
Authorization
Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU
用户令牌token，必传

17090086870 / 13911111111 / 13811111111
246810
 */
const getUserInfo = () => request({
  url: '/v1_0/user'
  // headers: {
  //   Authorization: `Bearer ${store.state.user.token}`
  // }
})
export {
  loginApi,
  sendSmsApi,
  getUserInfo
}
