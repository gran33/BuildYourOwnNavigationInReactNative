import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  View,
  Animated
} from 'react-native';

import * as Views from './views';


export default class BuildYourOwnNavigationInReactNative extends Component {


  constructor(props) {
    super(props);
    this.state = {
      presentedView: Views.WelcomeView
    }
  }

  _handleChangeView = (presentedView) => {
    this.setState({presentedView});
  };

  _renderBackButton(backScreen) {
    if (!backScreen) return;
    return (
      <View style={styles.backButtonContainer}>
        <Button
          title={'< Pop'}
          onPress={() => this.setState({presentedView: backScreen})}
          style={styles.backButton}
        />
      </View>
    );
  }

  _renderInternalView() {
    let PresentedView = this.state.presentedView;
    let pushScreen = '';
    let backScreen;

    switch(PresentedView) {

      case Views.AnimalsView:
        PresentedView = Views.AnimalsView;
        backScreen = Views.EmojisView;
        break;

      case Views.EmojisView:
        PresentedView = Views.EmojisView;
        backScreen = Views.WelcomeView;
        break;

      case Views.ObjectsView:
        PresentedView = Views.ObjectsView;
        backScreen = Views.AnimalsView;
        break;

      case Views.WelcomeView:
        PresentedView = Views.WelcomeView;
        break;

      default:
        return null;
    }

    const opacityValue = new Animated.Value(0);


    return (
      <View style={{flex: 1, flexDirection: 'column', marginTop: 20}}>
        {this._renderBackButton(backScreen)}
        <PresentedView
          changeView={this._handleChangeView}
          opacityValue={opacityValue}
          animationStyle={{opacity: opacityValue}}
        />
      </View>
    )
  }


  render() {
    return (
      <View style={styles.container}>
        {this._renderInternalView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#bdc3c7'
  }
});

AppRegistry.registerComponent('BuildYourOwnNavigationInReactNative', () => BuildYourOwnNavigationInReactNative);
