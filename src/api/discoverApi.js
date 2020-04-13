import request from 'axios'
request.defaults.baseURL = 'http://localhost:3000';
export default {
  // 获取轮播图
  getBanner(params) {
    return request({
      url: '/banner',
      method: 'get',
      params
    })
  },

  // 获取推荐歌单
  getRecommendMusic(params) {
    return request({
      url: '/personalized',
      method: 'get',
      params
    })
  },

  // 获取歌单详情
  getMusicDetail(params) {
    return request({
      url: '/playlist/detail',
      method: 'get',
      params
    })
  }

}


