// Action bar
import React, { Component } from 'react';
import { Animated, Easing, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ICON_SIZE, ICON_COLOUR } from '../../util/constants';

// Css
import styles from '../../styles/main';

// Vars
const dailyChallenge = (<Icon name="clock-o" size={ICON_SIZE} color={ICON_COLOUR} />);
const wheel = (<Icon name="gift" size={ICON_SIZE} color={ICON_COLOUR} />); // Lucky dip / spin
const settings = (<Icon name="cog" size={ICON_SIZE} color={ICON_COLOUR} />);
const shop = (<Icon name="shopping-cart" size={ICON_SIZE} color={ICON_COLOUR} />);
const maxHeight = 80;
const minHeight = 30;

export class ActionBar extends Component {
  constructor() {
    super();
    this.state = {
      height1: new Animated.Value(minHeight),
      height2: new Animated.Value(minHeight)
    };
  }

  componentDidMount() {
    this.grow();
  }

  grow() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.height1,
          {
            toValue: maxHeight,
            duration: 1500,
            easing: Easing.linear
          }
        ),
        Animated.timing(
          this.state.height2,
          {
            toValue: minHeight,
            duration: 1500,
            easing: Easing.linear
          }
        )
      ]),
      Animated.parallel([
        Animated.timing(
          this.state.height1,
          {
            toValue: minHeight,
            duration: 1500,
            easing: Easing.linear
          }
        ),
        Animated.timing(
          this.state.height2,
          {
            toValue: maxHeight,
            duration: 1500,
            easing: Easing.linear
          }
        )
      ])
    ]).start(() => this.grow());
  }

  render() {
    return (
      <View style={styles.actionButtons}>
        <View style={styles.actionButtonLine} />
        <View style={styles.actionButtonLine} />
        {/* Buttons */}
        <Animated.View
          style={Object.assign(styles.actionButtonDailyChallenge, {
            height: this.state.height1
          })}
        >
          {dailyChallenge}
        </Animated.View>

        <Animated.View
          style={Object.assign(styles.actionButtonWheel, {
            height: this.state.height2
          })}
        >
          {wheel}
        </Animated.View>

        <Animated.View
          style={Object.assign(styles.actionButtonShop, {
            height: this.state.height1
          })}
        >
          {shop}
        </Animated.View>

        <Animated.View
          style={Object.assign(styles.actionButtonSettings, {
            height: this.state.height2
          })}
        >
          {settings}
        </Animated.View>

        {/* End of Buttons */}
        <View style={styles.actionButtonLine} />
        <View style={styles.actionButtonLine} />
      </View>
    );
  }
}
