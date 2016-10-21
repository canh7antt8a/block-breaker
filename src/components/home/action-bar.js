// Action bar
import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ICON_SIZE, ICON_COLOUR } from '../../util/constants';

// Css
import styles from '../../styles/main';

// Vars
const dailyChallenge = (<Icon name="clock-o" size={ICON_SIZE} color={ICON_COLOUR} />);
const wheel = (<Icon name="gift" size={ICON_SIZE} color={ICON_COLOUR} />); // Lucky dip / spin
const settings = (<Icon name="cog" size={ICON_SIZE} color={ICON_COLOUR} />);
const shop = (<Icon name="shopping-cart" size={ICON_SIZE} color={ICON_COLOUR} />);

export class ActionBar extends Component {
  render() {
    return (
      <View style={styles.actionButtons}>
        <View style={styles.actionButtonLine} />
        <View style={styles.actionButtonLine} />
        {/* Buttons */}
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
        {/* End of Buttons */}
        <View style={styles.actionButtonLine} />
        <View style={styles.actionButtonLine} />
      </View>
    );
  }
}
