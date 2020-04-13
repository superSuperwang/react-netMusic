import React, { Component } from 'react'
import './musicDetail.scss'

export default class MusicDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      musicList: []
    }
  }
  render() {
    return (
      <div className="music-detail-container">
        <div className="bg-image">
          <div className="top-container">
            <div className="back">
              <div className="back-btn"></div>
              <span className="back-tip">歌单</span>
            </div>
            <div className="middle-container">
              <div className="left-img"><img src="" alt="" /></div>
              <div className="right-word">
                <p className="right-word-style">
                  wowowoowowowowwowowowowowowowowow
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
            <div className="list">
              <span className="list-num">1</span>
              <div className="list-infor">
                <p className="list-infor-top">我是一只鱼</p>
                <p className="list-infor-bottom">超人学长</p>
              </div>
              <span className="list-detail"></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
