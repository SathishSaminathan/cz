import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
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
import Divider from '../../components/Shared/Divider';

const accountList = [
  {
    name: 'Account',
    path: 'Account',
    icon: 'star-circle-outline',
  },
  {
    name: 'Refer & Earn',
    path: 'Account',
    icon: 'account-circle-outline',
  },
  {
    name: 'Play & Win',
    path: 'Account',
    icon: 'gamepad-variant',
  },
  {
    name: 'Book a Cab',
    path: 'Account',
    icon: 'car',
  },
  {
    name: 'Events',
    path: 'Account',
    icon: 'calendar',
  },
  {
    name: 'Notification',
    path: 'Account',
    icon: 'bell-outline',
  },
];
const general = [
  {
    name: 'About Us',
    path: 'Account',
    icon: 'information-outline',
  },
  {
    name: 'Feedback',
    path: 'Account',
    icon: 'message-alert-outline',
  },
  {
    name: 'Alfred loyalty information',
    path: 'Account',
    icon: 'file-document-outline',
  },
  {
    name: 'Dream Hotel Benefits',
    path: 'Account',
    icon: 'brightness-percent',
  },
  {
    name: 'Room Preferences',
    path: 'Account',
    icon: 'home-outline',
  },
  {
    name: 'Customer Service',
    path: 'Account',
    icon: 'headset',
  },
  {
    name: 'Your Privacy',
    path: 'Account',
    icon: 'lock-outline',
  },
];

class ListItem extends Component {
  renderAccountList = (isAccount = false) => {
    let list = isAccount ? accountList : general;
    return list.map(list => (
      <TouchableNativeFeedback>
        <View
          style={{
            paddingVertical: 18,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 1,
            width: widthPerc(73),
            alignSelf: 'center',
            backgroundColor: Colors.white,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
            }}>
            <IconComponent
              type={IconType.MaterialCommunityIcons}
              name={list.icon}
              style={{
                paddingRight: 15,
                fontSize: 25,
                flex: 1,
                textAlign: 'center',
              }}
            />
            <TextComponent style={{fontSize: 18, flex: 8}}>
              {list.name}
            </TextComponent>
          </View>
          {isAccount && (
            <View>
              <IconComponent
                type={IconType.AntDesign}
                name="right"
                style={{fontSize: 18}}
              />
            </View>
          )}
        </View>
      </TouchableNativeFeedback>
    ));
  };
  render() {
    return (
      <View>
        {this.renderAccountList(true)}
        <Divider />
        {this.renderAccountList()}
      </View>
    );
  }
}
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
        <View
          style={{
            backgroundColor: Colors.textBlack,
            paddingVertical: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <TextComponent style={{fontSize: 24, color: Colors.white}}>
              Hey, John Thompson
            </TextComponent>
            <TextComponent style={{fontSize: 14, color: Colors.white}}>
              You have 1500 points
            </TextComponent>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            backgroundColor: Colors.white,
          }}>
          <ListItem {...this.props} />
          <PoweredBY />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.white,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 20,
  },
});
