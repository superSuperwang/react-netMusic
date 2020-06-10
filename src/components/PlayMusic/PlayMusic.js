import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom"
import './playMusic.scss'

class PlayMusic extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="play-container">

      </div>
    );
  }
}

export default withRouter(PlayMusic);