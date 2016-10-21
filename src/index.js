// Shared code
import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Home } from './components/home';
import { ClassicGame } from './components/game';

export class Blockbreaker extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="home" component={Home} title="Home" intial />
          <Scene key="game" component={ClassicGame} title="Game" />
        </Scene>
      </Router>
    );
  }
}
