import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
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
    route: 'Profile',
  },
  {
    name: 'Refer & Earn',
    path: 'Account',
    icon: 'account-circle-outline',
    route: 'ReferEarn',
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
    route: 'ChooseRide',
  },
  {
    name: 'Events',
    path: 'Account',
    icon: 'calendar',
    route: 'Events',
  },
  {
    name: 'Notification',
    path: 'Account',
    icon: 'bell-outline',
    route: 'Notification',
  },
  {
    name: 'Order Your Food',
    path: 'Account',
    icon: 'food',
    route: 'OrderYourFood',
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
    route: 'Feedback',
  },
  {
    name: 'Alfred Loyalty Information',
    path: 'Account',
    icon: 'file-document-outline',
    route: 'AlfredLoyaltyInformation',
  },
  {
    name: 'Dream Hotel Benefits',
    path: 'Account',
    icon: 'brightness-percent',
    // route: 'MemberBenefits',
  },
  {
    name: 'Make Reservation',
    path: 'Account',
    icon: 'calendar-check-outline',
    route: 'MakeReservation',
  },
  {
    name: 'Room Preferences',
    path: 'Account',
    icon: 'home-outline',
    route: 'Preferences',
  },
  {
    name: 'Restaurant Recommendation',
    path: 'Account',
    icon: 'food-fork-drink',
    route: 'RestaurantRecommendation',
  },
  {
    name: 'Toiletries Request',
    path: 'Account',
    icon: 'spray-bottle',
    route: 'ToiletriesRequest',
  },
  {
    name: 'Favorites',
    path: 'Account',
    icon: 'heart-outline',
    route: 'Favorites',
  },
  {
    name: 'Preferred Travel Partners',
    path: 'Account',
    icon: 'airplane',
    route: 'PreferredTravelPartners',
  },
  {
    name: 'Email Subscriptions',
    path: 'Account',
    icon: 'email-outline',
    route: 'EmailSubscriptions',
  },
  {
    name: 'Security',
    path: 'Account',
    icon: 'shield-check-outline',
    route: 'Security',
  },
  {
    name: 'Do Not Sell My Info',
    path: 'Account',
    icon: 'lock-alert',
    // route: 'RoomPreferences',
  },
  {
    name: 'Customer Service',
    path: 'Account',
    icon: 'headset',
    route: 'CustomerService',
  },
  {
    name: 'Your Privacy',
    path: 'Account',
    icon: 'lock-outline',
    route: 'PrivacyPolicy',
  },
];

class ListItem extends Component {
  renderAccountList = (isAccount = false) => {
    let list = isAccount ? accountList : general;
    return list.map((list, i) => (
      <TouchableNativeFeedback
        key={i}
        onPress={() =>
          list.route && this.props.navigation.navigate(list.route)
        }>
        <View
          style={{
            paddingVertical: 16,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 1,
            width: widthPerc(80),
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
                fontSize: 23,
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
  componentDidMount() {
    this.navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor(Colors.primaryThemeColor);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={Colors.white}
          barStyle="dark-content"
          animated
        />
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
              onPress={() => this.props.navigation.navigate('Home')}>
              <ImageComponent
                source={Images.LogoDark}
                style={{width: undefined, height: undefined, flex: 1}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={{position: 'absolute', right: '5%'}}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('Home')}
              style={{padding: 10}}>
              <IconComponent
                type={IconType.Ionicons}
                name="ios-menu"
                style={{fontSize: 30}}
              />
            </TouchableNativeFeedback>
          </View>
        </View>
        <ImageBackground
          source={Images.memberBg}
          resizeMode="contain"
          style={{
            backgroundColor: Colors.themeBlack,
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
        </ImageBackground>
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
