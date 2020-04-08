import request from 'axios'
request.defaults.baseURL = 'http://localhost:3000';
export default {
  getBanner(params) {
    return request({
      url: '/banner',
      method: 'get',
      params
    })
  },

  getRecommendMusic(params) {
    return request({
      url: '/personalized',
      method: 'get',
      params
    })
  }
}


