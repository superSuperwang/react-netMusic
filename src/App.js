import React from 'react'
import './App.scss'
import './static/swiper.css'
import { Switch, Route, NavLink } from "react-router-dom"
import Mine from "./pages/mine/Mine"
import Discover from "./pages/discover/Discover"
import Cloud from "./pages/cloud/Cloud"
import Video from "./pages/video/Video"


function App() {
  return (
    <div className="App">
      {/* <NavLink></NavLink>
      <Switch>
        <Route></Route>
      </Switch> */}
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
      <div className="main-container">
        <Switch>
          <Route path="/mine" component={Mine}></Route>
          <Route path="/discover" component={Discover}></Route>
          <Route path="/cloud" component={Cloud}></Route>
          <Route path="/video" component={Video}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App
