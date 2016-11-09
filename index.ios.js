/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src/App';

export default class svg_test extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('svg_test', () => svg_test);