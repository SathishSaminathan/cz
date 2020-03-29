import React, {Component} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import {heightPerc, widthPerc} from '../../helpers/styleHelper';
import {Colors} from '../../constants/ThemeConstants';
import {Images} from '../../assets/images';
import LoginTextInput from '../../components/Shared/LoginTextInput';
import ButtonComponent from '../../components/Shared/ButtonComponent';
import TextComponent from '../../components/Shared/TextComponent';

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
            source={{
              uri:
                'https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
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
                style={{backgroundColor: Colors.black, fontSize: 12}}
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
          </View>
        </View>
      </View>
    );
  }
}
