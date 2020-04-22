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
import PoweredBY from '../../components/Shared/PoweredBy';
import {ScrollView} from 'react-native-gesture-handler';

const data = [
  {
    icon: 'account-circle-outline',
    desc: 'Username',
    route: 'UserName',
  },
  {
    icon: 'lock-outline',
    desc: 'Password',
  },
  {
    icon: 'email-outline',
    desc: 'Email',
  },
  {
    icon: 'phone',
    desc: 'Phone',
  },
  {
    icon: 'home-outline',
    desc: 'Address',
  },
  {
    icon: 'credit-card',
    desc: 'Payment Methods',
  },
  {
    icon: 'tag-outline',
    desc: 'Special Account & Rates',
  },
  {
    icon: 'earth',
    desc: 'Preferred languages',
  },
  {
    icon: 'lock-plus',
    desc: 'Enhanced Security',
  },
];
const PersonalInformation = (props) => (
  <View style={{flex: 1, backgroundColor: Colors.white}}>
    <HeaderComponent {...props} hasBack isDark twoOnly>
      <TextComponent style={{fontSize: 25, color: Colors.white}}>
        Personal Information
      </TextComponent>
    </HeaderComponent>
    <ScrollView style={{padding: 20, paddingVertical: 10}}>
      <View style={{paddingVertical: 5}}>
        {data.map((data, i) => (
          <TouchableNativeFeedback
            key={i}
            onPress={() => data.route && props.navigation.navigate(data.route)}>
            <View
              key={i}
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: Colors.accDividerColor,
                borderRadius: 5,
                flexDirection: 'row',
                paddingRight: 8,
                height: 55,
                // marginBottom: 5,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <IconComponent
                  type={IconType.MaterialCommunityIcons}
                  name={data.icon}
                  style={{fontSize: 25, color: Colors.textBlack}}
                />
              </View>
              <View style={{flex: 7}}>
                <TextComponent
                  style={{fontSize: 16, paddingLeft: 5}}
                  type={FontType.SEMIBOLD}>
                  {data.desc}
                </TextComponent>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <IconComponent
                  type={IconType.AntDesign}
                  name={'right'}
                  style={{fontSize: 12, color: Colors.searchText}}
                />
              </View>
            </View>
          </TouchableNativeFeedback>
        ))}
      </View>
      <View
        style={{
          borderWidth: 0.5,
          padding: 8,
          paddingHorizontal:10,
          borderRadius: 5,
          marginTop: 5,
          borderColor: Colors.accordionBorderColor,
        }}>
        <TextComponent>
          Dream Hotel is committed to respecting your privacy.
        </TextComponent>
        <TextComponent>
          View our <TextComponent style={{color:"#5DB2F3"}} type={FontType.BOLD}>Global Privacy Statement</TextComponent> and
          our <TextComponent style={{color:"#5DB2F3"}} type={FontType.BOLD}>Cookie statement</TextComponent>
        </TextComponent>
      </View>
      <PoweredBY />
    </ScrollView>
  </View>
);

export default PersonalInformation;
