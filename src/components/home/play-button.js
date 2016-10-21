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


// Helped by https://rnplay.org/apps/ti_v6Q
export class PlayButton extends Component {
  constructor() {
    super();
    this.state = {
      spinValue: new Animated.Value(0),
      moveValue: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.spin();
  }

  onIconPress() {
    Actions.game();
  }

  spin() {
    this.state.spinValue.setValue(0);
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin());
  }

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    return (
      <View
        style={styles.playContainer}
      >
        <Animated.View
          style={
            Object.assign(styles.playSquare, {
              transform: [
                { rotate: spin },
              ]
            })
          }
        >
        </Animated.View>
        <TouchableOpacity style={styles.playIcon} onPress={this.onIconPress}>
          {play}
        </TouchableOpacity>
      </View>
    );
  }
}
