import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Swiper from 'swiper';
import discoverApi from '../../api/discover'
import './discover.scss'
import ColumnList from '../../components/columnList/ColumnList'


export default class discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArr: [],
      recommendMusic: []
    }
  }

  requestBanner = async () => {
    const { data: { banners } } = await discoverApi.getBanner(1)
    this.setState({
      imageArr: banners
    })
  }

  requestRecMusic = async () => {
    const { data: { result } } = await discoverApi.getRecommendMusic()
    console.log(result)
    this.setState({
      recommendMusic: result.slice(10, 20)
    })
  }

  componentDidMount() {
    new Swiper('.swiper-container', {
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
      }
    })
    this.requestBanner()
    this.requestRecMusic()
    // discoverApi.getRecommendMusic()
  }

  render() {
    const { imageArr, recommendMusic } = this.state
    return (
      <div className="discover-container">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {imageArr.map((item, index) => (
              <div className="swiper-slide" key={index}><img src={item.imageUrl} alt={item.typeTitle} /></div>
            ))}

          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="menu">
          <Link className="menu-item" to="/toplist">
            <div className="menu-icon-m public" />
            <p>每日推荐</p>
          </Link>
          <Link className="menu-item" to="/toplist">
            <div className="menu-icon-g public" />
            <p> 歌 单 </p>
          </Link>
          <Link className="menu-item" to="/toplist">
            <div className="menu-icon-p public" />
            <p>排行榜</p>
          </Link>
          <Link className="menu-item" to="/toplist">
            <div className="menu-icon-d public" />
            <p> 电 台 </p>
          </Link>
          <Link className="menu-item" to="/toplist">
            <div className="menu-icon-z public " />
            <p> 直 播 </p>
          </Link>
        </div>
        <div className="recommend">
          <p className="font-style">推荐歌单</p>
          <div className="font-btn">
            <div className="font-next-style">为你精挑细选</div>
            <div className="look-btn">查看更多</div>
          </div>
          <ColumnList recommendMusic={recommendMusic}></ColumnList>
        </div>
      </div>
    )
  }
}
