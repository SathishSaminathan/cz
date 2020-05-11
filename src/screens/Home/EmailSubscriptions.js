import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {Colors} from '../../constants/ThemeConstants';
import HeaderComponent from '../../components/Shared/HeaderComponent';
import TextComponent from '../../components/Shared/TextComponent';
import {FontType, IconType} from '../../constants/AppConstants';
import ImageComponent from '../../components/Shared/ImageComponent';
import {Images} from '../../assets/images';
import IconComponent from '../../components/Shared/IconComponent';
import SwitchComponent from '../../components/Shared/SwitchComponent';
import PoweredBY from '../../components/Shared/PoweredBy';
import Ripple from 'react-native-material-ripple';

const data = [
  {
    title: 'Fingerprint',
    icon: 'home-outline',
    desc: 'Use Fingerprint to sign in to your Dream account.',
    enabled: true,
  },
  {
    title: 'Face Recognition',
    icon: 'television',
    desc: 'Use Face recognition feature to sign in to your Dream account.',
  },
  {
    title: 'Extra Security',
    icon: 'television',
    desc:
      "You can require Fingerprint after a set time, even while you're already signed in.",
  },
];
const EmailSubscriptions = (props) => (
  <View style={{flex: 1, backgroundColor: Colors.white}}>
    <HeaderComponent {...props} hasBack isDark>
      <TextComponent style={{fontSize: 23, color: Colors.white}}>
        Email subscriptions
      </TextComponent>
    </HeaderComponent>
    <View style={{padding: 15}}>
      <TextComponent style={{color: Colors.textBlack}}>
        To ensure we send you information and offers for areas which you are
        interested, please fill in your details.
      </TextComponent>
      <TextComponent
        style={{paddingTop: 15, fontSize: 16}}
        type={FontType.BOLD}>
        Dream Hotel News and Information
      </TextComponent>
      <View style={{paddingVertical: 5}}>
        <Ripple>
          <View
            style={{
              borderTopWidth: 0.5,
              borderTopColor: Colors.staysIcon,
              borderRadius: 5,
              flexDirection: 'row',
              paddingRight: 8,
              height: 60,
              // marginBottom: 5,
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <View style={{flex: 7}}>
              <TextComponent style={{fontSize: 14, paddingBottom: 5}}>
                Dream Hotel Monthly Statement
              </TextComponent>
            </View>
            <View style={{flex: 2, alignItems: 'center'}}>
              <SwitchComponent status={true}></SwitchComponent>
            </View>
          </View>
        </Ripple>
        <Ripple>
          <View
            style={{
              borderTopWidth: 0.5,
              borderTopColor: Colors.staysIcon,
              borderRadius: 5,
              flexDirection: 'row',
              paddingRight: 8,
              height: 60,
              // marginBottom: 5,
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <View style={{flex: 7}}>
              <TextComponent style={{fontSize: 14, paddingBottom: 5}}>
                Dream Hotel Special News & Announcement
              </TextComponent>
            </View>
            <View style={{flex: 2, alignItems: 'center'}}>
              <SwitchComponent status={false}></SwitchComponent>
            </View>
          </View>
        </Ripple>
        <Ripple>
          <View
            style={{
              borderTopWidth: 0.5,
              borderTopColor: Colors.staysIcon,
              borderRadius: 5,
              flexDirection: 'row',
              paddingRight: 8,
              height: 60,
              // marginBottom: 5,
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <View style={{flex: 7}}>
              <TextComponent style={{fontSize: 14, paddingBottom: 5}}>
                Unsubscribe
              </TextComponent>
            </View>
            <View style={{flex: 2, alignItems: 'center'}}>
              <IconComponent type={IconType.AntDesign} name="right" />
            </View>
          </View>
        </Ripple>
      </View>
    </View>
    <PoweredBY />
  </View>
);

export default EmailSubscriptions;
