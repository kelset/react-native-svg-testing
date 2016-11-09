/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Draw from './Draw'

class App extends Component {

  state: {
      selected: any;
  };

  constructor(props) {
    super(props);
    this.state = {selected:[1,2,3]};
  }

  render() {
    return (
      <View style={{flex:1, justifyContent: "space-around"}}>
        <Text style={{fontSize: 20, color:"black", alignSelf:"center"}}> This is a simple test for SVG </Text>
        <View style={{flex:0.5}}>
          <Draw />
        </View>
        <View style={{justifyContent: "space-around", flex: 0.4, alignItems:"center"}}>
          <Button title={"Test"} onPress={() => {console.log("Hey!")}}/>
          <Button title={"Only 1"} onPress={() => {console.log("Hey!")}}/>
          <Button title={"A couple"} onPress={() => {console.log("Hey!")}}/>
        </View>
      </View>
    );
  }
}

export default App
