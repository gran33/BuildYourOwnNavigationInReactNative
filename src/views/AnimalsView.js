import get from 'lodash/get';
import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import * as Views from './index';

export default class AnimalsView extends Component {


  _onPress = () => {
    this.props.changeView(Views.ObjectsView);
  };

  render() {
    const shouldShowMessage = !!get(this.props, 'message');

    return (
      <View style={styles.container}>
        <Text>Animals</Text>
        {shouldShowMessage &&
        <Text style={styles.welcome}>
          {this.props.message}
        </Text>}
        <Text style={styles.welcome}>
          🐶🐱🐭🐹🐼🐻🦊🐰🐨🐯🦁🐮🐵
        </Text>
        <Button title={'Push'}
                onPress={this._onPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

