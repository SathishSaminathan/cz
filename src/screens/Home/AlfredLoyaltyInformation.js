import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  ScrollView,
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
import ButtonComponent from '../../components/Shared/ButtonComponent';
import {widthPerc} from '../../helpers/styleHelper';
import Ripple from 'react-native-material-ripple';

const data = [
  {
    label: 'Alfred Loyalty',
    value: '2316675278',
  },
  {
    label: 'Current Status',
    value: 'Gold Member',
  },
  {
    label: 'Total Points',
    value: '1500',
  },
  {
    label: 'Member Since',
    value: '2316675278',
  },
];
const AlfredLoyaltyInformation = (props) => (
  <View style={{flex: 1, backgroundColor: Colors.white}}>
    <HeaderComponent {...props} hasBack isDark twoOnly>
      <TextComponent style={{fontSize: 25, color: Colors.white}}>
        Alfred Loyalty Information
      </TextComponent>
    </HeaderComponent>
    <ScrollView style={{flex: 1}}>
      <View style={{width: widthPerc(95), paddingTop: 10, alignSelf: 'center'}}>
        <View
          style={{
            backgroundColor: Colors.white,
            borderRadius: 5,
            overflow: 'hidden',
            elevation: 10,
          }}>
          <ImageComponent
            style={{height: 200, width: '100%'}}
            source={Images.loyalityInfo}
          />
          <TextComponent
            style={{
              position: 'absolute',
              fontSize: 40,
              color: Colors.white,
              alignSelf: 'center',
              top: '35%',
            }}>
            Alfred
          </TextComponent>
          <TextComponent
            style={{
              position: 'absolute',
              fontSize: 15,
              color: Colors.white,
              alignSelf: 'center',
              bottom: 8,
            }}>
            GOLD MEMBER
          </TextComponent>
        </View>
        <TextComponent
          style={{paddingTop: 15, textAlign: 'center', fontSize: 26}}
          type={FontType.SEMIBOLD}>
          John Thompson
        </TextComponent>
        <View style={{paddingHorizontal: 15}}>
          {data.map((data, i) => (
            <View
              key={i}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                borderBottomColor: Colors.accDividerColor,
                paddingVertical: 10,
              }}>
              <TextComponent style={{fontSize: 16}}>{data.label}</TextComponent>
              <TextComponent style={{color: '#938A8C', fontSize: 16}}>
                {data.value}
              </TextComponent>
            </View>
          ))}
        </View>
        <View style={{alignItems: 'center', paddingTop: 20}}>
          <View style={{width: widthPerc(80)}}>
            <View style={{flexDirection: 'row'}}>
              <Ripple
                style={{
                  backgroundColor: Colors.themeBlack,
                  height: 40,
                  width: '49%',
                  borderRadius: 5,
                  overflow: 'hidden',
                  marginRight: 5,
                }}
                borderRadius={5}>
                <ImageComponent
                  source={Images.applewallet}
                  resizeMode="contain"
                />
              </Ripple>
              <View style={{width: '49%'}}>
                <ButtonComponent
                  style={{
                    backgroundColor: '#000',
                    fontSize: 14,
                    color: Colors.white,
                    height: 40,
                    elevation: 0,
                  }}>
                  Save to phone
                </ButtonComponent>
              </View>
            </View>
            <View style={{flex: 1, paddingTop: 10}}>
              <TextComponent
                style={{textAlign: 'center', color: Colors.searchText}}>
                Total Points updated 03 Apr 2020. Please allow up to 48 hours to
                see updated account information.
              </TextComponent>
            </View>
          </View>
        </View>
        <PoweredBY />
      </View>
    </ScrollView>
  </View>
);

export default AlfredLoyaltyInformation;
