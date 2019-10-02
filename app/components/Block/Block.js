import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

class Block extends Component {
  render() {
    const {
      flex,
      children,
      center,
      style,
      background,
      safeView,
      middle,
      ...props
    } = this.props;
    const stylesBlock = [
      styles.block,
      flex && {flex},
      center && styles.center,
      middle && styles.middle,
      background && {backgroundColor: background},
    ];
    return safeView ? (
      <SafeAreaView style={stylesBlock} {...props}>
        {children}
      </SafeAreaView>
    ) : (
      <View style={stylesBlock} {...props}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    width,
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
});

export default Block;
