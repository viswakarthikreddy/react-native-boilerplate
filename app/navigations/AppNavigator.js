import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {AppContainer} from '../containers/AppContainer';
import {LoginContainer} from '../containers/LoginContainer';

const AppNavigator = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="app" component={AppContainer} title="App" initial={true} />
        <Scene key="login" component={LoginContainer} title="Login Compoent" />
      </Scene>
    </Router>
  );
};

export default AppNavigator;
