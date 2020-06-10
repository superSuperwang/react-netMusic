import React from 'react'
import './App.scss'
import { Switch, Route, NavLink, Redirect } from "react-router-dom"
import Mine from "./pages/Mine/Mine"
import Discover from "./pages/Discover/Discover"
import Cloud from "./pages/Cloud/Cloud"
import Video from "./pages/Video/Video"
import MusicDetail from "./pages/MusicDetail/MusicDetail"
import PlayMusic from "./components/PlayMusic/PlayMusic"
import store from "./store/index"

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
          <Route path="/discover/musicDetail/:id" component={MusicDetail} ></Route>
          <Redirect to='/discover' />
        </Switch>
      </div>
      <div className="footer">
        <PlayMusic store={store} />
      </div>
    </div>

  );
}

export default App
