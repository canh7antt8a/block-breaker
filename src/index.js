// Shared code
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

// Css
import styles from './styles/main';

export class Blockbreaker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Block Breaker
        </Text>
        <View style={styles.actionButtons}>
          <View style={styles.actionButtonLine} />
          <View style={styles.actionButtonLine} />
          <View style={styles.actionButtonSettings} />
          <View style={styles.actionButtonSettings} />
          <View style={styles.actionButtonSettings} />
          <View style={styles.actionButtonSettings} />
          <View style={styles.actionButtonLine} />
          <View style={styles.actionButtonLine} />
        </View>
      </View>
    );
  }
}
