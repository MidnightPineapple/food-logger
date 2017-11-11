import React, { Component } from 'react';
import { View } from 'react-native';
import RootNavPrim from './config/router';
import { Root as NBRoot } from 'native-base';
import { Provider, connect } from 'react-redux';
import store from './config/store';
import { addNavigationHelpers } from 'react-navigation';

const RootNav = ({ dispatch, nav }) => (
      <RootNavPrim navigation={addNavigationHelpers({
        dispatch: dispatch,
        state: nav,
      })} />
    )

const Root = connect((s)=>({nav:s.nav}))(RootNav)

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <NBRoot>
          <Root />
        </NBRoot>
      </Provider>
    );
  }
}
