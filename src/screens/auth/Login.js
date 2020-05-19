import React, {Component} from 'react';
import {Text, View, Image, StatusBar, Alert, Linking} from 'react-native';
import {authorize} from 'react-native-app-auth';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {default as Amplify} from 'aws-amplify';
import {withOAuth} from 'aws-amplify-react-native';

import {heightPerc, widthPerc} from '../../helpers/styleHelper';
import {Colors} from '../../constants/ThemeConstants';
import {Images} from '../../assets/images';
import LoginTextInput from '../../components/Shared/LoginTextInput';
import ButtonComponent from '../../components/Shared/ButtonComponent';
import TextComponent from '../../components/Shared/TextComponent';
import PoweredBY from '../../components/Shared/PoweredBy';
import IconComponent from '../../components/Shared/IconComponent';
import {IconType} from '../../constants/AppConstants';
import TwitterButton from '../../components/Shared/TwitterButton';
import FacebookButton from '../../components/Shared/FacebookButton';
import {default as awsConfig} from '../../../aws-exports';
import {openLink} from '../../helpers/utils';

// your Cognito Hosted UI configuration
const oauth = {
  domain: 'dreamhotelf4dd6de0-f4dd6de0-dev.auth.us-east-1.amazoncognito.com',
  scope: [
    'phone',
    'email',
    'profile',
    'openid',
    'aws.cognito.signin.user.admin',
  ],
  redirectSignIn: 'app://,app://',
  redirectSignOut: 'app://',
  responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
};

Amplify.configure(awsConfig);
Amplify.configure({
  Auth: {
    oauth: {
      domain:
        'dreamhotelf4dd6de0-f4dd6de0-dev.auth.us-east-1.amazoncognito.com',
      scope: [
        'phone',
        'email',
        'profile',
        'openid',
        'aws.cognito.signin.user.admin',
      ],
      redirectSignIn: 'app://,app://',
      redirectSignOut: 'app://',
      responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
    },
  },
});

const config = {
  clientId: 'hmnm9en6ml3u8vgt4os099iqq',
  redirectUrl: 'com.myclientapp://myclient/redirect',
  serviceConfiguration: {
    authorizationEndpoint:
      'https://dreamshoteldomain.auth.us-east-1.amazoncognito.com/oauth2/authorize',
    tokenEndpoint:
      'https://dreamshoteldomain.auth.us-east-1.amazoncognito.com/oauth2/token',
    revocationEndpoint:
      'https://dreamshoteldomain.auth.us-east-1.amazoncognito.com/oauth2/revoke',
  },
};

class Signup extends Component {
  handleAmazon = () => {
    let temp = authorize(config);
    console.log(temp);
  };

  render() {
    const {
      oAuthUser: user,
      oAuthError: error,
      hostedUISignIn,
      facebookSignIn,
      googleSignIn,
      amazonSignIn,
      customProviderSignIn,
      signOut,
    } = this.props;
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
                  onPress={() => openLink('https://www.google.com')}
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
              <FacebookButton />
              <IconComponent
                onPress={amazonSignIn}
                type={IconType.FontAwesome}
                name="amazon"
                style={{color: Colors.textBlack, fontSize: 25}}
              />
              <TwitterButton />
              {/* <IconComponent
                type={IconType.FontAwesome}
                name="twitter"
                style={{color: Colors.textBlack, fontSize: 25}}
              /> */}
            </View>
            <PoweredBY />
          </View>
        </View>
      </View>
    );
  }
}

export default withOAuth(Signup);
