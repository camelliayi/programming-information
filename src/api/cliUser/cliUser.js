import request from '@/utils/request'

const apiName = '/client/index'

export default {
  login (email, password) {
    return request({
      url: `${apiName}/login`,
      method: 'post',
      data: {
        email, password
      }
    })
  },
  register (email, password, code) {
    return request({
      url: `${apiName}/register`,
      method: 'post',
      data: {
        email, password, code
      }
    })
  },
  sendVerifyCode (email) {
    return request({
      url: `${apiName}/sendcode`,
      method: 'post',
      data: { email }
    })
  }
}
