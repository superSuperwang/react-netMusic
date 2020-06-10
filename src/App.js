import React from 'react'
import './App.scss'
import { Switch, Route, Redirect } from "react-router-dom"
import Header from "./components/Header/Header"
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
      <Header />
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
      <PlayMusic store={store} />
    </div>

  );
}

export default App
