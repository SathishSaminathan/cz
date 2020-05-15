/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {MyStack} from './src/routes/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigator} from './src/routes/TabNavigator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((res) => {
      if (res) {
        console.log('res._user', res._user && res._user);
        this.setState({
          user: res._user,
        });
      } else {
        this.setState({
          user: null,
        });
      }
    });
  }

  render() {
    const {user} = this.state;
    return (
      <>
        <NavigationContainer>
          {user ? <TabNavigator /> : <MyStack />}
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
