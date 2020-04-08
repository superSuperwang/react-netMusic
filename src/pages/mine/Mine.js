import React, { Component } from 'react'
import Swiper from 'swiper';
import './mine.scss'

export default class mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newlist: [0, 1, 2, 3, 4, 5, 6]
    }
  }

  componentDidMount() {
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  }

  render() {
    return (
      <div className="mine-container">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">Slide 1</div>
            <div className="swiper-slide">Slide 2</div>
            <div className="swiper-slide">Slide 3</div>
          </div>
        </div>
      </div>
    )
  }
}
