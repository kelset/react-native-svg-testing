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
import Human from './Human'

class App extends Component {

  state: {
      selected: any;
      draw: boolean;
  };

  constructor(props) {
    super(props);
    this.state = {selected:[0,0,0,0,0,0], draw: true}; // let's move to something a bit more complex..
  }

  _selectItems(selectionArray){
    console.log("this state will be changed:", this.state.selected)
    this.setState({
      ...this.state,
      selected: selectionArray,
    })
  }

  _switchDrawing(){
    console.log("swapping SVG")
    this.setState({
      selected: [],
      draw: !this.state.draw,
    })
  }
  render() {
    return (
      <View style={{flex:1, justifyContent: "space-around"}}>
        <Text style={{fontSize: 20, color:"black", alignSelf:"center"}}> This is a simple test for SVG </Text>
        <View style={{flex:0.6}}>
          <View style={{height:300, width:300, alignSelf:"center", borderWidth: 0.5}}>
            {/* {this.state.draw?
              <Draw selected={this.state.selected}/>
            : */}
              <Human selected={this.state.selected}/>
            {/* } */}
          </View>
        </View>
        <View style={{flex: 0.3, flexDirection:"row", justifyContent: "space-around",}}>
          <View style={{justifyContent: "space-around", flex:1, alignItems:"center", backgroundColor:"mintcream"}}>
            <Button title={"Activate 1"} onPress={() => {this._selectItems([2,0,0,0,0,0])}}/>
            <Button title={"Activate 2"} onPress={() => {this._selectItems([0,2,0,0,0,0])}}/>
            <Button title={"Change"} onPress={() => {this._switchDrawing()}}/>
          </View>
          <View style={{justifyContent: "space-around", flex:1, alignItems:"center", backgroundColor:"mintcream"}}>
            <Button title={"Activate 4,5,6"} onPress={() => {this._selectItems([1,1,0,2,2,2])}}/>
            <Button title={"Activate all"} onPress={() => {this._selectItems([2,2,1,2,1,2])}}/>
            <Button title={"Turn off"} onPress={() => {this._selectItems([0,0,0,0,0,0])}}/>
          </View>
        </View>
      </View>
    );
  }
}

export default App
