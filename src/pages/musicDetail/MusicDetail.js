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
      musicBasicData: { playCount: '' }
    }
  }

  componentDidMount() {
    this.requestData(this.props.match.params.id)
  }

  requestData = async (id) => {
    const { data: { playlist } } = await api.getMusicDetail({ id })

    this.setState({
      musicDetail: playlist.tracks,
      musicBasicData: playlist
    })
  }

  // 回退
  goBack = () => {
    history.goBack()
  }

  // 播放音乐
  playMusic = (item) => {
    console.log(item)
    // 跳转到播放页面
    store.dispatch(action.addMusic(item))
    console.log(store.getState())
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
                <span className="head-left-word2">(共160首)</span>
              </div>
              <div className="head-right">+ 收藏 (13999)</div>
            </div>
            <div className="scroll-container" style={{ overflowY: 'scroll' }}>
              {musicDetail.map((item, index) => (
                <div className="list" key={index} onTouchEnd={(e) => { this.playMusic(item, e) }}>
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
