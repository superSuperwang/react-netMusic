import request from 'axios'
request.defaults.baseURL = 'http://localhost:3000';
export default {
  // 获取轮播图
  getBanner(params) {
    return request({
      url: '/banner',
      method: 'GET',
      params
    })
  },

  // 获取推荐歌单
  getRecommendMusic(params) {
    return request({
      url: '/personalized',
      method: 'GET',
      params
    })
  },

  // 获取歌单详情
  getMusicDetail(params) {
    return request({
      url: '/playlist/detail',
      method: 'GET',
      params
    })
  },

  // 获取歌曲连接
  getSongUrl(params) {
    return request({
      url: '/song/url',
      method: 'GET',
      params
    })
  },

  // 获取封面
  getSongDetail(params) {
    return request({
      url: '/song/detail',
      method: 'GET',
      params
    })
  },

  // 获取歌词
  getLyric(params) {
    return request({
      url: '/lyric',
      method: 'GET',
      params
    })
  }

}


