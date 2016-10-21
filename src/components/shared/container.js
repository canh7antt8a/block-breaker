// Default app container
import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

// Css
import styles from '../../styles/main';

export default class Container extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
};
