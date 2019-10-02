import React, {Component} from 'react';
import {SafeView} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigator from 'mad/app/navigations/AppNavigator';
import configureStore from 'mad/app/store';

class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
