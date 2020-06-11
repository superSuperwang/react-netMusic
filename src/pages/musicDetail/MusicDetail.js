import React, { Component } from 'react'
import './musicDetail.scss'
import api from '../../api/discoverApi'
import formatPlayCount from '../../utils/formatPlayCount'
import history from '../../utils/history'
import store from '@/store'
import action from '@/store/action'

export default class MusicDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      musicDetail: [],
      musicBasicData: { playCount: '' },
      songDetail: {
        id: '',// 歌曲id
        url: '',// 歌曲链接
        lyric: '',//歌词
        img: ''//封面地址
      }
    }
  }

  componentDidMount() {
    this.requestData(this.props.match.params.id)
  }

  requestData = async (id) => {
    try {
      const { data: { playlist } } = await api.getMusicDetail({ id })

      this.setState({
        musicDetail: playlist.tracks,// 歌曲
        musicBasicData: playlist// 歌单详情
      })
    } catch (err) {
      console.log(err)
    }

  }

  // 回退
  goBack = () => {
    history.goBack()
  }

  // 播放音乐
  playMusic = async (id) => {
    try {
      const { data: { data } } = await api.getSongUrl({ id })
      let url = data[0].url
      const { data: data1 } = await api.getSongDetail({ ids: id })
      let img = data1.songs[0].al.picUrl
      const { data: data2 } = await api.getLyric({ id })
      let lyric = data2.lrc.lyric
      this.setState({
        songDetail: Object.assign({}, this.state.songDetail, { url, img, lyric, id })
      })
      store.dispatch(action.addMusic(this.state.songDetail))
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { musicDetail, musicBasicData } = this.state
    return (
      <div className="music-detail-container">
        <div className="bg-image">
          <div className="top-container">
            <div className="back">
              <div className="back-btn" onTouchEnd={this.goBack}></div>
              <span className="back-tip">歌单</span>
            </div>
            <div className="middle-container">
              <div className="left-img">
                <div className="min-icon-container" >
                  <div className="min-icon"></div>
                  <span className="span-font">{formatPlayCount(musicBasicData.playCount)}</span>
                </div>
                <img src={musicBasicData.coverImgUrl} alt="" />
              </div>
              <div className="right-word">
                <p className="right-word-style">
                  {musicBasicData.description}
                </p>
              </div>
            </div>
            <div className="bottom-container">
              <div className="bottom-item">
                <div className="bottom-item-img"></div>
                <span></span>
              </div>
              <div className="bottom-item">
                <div className="bottom-item-img"></div>
                <span></span>
              </div>
              <div className="bottom-item">
                <div className="bottom-item-img"></div>
                <span></span>
              </div>
              <div className="bottom-item">
                <div className="bottom-item-img"></div>
                <span></span>
              </div>
            </div>
          </div>
          <div className="music-list">
            <div className="head">
              <div className="head-left">
                <div className="head-left-icon"></div>
                <span className="head-left-word1">播放全部</span>
                <span className="head-left-word2">(共{musicDetail.length}首)</span>
              </div>
              <div className="head-right">+ 收藏 ({formatPlayCount(musicBasicData.subscribedCount)})</div>
            </div>
            <div className="scroll-container" style={{ overflowY: 'scroll' }}>
              {musicDetail.map((item, index) => (
                <div className="list" key={index} onTouchEnd={(e) => { this.playMusic(item.id, e) }}>
                  <span className="list-num">{index + 1}</span>
                  <div className="list-infor">
                    <p className="list-infor-top">{item.name}</p>
                    <p className="list-infor-bottom">{item.ar[0].name}</p>
                  </div>
                  <span className="list-detail"></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
