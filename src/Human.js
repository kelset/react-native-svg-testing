/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button
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

let color_array = ["rgba(255, 255, 255, 1)", "rgba(84, 207, 174, 0.5)", "rgba(84, 207, 174, 1)"]; // this way, at 0-> none, at 2-> max opacity

let first_time = true

class Human extends Component {

  state: {
      x: any;
      y: any;
      width: any;
      height: any;
      k: number;
      strokeWidth: number;
      strokeFill: any;
  };

  constructor(props) {
    super(props);

    this._toBase64 = this._toBase64.bind(this);

    this.state = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      k:0,
      strokeWidth: 0,
      strokeFill: "rgba(255, 255, 255, 1)",
    };
  }

  componentWillReceiveProps(nextProps){
    // console.log("old props", this.props)
    // console.log("selected:", this.props.selected)
    // console.log("props have changed!", nextProps)
    this.setState({
      ...this.state,
      k: this.state.k + 1 // this is done in order to force the refresh for the SVG
    })
    // console.log("the state", this.state)
    // console.log("the props", this.props)
  }

  measureView(layout) {
    console.log('layout properties: ', layout);
    console.log('layout height: ', layout.height);

    //let scaling_value = layout.height / 200.0

    // console.log("The scaling value", scaling_value)

    if (first_time) {
      first_time = !first_time
      // console.log("Hi!")
      this.setState({
        ...this.state,
        x: layout.x,
        y: layout.y,
        width: layout.width,
        height: layout.height,
        k: this.state.k + 1 // this is done in order to force the refresh for the SVG
      })
    } else {
      this.setState({
        ...this.state,
        x: layout.x,
        y: layout.y,
        width: layout.width,
        height: layout.height,
      })
    }
  }

  _toBase64(){
    this.svgbody.toDataURL(base64 => {
        console.log(base64);
    });
  }

  render() {
    return (
      <View style={{flex:1, minHeight: 50, minWidth: 50}} onLayout={(event) => this.measureView(event.nativeEvent.layout)}>
        <Svg style={{ width: (300), height: (300) }} viewBox={"0 0 "+ "2200" + " " + "2400"}  key={this.state.k} >
          <Defs>
            <G  id="body"
                fill={color_array[this.props.selected[0]]}
              >
              <Path
                  d="M1257.5,709.2c0.9-6.2,2.1-11.2,2.6-11.2c0,0,0,0,0,0"
                  stroke={this.state.strokeFill}
                  strokeWidth={this.state.strokeWidth}
              />
              <Path
                  d="M1277.8,1033.6c0-1.6-0.4-3.5-1-4.2c-0.6-0.7-0.9-1.3-0.6-1.3c0.3,0-0.1-2.1-1-4.8c-0.8-2.6-1.6-6.1-1.8-7.8
                  		c-0.5-5.1-3.6-19.9-4.7-22.8c-0.6-1.5-1.9-3.2-2.9-3.8c-1.4-0.7-1.9-2.1-1.9-5.2c0-2.3-0.5-6-1-8.2c-0.5-2.2-1.4-16.2-1.9-31
                  		c-1.2-34.9-2.6-45.6-11.9-91.5c-7-34.6-6.1-63.2,3.4-114.5c1.8-9.9,4.1-23.1,5-29.2c0.9-6.2,2.1-11.2,2.6-11.2c0,0,0,0,0,0l0-0.3
                  		c0-91.5,27-176.8,73.4-248.2c-5.7-6-15.5-13.9-27.5-21.7c-12.6-8.2-15.7-9.8-33.5-16.8c-22.5-8.8-59.2-26.9-97.9-48.1
                  		c-4.4-2.4-8.7-5.4-12.3-8.4c-26.8,11.6-56.3,18-87.3,18c-29.6,0-57.9-5.9-83.7-16.4c-3.1,3.3-7.5,6.8-12.8,10.3
                  		c-14.1,9.3-68.9,35.7-92.2,44.3c-5.4,2-12.3,5.1-15.3,6.9c-9.8,5.9-13.2,7.6-20.9,10.7c-14.2,5.6-23.9,13.1-31.1,23.8
                  		c-1.9,2.8-4.1,8.1-6.4,15.2c49.6,70.6,78.8,156.5,78.9,249.3c0.8,0.6,1.8,5.7,3.4,15.5c3.4,21.1,4.6,38.4,4.6,64
                  		c-0.1,36.7-1.4,50.3-7.3,77c-8.3,37.2-8.4,38.2-8.6,62.5c-0.3,36.4-2.3,52.5-8.4,69.4c-5.4,14.8-8.6,34.3-10.3,65.4
                  		c87.9,40.2,158.3,111.9,196.9,200.6c0.4-0.6,1.2-0.6,3,0.1c1.6,0.6,5.3,0.8,9,0.4c5-0.5,7.5-1.5,13-5.1c4.6-3,6.4-3.9,7.3-3.4
                  		c37.3-86.9,105.1-157.6,189.9-198.6c-1.1-5.8-2.6-12.8-4.9-22.9C1278.3,1038.7,1277.8,1035.2,1277.8,1033.6z"
                  stroke={this.state.strokeFill}
                  strokeWidth={this.state.strokeWidth}
              />
              <Path
                  d="M1012.8,1596c0-0.1,0-0.2,0.1-0.3"
                  stroke={this.state.strokeFill}
                  strokeWidth={this.state.strokeWidth}
              />
              <Path
                  d="M891.5,716.5c0,0.3,0,0.6,0,0.9l3.4,14.7C893.3,722.1,892.4,717.1,891.5,716.5z"
                  stroke={this.state.strokeFill}
                  strokeWidth={this.state.strokeWidth}
              />
            </G>

            <G  id="left-leg"
                fill={color_array[this.props.selected[1]]}>
              <Path
                  d="M1265,1599.4c-5.3-19-6.1-25.2-7.1-44.9c-2-39.4,0.4-76.6,6.2-95c1-3.3,2.6-9.3,3.4-13.4
                  		c2.2-10.7,10.2-87.7,12.5-120.6c1.1-15.4,3.1-36.8,4.4-47.5c2.9-22.4,7.9-75.1,9.7-101.5c1.1-15.8,1-20-0.5-34
                  		c-1-8.8-2.3-19.8-3.1-24.5c-1.9-12.2-3.3-23.7-4.5-38c-0.5-5.4-1-10-2.1-15.6c-84.8,41-152.6,111.7-189.9,198.6
                  		c0.2,0.1,0.4,0.2,0.5,0.4c0.6,0.8,2.1,9.2,3.3,18.7c1.4,10.6,4.5,26.6,8.1,41.3c7.5,31.1,18.5,84.3,21,101.5c1.1,7.4,2.4,21.4,3,31
                  		c0.6,9.6,1.5,21.6,2,26.5c0.5,5,1,15.3,1,23c0,9.8,0.6,17.4,2.1,25.4c2.3,12.5,9.6,34.6,15.2,45.6c1.9,3.9,5.9,13.1,8.8,20.5
                  		l5.2,13.5l0,0.2c8.4,0.9,16.8,1.4,25.5,1.4C1216.1,1612.1,1241.4,1607.6,1265,1599.4z"
                  stroke={this.state.strokeFill}
                  strokeWidth={this.state.strokeWidth}
              />
              <Path
                  d="M1164.2,1610.5l0,0.2c8.4,0.9,16.8,1.4,25.5,1.4c26.4,0,51.7-4.5,75.3-12.7"
                  stroke={this.state.strokeFill}
                  strokeWidth={this.state.strokeWidth}
              />
              <Path
                  d="M1164.2,1610.7l0.9,24.8c3.5,101.8,4.1,107.7,12.9,135.8c10.4,33.1,11.6,37.6,15.8,57.7
                  		c3,14.3,10.8,57.8,13.6,75.5c5.5,35,5.9,57.3,1.1,72.5c-3.3,10.6-2.9,16.5,2.2,27.6c2.2,4.9,3.8,10.3,4.2,14.4
                  		c0.4,3.6,2.3,10.8,4.3,16c2.7,7.2,3.7,11.8,4.3,19c0.4,5.2,1.1,11.3,1.7,13.5c0.5,2.2,1.6,6.7,2.4,10c0.8,3.3,3,10.7,5,16.5
                  		c3.2,9.5,3.7,12.1,4.6,27.5c1.4,23,4.5,42.4,8,49.5c1.5,3,3.5,8.4,4.5,12c1,3.6,2.8,8.1,4,10c3.1,4.9,9.3,10.6,13.4,12.5
                  		c7.5,3.4,22.5-0.9,23.7-6.6l0.6-2.9l2.2,2c5.1,4.8,18.6,1.1,19.4-5.2c0.3-2.4,0.7-2.7,4.2-2.7c4.8,0,7-2.7,7-8.7
                  		c0-4,0.1-4.3,2.4-3.7c3.8,0.9,6.6-2.5,6.7-8.3c0.2-7.4,1.1-10.2,3.9-11.5c1.4-0.7,3.7-3.6,5.2-6.7c2.4-4.9,2.7-6.6,2.7-16
                  		c0-14.2-2.5-23-8.6-30.3c-1.3-1.5-3.2-4.7-4.2-7.1c-2.3-5.3-14.3-23.1-20.6-30.6c-2.5-3-4.6-5.9-4.6-6.4s-0.6-1.6-1.3-2.5
                  		s-2.4-4.3-3.7-7.6c-4-10.2-12.3-25.7-17.1-32l-4.6-6l-0.6-15.5c-0.6-16-2.5-26.1-6.1-31.6c-0.9-1.4-1.5-2.8-1.2-3.1
                  		c0.3-0.3-0.1-2.3-0.9-4.5c-2.3-6.5-1.9-27.2,1.5-74.3c0.6-7.7,1.2-21.9,1.5-31.5c0.9-29.7,2.5-60.8,4-76c3.9-39.1,4.7-78.2,2-102
                  		c-1.9-17-8.6-50.8-13.1-66.5c-0.9-3-1.6-5.6-2.3-8.1c-23.6,8.2-48.9,12.7-75.3,12.7C1181.1,1612.1,1172.6,1611.6,1164.2,1610.7
                  		l0-0.2"
                  stroke={this.state.strokeFill}
                  strokeWidth={this.state.strokeWidth}
              />
            </G>
            <G id="right-leg"
              fill={color_array[this.props.selected[2]]}>
              <Path
                  d="M1012.8,1596c0-0.1,0-0.2,0.1-0.3c1.6-5.6,4.8-14.8,7.1-20.3s6.2-16.1,8.6-23.5c5-15.4,6.3-24.9,6.4-46.5
                  		c0-24.4,2.1-71.6,3.6-82c0.8-5.5,1.9-16,2.5-23.3c1.2-15.9,6.7-50.9,11.4-72.2c1.9-8.5,4.6-24.5,6.1-35.5c1.5-11,2.8-20.6,3-21.2
                  		c0-0.1,0.1-0.2,0.1-0.3c-38.6-88.7-109-160.4-196.9-200.6c-0.7,12.1-1.1,26-1.4,42.2c-0.3,18.2-0.7,33.6-1,34.3
                  		c-1.6,4.8,6.9,89.1,13.1,129.7c0.8,5.5,2.4,16.8,3.6,25c1.1,8.2,3.2,20.8,4.5,28c1.3,7.1,2.4,14.5,2.4,16.4s1.1,10,2.5,18
                  		c1.4,8,3.4,21.7,4.5,30.4c4.2,32.6,8.4,55.8,11.9,66.3c7.2,21.2,6.6,17.2,6.6,49.5c0,16.2,0.4,36.9,0.9,46
                  		c0.8,16.1,0.8,16.9-2.2,32.5c-0.1,0.6-0.2,1.2-0.4,1.9c20.2,5.9,41.6,9,63.8,9C986.9,1599.4,1000,1598.2,1012.8,1596z"
                  stroke={this.state.strokeFill}
                  strokeWidth={this.state.strokeWidth}
              />
              <Path
                  d="M912.3,1556c0.8,16.1,0.8,16.9-2.2,32.5c-0.1,0.6-0.2,1.2-0.4,1.9"
                  stroke={this.state.strokeFill}
                  strokeWidth={this.state.strokeWidth}
              />
              <Path
                  d="M909.8,1590.4c-3.6,18.7-5.4,29.9-6.7,41.1c-4.3,37.3-4.6,40.7-4.5,63.5c0.1,21.2,0.5,25.9,3.7,49
                  		c2,14,4.1,30.2,4.7,36c0.6,5.8,1.9,18.2,3,27.5c1.1,9.3,2.9,26.7,4,38.5c1.2,11.8,3.9,34.6,6.1,50.5c4.3,31.7,4.7,39.3,2.5,47.5
                  		c-6.3,23.3-6.7,25.4-5.9,32c1.5,12.4,0.8,15.4-6.2,29.3c-4.4,8.6-6.8,14.9-7.5,19c-0.7,4.2-2.3,8.2-5.1,12.7
                  		c-6.4,10.2-8.3,12.9-15.8,22c-3.9,4.7-8.8,12.1-11,16.5c-2.2,4.4-5.1,9.1-6.3,10.5c-1.3,1.4-3,3.6-3.9,5
                  		c-2.2,3.5-7.7,28.3-7.7,34.7c0,5.6,3.4,14.7,6.3,17.2c1,0.8,1.7,2.8,1.7,5.2c0,5.5,1.9,8.9,5.2,9.6c2,0.4,3.3,1.5,4.2,3.8
                  		c1.6,3.9,5.1,6.5,8.6,6.5c2,0,2.8,0.7,3.5,3.2c1.1,3.8,6.5,7.8,10.7,7.8c3,0,8.8-2.5,10.1-4.4c0.4-0.6,1.2-2.9,1.8-5.1
                  		c1.6-5.7,7.8-16.5,9.5-16.5c1.1,0,1,0.9-0.7,4.2c-3,5.8-3.8,16.7-1.4,20.3c4.1,6.3,12.7,8.1,23.3,5c4.3-1.3,5.6-2.3,8.6-6.8
                  		c2-2.9,4.2-7.5,5-10.3c0.8-2.8,2.4-6.9,3.5-9.1c1.1-2.2,3.2-8.7,4.7-14.4c1.4-5.7,3.1-11.8,3.6-13.6c0.5-1.8,0.9-9.6,0.8-17.5
                  		c-0.2-16.5,1.3-27.4,4.5-33.8c1.3-2.5,3.5-8.3,5-13c2.4-7.4,2.8-10.9,3.5-28c1-22.9,2.3-30.4,10-55.5c2.6-8.5,2.2-15.4-1.5-30.1
                  		c-2.1-8.1-2.5-12.3-2.5-23.1c0-16.1,2.4-42.9,5.1-57.8c1.1-6.1,2.4-13.7,2.9-17s1.7-10.3,2.8-15.5c1.1-5.2,2.7-13.6,3.7-18.5
                  		s3.4-16.2,5.5-25c12.4-51.2,14.1-61,14.1-81.9c0-8.2-0.5-21.3-1-29c-5.2-69-5.2-72.3-1.2-86.5c-12.8,2.2-25.9,3.4-39.2,3.4
                  		C951.4,1599.4,930,1596.2,909.8,1590.4z"
                  stroke={this.state.strokeFill}
                  strokeWidth={this.state.strokeWidth}
              />
            </G>
            <G id="left-arm"
              fill={color_array[this.props.selected[3]]}>
              <Path
                  d="M1400.4,846.7c-4.8-14.8-10.7-31.1-14.3-39.7c-7-16.4-7.5-17.5-9.9-27c-3.5-13.4-6.6-35.1-12.2-86.8
                  		c-3.2-29-4.2-52.1-4.4-103.7c-0.2-50.1-0.4-55-2.5-68.5c-5.3-34.8-11.8-56-20.6-68c-0.8-1.1-1.8-2.2-2.9-3.5
                  		c-46.4,71.4-73.4,156.6-73.4,248.2l0,0.3c0.5,0,0.9,0.6,0.9,1.4c0,5.3,3.6,32.9,6,46.2c2.8,15.4,9,41.5,14.6,61.5
                  		c2.4,8.5,2.7,11.4,2.9,28c0.1,11.3,0.7,20.4,1.5,23.5c0.7,2.5,2.1,7,3.9,12.2c1.6,0,3.2,0.1,4.9,0.1
                  		C1332.6,870.8,1368.4,862.1,1400.4,846.7z"
                  stroke={this.state.strokeFill}
                  strokeWidth={this.state.strokeWidth}
              />
              <Path
                  d="M1289.9,870.7c3.7,10.7,8.9,24.4,11.2,29.3c5.9,12.4,8.7,19.7,18.3,47c11.9,34.1,14.6,40.9,28.6,74
                  		c6.2,14.6,13.7,33,16.7,40.9c3,7.9,8.9,22.1,13,31.5c15.3,34.9,22.3,51.7,22.3,53.2c0,0.8,1,3.4,2.2,5.7c2.1,4,2.2,5.2,2,23.6
                  		c-0.2,19,1.3,33.4,4.8,46.4c0.6,2.1,1.1,6,1.2,8.7s0.5,4.7,0.9,4.5s1.3,2,2,4.8c1.7,6.8,1.7,26.7,0,42.7
                  		c-1.8,16.3-1.2,28.1,1.5,31.7c4.1,5.5,11.7,4.6,13.2-1.6c1-3.9,2.3-16.3,2.6-24.7c0.1-2.8,0.9-7.7,1.8-11.1
                  		c0.9-3.4,1.7-10,1.8-14.8c0.1-4.8,0.5-8.6,0.9-8.6c2.7,0,2.9,3.8,2.4,45.1c-0.5,40.2-0.5,42.6,1.3,44.7c2.7,3.3,10.1,4.1,13.3,1.5
                  		c2.3-1.9,2.4-2.5,2.7-15.9c0.3-15.4,1.8-30.1,3.5-35.3c0.7-2.3,0.9-8.1,0.4-17.5c-0.8-16,0.7-17.8,2.4-3c2.1,18.1,2.6,28.5,2.3,50
                  		c-0.3,23.7-0.1,25.4,4.8,28.2c3.5,2.1,9.4,0.9,12.5-2.4c2.3-2.4,2.4-3.3,2.4-15.5c0-7.1,0.6-17.3,1.2-22.6
                  		c1.7-12.9,1.3-32.2-0.7-39.9c-1.8-6.9-2.1-13.3-0.6-13.3c0.6,0,1,1.5,1,3.4c0,1.9,1.1,6.2,2.4,9.8c3.3,8.9,4,13.1,5.6,37.2
                  		c1.4,19.5,2.2,22.5,7.2,24.9c3.4,1.6,4,1.7,7.3,0.3c5.9-2.5,6.5-5.3,6.5-28.8c0-21.1-0.2-23.1-4.4-46.8
                  		c-4.1-23.3-4.5-26.4-4.5-32.9v-6.1l9.2,9.1c11.3,11.1,20,15.9,30.1,16.7c8.3,0.7,11.6-1.1,11.6-6.1c0-2.9-0.6-3.7-5.5-6.6
                  		c-6.3-3.8-10.5-8.3-13.6-14.3c-1.2-2.3-4.2-6.4-6.8-9.2c-6.4-6.9-13-15.4-16.2-20.8c-1.6-2.8-8.3-9.5-17.5-17.5
                  		c-8.2-7.1-17.6-15.9-20.9-19.5c-6.7-7.2-9-12.2-14.9-32.8c-1.8-6.3-4.9-16-6.8-21.5c-5.3-15-15.4-47-17.6-55.6
                  		c-1.9-7.5-4-19.8-6.1-35.4c-2-15-5.1-35.9-9-60c-2.2-13.2-5.3-33.2-6.9-44.5c-1.7-11.3-4-24.3-5.1-29c-1.4-5.7-4.2-15.1-7.6-25.3
                  		c-31.9,15.4-67.8,24.1-105.6,24.1C1293.2,870.8,1291.5,870.8,1289.9,870.7z"
                  stroke={this.state.strokeFill}
                  strokeWidth={this.state.strokeWidth}
              />
            </G>
            <G  id="right-arm"
                fill={color_array[this.props.selected[4]]}>
              <Path
                  d="M805.6,493c-8.1,35-9.8,55-9.4,110c0.3,37.9,0.1,39.9-6.7,95.5c-1.4,11-3.4,29-4.6,40
                		c-3.1,29.7-6.6,43.8-15.2,62.5c-1.6,3.6-4.7,11.5-6.8,17.5c-2.1,6-4.7,13.5-5.8,16.5c-1.2,3.4-2.6,7.6-3.9,12.2
                		c22.2,6.6,45.6,10.2,70,10.2c14.8,0,29.2-1.3,43.3-3.8c0.3-1,0.6-1.9,0.7-2.6c0.6-2.5,1.2-12.8,1.3-23c0.2-16.6,0.5-19.5,2.9-28
                		c6.8-24.2,15.7-61,17.2-71.2c1.3-8.7,2.1-12.9,3-12.3c-0.2-92.8-29.4-178.7-78.9-249.3C810.3,474.2,807.9,483,805.6,493z"
                  stroke={this.state.strokeFill}
                  strokeWidth={this.state.strokeWidth}
              />
              <Path
                  d="M753.2,847.2c-3.5,12.1-7.1,27.1-9.2,39.3c-1.7,9.9-4.2,22.9-5.5,29c-2.7,12.3-5.6,28.9-11,63
                  		c-7.8,49.4-10.6,63.2-16.1,78.2c-1.9,5.2-4.1,13.3-4.9,18.2c-0.8,4.8-2.4,12.1-3.5,16.2s-2.9,10.6-3.9,14.4
                  		c-5.5,20.3-7,26.3-7,28.8c0,3-1.8,7.1-6.4,15c-2.7,4.5-18.4,18.7-29.2,26.3c-2.4,1.7-5.3,4.3-6.5,5.8s-2.7,2.7-3.4,2.7
                  		c-1.3,0-2.1,0.9-9.8,11.5c-2.4,3.3-9.2,10.8-15.1,16.7c-5.9,5.9-10.7,11.2-10.7,11.8c0,0.9-2.2,2.1-12.2,6.4
                  		c-3,1.3-3.8,2.1-3.8,4.2c0,4.5,3.5,6.4,11.7,6.4c12.2,0.1,20.8-2.9,28-9.6c7.1-6.7,17.2-15.3,17.9-15.3c1.1,0-0.1,19.3-2.4,38.5
                  		c-1.2,9.9-2.5,21.4-3,25.5c-0.5,4.1-0.6,17.5-0.3,29.8l0.6,22.3l3.3,2.9c3.5,3.1,7.7,3.8,11.4,1.8c4.2-2.2,4.8-6.5,4.8-29.8
                  		c0-13.6,0.4-22.2,1-22.6c0.5-0.3,1-1.9,1-3.5c0-1.6,0.5-3.2,1-3.5c0.7-0.4,0.8,1.3,0.2,5.2c-1,7.5-0.9,23.9,0.1,48.3
                  		c0.8,17.4,1.1,19.7,2.9,21.7c3.9,4.3,12.5,4.1,15.4-0.2c1.3-1.9,1.6-7.2,1.9-28.7c0.2-14.5,0.9-30.6,1.5-35.8
                  		c0.6-5.2,1.3-12.3,1.7-15.8c0.3-3.4,1-6.2,1.4-6.2c1.2,0,1.1,6.1-0.3,15.2c-1,6.3-0.9,10.2,0.5,22.5c1.3,11.8,1.5,16.9,0.7,24.8
                  		c-1.6,15.6-1.4,17.2,1.4,19.1c3.8,2.5,9.3,2.1,12.3-0.9c3.2-3.2,3.8-10.1,4.7-49.2c0.3-15.4,0.9-29.4,1.2-31.1
                  		c0.3-1.7,1.6-4.4,2.8-6c3.3-4.2,5-2.2,7,8.4c0.9,4.8,2.5,11.8,3.5,15.5s2.9,13.1,4.1,20.7c2.4,15.5,4,18.9,8.9,18.9
                  		c1.6,0,4.1-1.1,5.7-2.4c2.8-2.4,2.8-2.4,2.5-13.8c-0.2-6.2-1.1-15.8-2.2-21.3c-6.9-36.1-6.8-33.9-2.6-56c6.9-36.5,6.7-33.8,5-51.5
                  		c-0.4-4.4-0.2-10.5,0.5-15c0.6-4.1,1.4-9.5,1.7-12c0.3-2.5,0.9-5.4,1.4-6.5c1.4-3.4,7.6-20.8,16.1-45.5
                  		c13.3-38.6,19.9-55,33.7-84.5c10.5-22.3,23.5-55.3,37.4-94.5c3.1-8.8,9.5-24.6,12.8-31.5c2-4.3,9.8-26.8,12.5-35.9
                  		c-14,2.5-28.5,3.8-43.3,3.8C798.9,857.4,775.4,853.8,753.2,847.2z"
                  stroke={this.state.strokeFill}
                  strokeWidth={this.state.strokeWidth}
              />
            </G>
            <G  id="head"
                fill={color_array[this.props.selected[5]]}
              >
              <Path
                  d="M1162.3,354.4c-26.8,11.6-56.3,18-87.3,18c-29.6,0-57.9-5.9-83.7-16.4"
                  stroke={this.state.strokeFill}
                  strokeWidth={this.state.strokeWidth}
              />
              <Path
                  d="M991.3,355.9c2.5-2.6,4.3-5.1,5.2-7.5c2.2-5.2,4.4-21.2,4.9-35c0.4-12.2,0.4-12.9-2.4-19.3
              			c-6-14.1-9.3-25.8-12.6-44.5c-1.7-9.6-2.1-10.7-3.9-10.7c-0.7,0-2.9-1.2-5.1-2.6c-5.1-3.5-10.5-15.1-14-30.2
              			c-3-12.9-3.2-17.8-1.1-25.8c1.6-6,2.6-7.8,6.3-10.8c2-1.6,2.2-2.4,1.6-6c-0.4-2.3-1.1-4.9-1.6-5.8c-0.5-0.9-1.4-7.4-2-14.5
              			c-0.6-7.1-1.6-13.8-2.1-15c-0.8-1.6-0.7-5.1,0.1-12c0.7-6.3,0.8-9.9,0.1-10.1c-1.2-0.4-1.3-3.9,0-4.6c0.5-0.3,1.2-2.7,1.6-5.3
              			c0.3-2.6,1-5.5,1.6-6.5c0.5-1,0.9-2.9,0.9-4.4c0-1.5,1.4-5,3.2-7.8c1.7-2.8,4.6-7.7,6.4-10.8c3-5.2,11.6-16.4,20.3-26.3
              			c4.3-4.8,12.8-11.4,15.8-12.2c1.2-0.3,2.2-1,2.2-1.5s0.6-0.8,1.2-0.7c0.7,0.1,2.7-0.1,4.4-0.5c2.4-0.6,3-1.2,2.7-2.6
              			c-0.4-1.6,0.3-2,4.3-2.6c2.7-0.4,6.3-1.3,8.1-2.1c1.8-0.8,3.8-1.1,4.3-0.8c0.5,0.3,1.6,0.1,2.4-0.5c0.8-0.6,3.6-1.2,6.2-1.3
              			c2.6-0.1,5.1-0.6,5.5-1.2c0.5-0.7,2.4-0.4,5.6,0.7c5.8,2.1,8.8,2.2,9.4,0.5c0.3-0.9,1-0.8,2.9,0.4c2.3,1.5,6.2,1.6,9.9,0.1
              			c0.8-0.3,2.8-0.7,4.5-0.9c1.6-0.1,4.5-0.6,6.4-0.9c2.3-0.5,3.2-0.4,2.7,0.4c-0.5,0.7,1.3,1.1,5.3,1.1c6.3,0,10.2,1.5,13.9,5.5
              			c1.2,1.3,4.3,3,6.7,3.7c2.5,0.7,5.5,2.3,6.8,3.5c1.2,1.2,4.5,3.4,7.3,4.8c8.3,4.3,16,12.4,30.8,32.7c1.8,2.5,3.9,6.1,4.6,8
              			c0.7,1.9,1.9,4.7,2.7,6.2c2,3.8,3.6,12.6,4.1,22.8c0.5,10.2,0.5,8.9-0.6,27.5c-1.2,18.9-2.6,29.3-4.7,35.5l-1.7,4.8l2.7,3.2
              			c2.9,3.4,6.7,14.4,6.7,19.2c0,5.1-4.9,25-8.3,33.7c-2,5.2-4.5,9.6-6.7,11.8c-3.4,3.4-4.1,3.7-9.5,3.8l-3,0.1l-2.8,14
              			c-4.2,20.6-4.4,21.7-5.5,25c-0.9,3-0.8,16.5,0.3,31.8c0.8,11.7,4.1,26.3,6.9,31.1c1.9,3.2,5,6.6,8.9,10"
                  stroke={this.state.strokeFill}
                  strokeWidth={this.state.strokeWidth}
              />
            </G>
          </Defs>
          <Use href="#head"/>
          <Use href="#body"/>
          <Use href="#right-arm"/>
          <Use href="#left-arm"/>
          <Use href="#right-leg"/>
          <Use href="#left-leg"/>
        </Svg>

        <Button title={"Turn to base64"} style={{flex:0.2}} onPress={() => {this._toBase64(svgbody)}}/>
      </View>
    );
  }
}

export default Human
