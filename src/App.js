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
      selected: boolean;
  };

  constructor(props) {
    super(props);
    this.state = {selected:false};
  }

  _selectItem(){
    console.log("change state", this.state.selected)
    this.setState({
      selected: !this.state.selected,
    })
  }

  render() {
    return (
      <View style={{flex:1, justifyContent: "space-around"}}>
        <Text style={{fontSize: 20, color:"black", alignSelf:"center"}}> This is a simple test for SVG </Text>
        <View style={{flex:0.5}}>
          <Draw selected={this.state.selected}/>
        </View>
        <View style={{justifyContent: "space-around", flex: 0.4, alignItems:"center"}}>
          <Button title={"Test"} onPress={() => {this._selectItem()}}/>
          <Button title={"Only 1"} onPress={() => {console.log("Hey!")}}/>
          <Button title={"A couple"} onPress={() => {console.log("Hey!")}}/>
        </View>
      </View>
    );
  }
}

export default App
