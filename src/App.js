import React from 'react'
import './App.scss'
import { Switch, Route, Redirect } from "react-router-dom"
import Header from "./components/Header/Header"
import Mine from "./pages/Mine/Mine"
import Discover from "./pages/Discover/Discover"
import Cloud from "./pages/Cloud/Cloud"
import Video from "./pages/Video/Video"
import MusicDetail from "./pages/MusicDetail/MusicDetail"
import ListenMusic from "./pages/ListenMusic/ListenMusic"
import PlayMusic from "./components/PlayMusic/PlayMusic"

import store from "@/store"

function App() {
  return (

    <div className="App">
      {/* <NavLink></NavLink>
      <Switch>
        <Route></Route>
      </Switch> */}
      <Header />
      <div className="main-container">
        <Switch>
          <Route path="/mine" component={Mine} exact></Route>
          <Route path="/discover" component={Discover} exact></Route>
          <Route path="/cloud" component={Cloud} exact ></Route>
          <Route path="/video" component={Video} exact></Route>
          <Route path="/discover/musicDetail/:id" component={MusicDetail} exact></Route>
          <Route path="/discover/musicDetail/listenMusic/:id" component={ListenMusic} exact ></Route>
          <Redirect to='/discover' />
        </Switch>
      </div>
      <PlayMusic store={store} />
    </div>

  );
}

export default App
