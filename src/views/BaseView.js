import React, { Component } from 'react';
import {Animated} from 'react-native';


export default class BaseView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opacityValue: this.props.opacityValue
    }
  }

  componentDidMount() {
    console.log('RANG', 'componentDidMount', this.state.opacityValue);

    Animated.timing(
      this.state.opacityValue,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }
    ).start();
  }
}
