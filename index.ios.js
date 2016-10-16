// Block Breaker Windows entry point
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Our stuff
import { Blockbreaker as blockbreaker } from './src';

// Register application
AppRegistry.registerComponent('blockbreaker', () => blockbreaker);
