import React, {Component} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';

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
          <View style={{width: widthPerc(80)}}>
            <View style={{paddingVertical: 5}}>
              <LoginTextInput placeholder="Name" icon="user" />
            </View>
            <View style={{paddingVertical: 5}}>
              <LoginTextInput placeholder="Email" icon="md-mail" />
            </View>
            <View style={{paddingVertical: 5}}>
              <LoginTextInput password placeholder="Password" icon="ios-eye" />
            </View>
            <View
              style={{paddingVertical: 10, width: '50%', alignSelf: 'center'}}>
              <ButtonComponent
                onPress={() => this.props.navigation.navigate('Home')}
                style={{backgroundColor: Colors.darkGrey, fontSize: 12}}
                borderRadius={50}>
                Sign Up
              </ButtonComponent>
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
