/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

import Svg,{
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

class Draw extends Component {

  state: {
      x: any;
      y: any;
      width: any;
      height: any;
      scaleFactor: any;
      k: number;
  };

  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      scaleFactor: 0,
      k:0,
    };
  }

  componentWillReceiveProps(nextProps){
    // console.log("old props", this.props)
    // console.log("selected:", this.props.selected)
    // console.log("props have changed!", nextProps)
    this.setState({
      ...this.state,
      k: this.state.k + 2 // this is done in order to force the refresh for the SVG
    })
    // console.log("the state", this.state)
    // console.log("the props", this.props)
  }

  measureView(layout) {
    // console.log('layout properties: ', layout);
    // console.log('layout height: ', layout.height);

    let scaling_value = layout.height / 200.0

    // console.log("The scaling value", scaling_value)

    this.setState({
      ...this.state,
      x: layout.x,
      y: layout.y,
      width: layout.width,
      height: layout.height,
      scaleFactor: scaling_value,
    })
  }

  render() {
    return (
      <View style={{height:350, width:350, backgroundColor: "green", alignSelf:"center"}}>
        <View style={{flex:1, minHeight: 50, minWidth: 50, backgroundColor:"darkorchid"}} onLayout={(event) => this.measureView(event.nativeEvent.layout)}>
          <Svg style={{ width: this.state.width, height: this.state.height }} viewBox={"0 0 "+ "200" + " " + "200"}>
            <Defs>
              <G id="shape-one" key={this.state.k} >
                <G fill={this.props.selected? "red" : "coral"}>
                  <Circle cx="50" cy="50" r="50" />
                  <Rect x="50" y="50" width="50" height="50" />
                  <Circle cx="50" cy="50" r="5" fill="blue" />
                </G>
              </G>
              <G id="shape-two" key={this.state.k + 1} /*tbh this is pretty bad practise*/ >
                <G fill={this.props.selected? "deepskyblue" : "lightgreen"}>
                  <Circle cx="50" cy="50" r="50" />
                  <Rect x="50" y="50" width="50" height="50" />
                  <Circle cx="50" cy="50" r="5" fill="blue" />
                </G>
              </G>
            </Defs>
            <Rect
              height="200"
              width="200"
              fill="blue"
              // scale={this.state.scaleFactor}
            />
            <Use href="#shape-one" />
            <Use href="#shape-two" x={100} y={100}/>
          </Svg>
        </View>
        <Text>x: {this.state.x}</Text>
        <Text>y: {this.state.y}</Text>
        <Text>width: {this.state.width}</Text>
        <Text>height: {this.state.height}</Text>
        <Text>scale: {this.state.scaleFactor}</Text>
        <Text>selected: {this.props.selected.toString()}</Text>
      </View>
    );
  }
}

export default Draw
