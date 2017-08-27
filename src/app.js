import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  View
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

  _renderInternalView() {
    let PresentedView = this.state.presentedView;
    let pushScreen = '';

    switch(PresentedView) {

      case Views.AnimalsView:
        PresentedView = Views.AnimalsView;
        pushScreen = Views.ObjectsView;
        break;

      case Views.EmojisView:
        PresentedView = Views.EmojisView;
        pushScreen = Views.AnimalsView;
        break;

      case Views.ObjectsView:
        PresentedView = Views.ObjectsView;
        break;

      case Views.WelcomeView:
        PresentedView = Views.WelcomeView;
        pushScreen = Views.EmojisView;
        break;

      default:
        return null;
    }


    return (
      <PresentedView
        changeView={this._handleChangeView}
        pushScreen={pushScreen}
      />
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
    flex: 1,justifyContent: 'center',alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

AppRegistry.registerComponent('BuildYourOwnNavigationInReactNative', () => BuildYourOwnNavigationInReactNative);
