import React, {Component} from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  NativeModules,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import IconComponent from './IconComponent';
import {IconType} from '../../constants/AppConstants';
import {Colors} from '../../constants/ThemeConstants';

const {RNTwitterSignIn} = NativeModules;

const Constants = {
  //Dev Parse keys
  TWITTER_COMSUMER_KEY: 'De2GCbf6y1Ly1liBTNb2hDa8x',
  TWITTER_CONSUMER_SECRET: 'mGDihjFa901AjtF4Rin21z1m8oK5oqyOfXKXYzlhIyWvOvc7ch',
};

export default class TwitterButton extends Component {
  state = {
    isLoggedIn: false,
  };

  _twitterSignIn = () => {
    RNTwitterSignIn.init(
      Constants.TWITTER_COMSUMER_KEY,
      Constants.TWITTER_CONSUMER_SECRET,
    );
    RNTwitterSignIn.logIn()
      .then((loginData) => {
        console.log(loginData);
        const {authToken, authTokenSecret} = loginData;
        if (authToken && authTokenSecret) {
          // Create a Twitter credential with the tokens
          const twitterCredential = auth.TwitterAuthProvider.credential(
            authToken,
            authTokenSecret,
          );

          // Sign-in the user with the credential
          auth().signInWithCredential(twitterCredential);

          this.setState({
            isLoggedIn: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleLogout = () => {
    RNTwitterSignIn.logOut();
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const {isLoggedIn} = this.state;
    return (
      <View style={this.props.style}>
        {isLoggedIn ? (
          <TouchableOpacity onPress={this.handleLogout}>
            <Text>Log out</Text>
          </TouchableOpacity>
        ) : (
          <IconComponent
            onPress={this._twitterSignIn}
            type={IconType.FontAwesome}
            name="twitter"
            style={{color: Colors.textBlack, fontSize: 25}}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1b95e0',
    color: 'white',
    width: 200,
    height: 50,
  },
});
