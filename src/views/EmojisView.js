import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import * as Views from './index';


export default class EmojisView extends Component {

  _onPress = () => {
    this.props.changeView(Views.AnimalsView);
  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          😀😃😅😇😍😘😜🤑🤠😱👻😼
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
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

