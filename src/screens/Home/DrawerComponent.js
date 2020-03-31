import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import TextComponent from '../../components/Shared/TextComponent';
import {Colors} from '../../constants/ThemeConstants';
import ImageComponent from '../../components/Shared/ImageComponent';
import {Images} from '../../assets/images';
import {widthPerc, heightPerc} from '../../helpers/styleHelper';
import IconComponent from '../../components/Shared/IconComponent';
import {IconType} from '../../constants/AppConstants';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import PoweredBY from '../../components/Shared/PoweredBy';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 80,
            backgroundColor: Colors.white,
            width: widthPerc(100),
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 10,
          }}>
          <View
            style={{
              width: widthPerc(60),
              height: 60,
            }}>
            <TouchableOpacity
              style={{flex: 1}}
              activeOpacity={1}
              onPress={() => this.props.navigation.pop()}>
              <ImageComponent
                source={Images.LogoDark}
                style={{width: undefined, height: undefined, flex: 1}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={{position: 'absolute', right: '5%'}}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.pop()}
              style={{padding: 10}}>
              <IconComponent
                type={IconType.Ionicons}
                name="ios-menu"
                style={{fontSize: 30}}
              />
            </TouchableNativeFeedback>
          </View>
        </View>
        <View style={{backgroundColor: 'red', paddingVertical: 30, justifyContent:'center', alignItems:'center'}}>
          <View>
            <TextComponent style={{fontSize: 24}}>
              Hey, John Thompson
            </TextComponent>
            <TextComponent style={{fontSize: 14}}>
              You have 1500 points
            </TextComponent>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 20,
  },
});
