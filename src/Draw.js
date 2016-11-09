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
  };

  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      scaleFactor: 0,
    };
  }

  measureView(layout) {
    console.log('layout properties: ', layout);

    console.log('layout height: ', layout.height);

    let scaling_value = layout.height / 200.0

    console.log("The scaling value", scaling_value)

    this.setState({
          x: layout.x,
          y: layout.y,
          width: layout.width,
          height: layout.height,
          scaleFactor: scaling_value,
    })
  }

  render() {
    return (
      <View>
        <View style={{flex:1, backgroundColor: "coral"}} onLayout={(event) => this.measureView(event.nativeEvent.layout)}>
          <Svg
            height={this.state.height}
            width={this.state.width}
          >
            <Defs>
              <G id="shape">
                <G>
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
              scale={this.state.scaleFactor}
            />
            <Use href="#shape" x="20" y="0"/>
            <Use href="#shape" x="170"y="0" scale={this.state.scaleFactor}/>
          </Svg>
        </View>
        <Text>x: {this.state.x}</Text>
        <Text>y: {this.state.y}</Text>
        <Text>width: {this.state.width}</Text>
        <Text>height: {this.state.height}</Text>
        <Text>scale: {this.state.scaleFactor}</Text>
      </View>
    );
  }
}

export default Draw
