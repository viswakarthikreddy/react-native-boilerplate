import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {Image} from 'react-native';
import {Block} from 'mad/app/components/Block';
import {updateDate} from './actions';
import {Text} from 'mad/app/components/Text';
import {Button} from 'mad/app/components/Button';
import {FlatList} from 'react-native-gesture-handler';

class AppContainer extends Component {
  componentDidMount() {
    this.props.updateDate();
  }

  handleOnPress = () => {
    return Actions.push('login');
  };
  render() {
    const {lastUpdatedDate} = this.props.global;
    const date = lastUpdatedDate && lastUpdatedDate.toDateString();
    const DATA = [
      {
        title: 'Hello World',
        key: '#1',
        id: '1',
      },
      {
        title: 'Hello World1',
        key: '#1',
        id: '1',
      },
    ];
    return (
      <Block safeView center middle background="#4B0082">
        <Block center middle>
          <Text color="#fff" size={30}>
            Sign in to Velocity
          </Text>
          <Text color="#fff" size={20} style={{marginBottom: 20}}>
            Please enter your credentials {date}
          </Text>
          <Image
            style={{width: 50, height: 50}}
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            }}
          />
          <FlatList
            data={DATA}
            renderItem={({item}) => <Text>{item.title}</Text>}
            keyExtractor={item => item.id}
          />
          <Button background="#fff" onPress={this.handleOnPress}>
            Move to new Page
          </Button>
        </Block>
      </Block>
    );
  }
}

const mapStateToProps = state => ({
  global: state.global,
});

const mapDispatchToProps = dispatch => ({
  updateDate: () => dispatch(updateDate()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
