import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import './columnList.scss'
import formatPlayCount from '../../utils/formatPlayCount'
import history from '../../utils/history'
export default class ColumnList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    new BScroll('.wrapper', {
      scrollX: true
    })

  }

  showMusicDetail = ({ id }, e) => {
    console.log(history)
    history.push(`/discover/musicDetail/${id}`)
  }

  render() {
    const { recommendMusic } = this.props
    return (
      <div className="wrapper">
        <div className="content">
          {recommendMusic.map((item, index) => (
            <div className="wrap-item" key={index} onTouchEnd={(e) => this.showMusicDetail(item, e)}>
              <div className="min-icon-container" >
                <div className="min-icon"></div>
                <span className="span-font">{formatPlayCount(item.playCount)}</span>
              </div>
              <img src={item.picUrl} alt={item.name} />
              <p className="font-rec-style">{item.name}</p>
            </div>
          ))
          }

        </div>
      </div>
    )
  }
}
ColumnList.propTypes = {
  recommendMusic: PropTypes.any.isRequired
}
