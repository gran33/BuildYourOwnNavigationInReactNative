import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class AnimalsView extends Component {


  _onPress = () => {
    this.props.changeView(this.props.pushScreen);
  };

  render() {
    return (
      <View style={styles.container}>
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

