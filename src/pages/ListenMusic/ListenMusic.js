import React, { Component } from 'react';
import store from '@/store'
import './listenMusic.scss'

class ListenMusic extends Component {
  state = {
    songDetail: store.getState()[0]
  }

  render() {
    return (
      <div className="listen-container">

      </div>
    );
  }
}

export default ListenMusic;