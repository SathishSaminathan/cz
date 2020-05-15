import React, {Component} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import auth from '@react-native-firebase/auth';
import {LoginManager, LoginButton, AccessToken} from 'react-native-fbsdk';

import {heightPerc, widthPerc} from '../../helpers/styleHelper';
import {Colors} from '../../constants/ThemeConstants';
import {Images} from '../../assets/images';
import LoginTextInput from '../../components/Shared/LoginTextInput';
import ButtonComponent from '../../components/Shared/ButtonComponent';
import TextComponent from '../../components/Shared/TextComponent';
import PoweredBY from '../../components/Shared/PoweredBy';
import IconComponent from '../../components/Shared/IconComponent';
import {IconType} from '../../constants/AppConstants';

export default class Signup extends Component {
  handleLogin = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(facebookCredential)
      .then((res) => console.log());
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor={Colors.transparent} />
        <View
          style={{
            width: widthPerc(100),
            height: heightPerc(40),
            position: 'absolute',
          }}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={Images.signin}
          />
          <View
            style={{
              position: 'absolute',
              resizeMode: 'contain',
              width: 200,
              height: 200,
              alignSelf: 'center',
            }}>
            <Image
              source={Images.Logo}
              style={{flex: 1, width: undefined, height: undefined}}
              resizeMode="contain"
            />
          </View>
        </View>
        <View
          style={{
            marginTop: heightPerc(30),
            height: heightPerc(80),
            backgroundColor: Colors.themeBlack,
            borderRadius: 20,
            elevation: 10,
            alignItems: 'center',
            paddingVertical: 20,
          }}>
          <View style={{width: widthPerc(80), paddingBottom: 50}}>
            <View style={{paddingVertical: 5}}>
              <LoginTextInput placeholder="Email" icon="md-mail" />
            </View>
            <View style={{paddingVertical: 5}}>
              <LoginTextInput password placeholder="Password" icon="ios-eye" />
            </View>
            <TextComponent style={{textAlign: 'right', color: Colors.white}}>
              Forgot password?
            </TextComponent>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 20,
              }}>
              <View
                style={{
                  paddingVertical: 10,
                  width: '49%',
                  alignSelf: 'center',
                }}>
                <ButtonComponent
                  // onPress={() => this.props.navigation.navigate('Home')}
                  style={{backgroundColor: Colors.darkGrey, fontSize: 12}}
                  borderRadius={50}>
                  Log in
                </ButtonComponent>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  width: '49%',
                  alignSelf: 'center',
                }}>
                <ButtonComponent
                  onPress={() => this.props.navigation.navigate('Signup')}
                  style={{backgroundColor: Colors.darkGrey, fontSize: 12}}
                  borderRadius={50}>
                  Sign Up
                </ButtonComponent>
              </View>
            </View>
          </View>
          <View style={{width: widthPerc(80)}}>
            <TextComponent
              style={{color: Colors.textDark, textAlign: 'center'}}>
              Sign in with
            </TextComponent>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: widthPerc(30),
                alignSelf: 'center',
                // backgroundColor: 'red',
                paddingVertical: 10,
                paddingBottom: 20,
              }}>
              <IconComponent
                onPress={() => this.handleLogin()}
                type={IconType.FontAwesome}
                name="facebook"
                style={{color: Colors.textBlack, fontSize: 25}}
              />
              <IconComponent
                type={IconType.FontAwesome}
                name="amazon"
                style={{color: Colors.textBlack, fontSize: 25}}
              />
              <IconComponent
                type={IconType.FontAwesome}
                name="twitter"
                style={{color: Colors.textBlack, fontSize: 25}}
              />
            </View>
            <PoweredBY />
          </View>
        </View>
      </View>
    );
  }
}
