import React, {Component} from 'react';
import {Text, View, Image, StatusBar, Alert, Linking} from 'react-native';
import {authorize} from 'react-native-app-auth';
import InAppBrowser from 'react-native-inappbrowser-reborn';

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

export default class Signup extends Component {
  async openLink() {
    try {
      const url = 'https://www.google.com';
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#453AA4',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'overFullScreen',
          modalTransitionStyle: 'partialCurl',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android Properties
          showTitle: true,
          toolbarColor: Colors.themeBlack,
          secondaryToolbarColor: 'black',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right',
          },
          headers: {
            'my-custom-header': 'my custom header value',
          },
        });
        // Alert.alert(JSON.stringify(result));
      } else Linking.openURL(url);
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  handleAmazon = () => {
    let temp = authorize(config);
    console.log(temp);
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
                  // onPress={() => this.openLink()}
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
                onPress={() => this.handleAmazon()}
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
