import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import TextComponent from '../components/Shared/TextComponent';

export default class Home extends Component {
  render() {
    return (
      <View>
        <TextComponent>Home Component</TextComponent>
        <Button
          title="Go to Notification"
          onPress={() => this.props.navigation.push('Notifications')}></Button>
      </View>
    );
  }
}
