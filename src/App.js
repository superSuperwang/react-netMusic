import React from 'react'
import './App.scss'
import { Switch, Route, NavLink, Redirect } from "react-router-dom"
import Mine from "./pages/mine/Mine"
import Discover from "./pages/discover/Discover"
import Cloud from "./pages/cloud/Cloud"
import Video from "./pages/video/Video"
import MusicDetail from "./pages/musicDetail/MusicDetail"

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
          <Route path="/mine" component={Mine} ></Route>
          <Route path="/discover" component={Discover} exact></Route>
          <Route path="/cloud" component={Cloud} ></Route>
          <Route path="/video" component={Video} ></Route>
          <Route path="/discover/musicDetail" component={MusicDetail} ></Route>
          <Redirect to='/discover' />
        </Switch>
      </div>

      {/* <div className="full-container">
        <Switch>
          <Route path="/discover/musicDetail" component={MusicDetail}></Route>
        </Switch>
      </div> */}
    </div>

  );
}

export default App
