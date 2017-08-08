import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View
} from 'react-native';


export default class WelcomeView extends Component {

  _onPress = () => {
    this.props.changeView(this.props.pushScreen);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={'Push'}
          onPress={this._onPress}
          style={styles.welcome}
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
  }
});
