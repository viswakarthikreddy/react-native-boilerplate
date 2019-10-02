import React, {Component} from 'react';
import {Text} from 'react-native';

class Typography extends Component {
  render() {
    const {style, color, children, size, ...props} = this.props;
    const stylesBlock = [style, color && {color}, size && {fontSize: size}];
    return (
      <Text style={stylesBlock} {...props}>
        {children}
      </Text>
    );
  }
}

export default Typography;
