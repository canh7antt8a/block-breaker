// Play button (home screen)
import React, { Component } from 'react';
import {
  Animated,
  Easing,
  TouchableOpacity,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ICON_COLOUR } from '../../util/constants';

// Css
import styles from '../../styles/main';

// Vars
const play = (<Icon name="play" size={110} color={ICON_COLOUR} />);
const MOVE_VALUE = 100;


// Helped by https://rnplay.org/apps/ti_v6Q
export class PlayButton extends Component {
  constructor() {
    super();
    this.state = {
      moveValue: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.sideToSide();
  }

  onIconPress() {
    Actions.game();
  }

  sideToSide() {
    this.state.moveValue.setValue(0);
    Animated.sequence([
      Animated.timing(
        this.state.moveValue,
        {
          toValue: 0 - MOVE_VALUE,
          duration: 1500,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.moveValue,
        {
          toValue: MOVE_VALUE,
          duration: 1500,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.moveValue,
        {
          toValue: 0,
          duration: 1500,
          easing: Easing.linear
        }
      )
    ]).start(() => this.sideToSide());
  }

  render() {
    return (
      <View
        style={styles.playContainer}
      >
        <TouchableOpacity
          style={Object.assign(styles.playIcon, {
            transform: [
              { translateX: this.state.moveValue }
            ]
          })}
          onPress={this.onIconPress}
        >
          {play}
        </TouchableOpacity>
      </View>
    );
  }
}
