import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { PlayButton } from './home/play-button';
import { ActionBar } from './home/action-bar';
import Container from './shared/container';

// Css
import styles from '../styles/main';

export class Home extends Component {
  render() {
    return (
      <Container>
        <Text style={styles.title}>
          Block Breaker
        </Text>
        {/* Action bar */}
        <ActionBar />
        {/* Play Button */}
        <PlayButton />
        {/* Game modes */}
        <View style={styles.gameModes}>
          <Text style={styles.gameModesText}>Game Modes</Text>
        </View>
      </Container>
    );
  }
}
