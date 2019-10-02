import React, {Component} from 'react';
import {TouchableOpacity, Text, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

class Button extends Component {
  render() {
    const {style, color, background, children, size, ...props} = this.props;
    const stylesBlock = [
      styles.block,
      color && {color},
      size && {fontSize: size},
      background && {backgroundColor: background},
    ];
    return (
      <TouchableOpacity style={stylesBlock} {...props}>
        <Text>{children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    width: width - 50,
    height: 50,
    paddingVertical: 10,
    alignItems: 'center',
    fontSize: 16,
  },
});

export default Button;
