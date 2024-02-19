import request from '@/utils/request'

export const loginApi = data => {
  return request({
    url: '/v1_0/authorizations',
    data,
    method: 'POST'
  }
  )
}
