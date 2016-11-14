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

class Human extends Component {

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
      k: this.state.k + 6 // this is done in order to force the refresh for the SVG
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
      <View style={{flex:1, minHeight: 50, minWidth: 50}} onLayout={(event) => this.measureView(event.nativeEvent.layout)}>
        <Svg style={{ width: this.state.width, height: this.state.height }} viewBox={"0 0 "+ "200" + " " + "200"}>
          <Defs>
            <G id="shape-one" key={this.state.k} >
              <G fill={this.props.selected.includes(1)? "red" : "coral"}>
                <Circle cx="10" cy="10" r="10" />
                <Rect x="10" y="10" width="10" height="10" />
                <Circle cx="10" cy="10" r="1" fill="blue" />
              </G>
            </G>
            <G id="shape-two" key={this.state.k + 1} /*tbh this is pretty bad practise*/ >
              <G fill={this.props.selected.includes(2)? "deepskyblue" : "lightgreen"}>
                <Circle cx="10" cy="10" r="10" />
                <Rect x="10" y="10" width="10" height="10" />
                <Circle cx="10" cy="10" r="1" fill="blue" />
              </G>
            </G>
            <G id="shape-three" key={this.state.k + 2 } >
              <G fill={this.props.selected.includes(3)? "peru" : "pink"}>
                <Circle cx="10" cy="10" r="10" />
                <Rect x="10" y="10" width="10" height="10" />
                <Circle cx="10" cy="10" r="1" fill="blue" />
              </G>
            </G>
          </Defs>
          <Use href="#shape-one" x={15} y={15}/>
          <Use href="#shape-two" x={45} y={45}/>
          <Use href="#shape-three" x={75} y={75}/>
        </Svg>
      </View>
    );
  }
}

export default Human
