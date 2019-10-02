import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class LoginContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login Container</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default LoginContainer;
