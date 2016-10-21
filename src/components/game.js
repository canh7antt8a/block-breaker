// Classic Game mode (random blocks, forever)
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

// Css
import styles from '../styles/main';

export class ClassicGame extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi!</Text>
      </View>
    );
  }
}
