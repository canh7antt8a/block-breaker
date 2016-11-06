import React, { Component } from 'react';
import {
  Animated,
  Easing,
  Text,
  View
} from 'react-native';
import { PlayButton } from './home/play-button';
import { ActionBar } from './home/action-bar';
import Container from './shared/container';

// Css
import styles from '../styles/main';

// Vars
const paddingTop = parseInt(styles.gameModesText.paddingTop, 10);
const paddingRight = parseInt(styles.gameModesText.paddingRight, 10);
const lowestPadding = 10;

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      paddingTopBottom: new Animated.Value(paddingTop),
      paddingLeftRight: new Animated.Value(paddingRight)
    };
  }

  componentDidMount() {
    this.sideToSide();
  }

  sideToSide() {
    Animated.sequence([
      Animated.timing(
        this.state.paddingLeftRight,
        {
          toValue: lowestPadding,
          duration: 1500,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.paddingLeftRight,
        {
          toValue: paddingRight,
          duration: 1500,
          easing: Easing.linear
        }
      )
    ]).start(() => this.sideToSide());
  }

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
          <Animated.Text
            style={Object.assign(styles.gameModesText, {
              paddingRight: this.state.paddingLeftRight,
              paddingLeft: this.state.paddingLeftRight
            })}
          >
            Game Modes
          </Animated.Text>
        </View>
      </Container>
    );
  }
}
