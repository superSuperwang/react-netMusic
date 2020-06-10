import React, { Component } from 'react'
import { NavLink, withRouter } from "react-router-dom"
import './header.scss'

class Header extends Component {
  render() {
    const { location: { pathname } } = this.props
    const havePromission = ['/mine', '/discover', '/cloud', '/video']
    const index = havePromission.indexOf(pathname)
    return index === -1 ? '' : (
      <div className="nav">
        <span className="nav-item">
          <NavLink to="/mine" activeClassName="mine-selected">我的</NavLink>
        </span>
        <span className="nav-item">
          <NavLink to="/discover" activeClassName="selected">发现</NavLink>
        </span>
        <span className="nav-item">
          <NavLink to="/cloud" activeClassName="selected">云村</NavLink>
        </span>
        <span className="nav-item">
          <NavLink to="/video" activeClassName="selected">视频</NavLink>
        </span>
      </div>
    )
  }
}

export default withRouter(Header);