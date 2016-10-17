// Shared code
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Css
import styles from './styles/main';

// Vars
const ICON_SIZE = 25;
const ICON_COLOUR = "#fff";
const dailyChallenge = (<Icon name="clock-o" size={ICON_SIZE} color={ICON_COLOUR} />);
const wheel = (<Icon name="gift" size={ICON_SIZE} color={ICON_COLOUR} />); // Lucky dip / spin
const settings = (<Icon name="cog" size={ICON_SIZE} color={ICON_COLOUR} />);
const shop = (<Icon name="shopping-cart" size={ICON_SIZE} color={ICON_COLOUR} />);

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
          <View style={styles.actionButtonDailyChallenge}>
            {dailyChallenge}
          </View>
          <View style={styles.actionButtonWheel}>
            {wheel}
          </View>
          <View style={styles.actionButtonShop}>
            {shop}
          </View>
          <View style={styles.actionButtonSettings}>
            {settings}
          </View>
          <View style={styles.actionButtonLine} />
          <View style={styles.actionButtonLine} />
        </View>
      </View>
    );
  }
}
