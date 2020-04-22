import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Colors} from '../../constants/ThemeConstants';
import HeaderComponent from '../../components/Shared/HeaderComponent';
import TextComponent from '../../components/Shared/TextComponent';
import {FontType, IconType} from '../../constants/AppConstants';
import ImageComponent from '../../components/Shared/ImageComponent';
import {Images} from '../../assets/images';
import IconComponent from '../../components/Shared/IconComponent';
import PoweredBY from '../../components/Shared/PoweredBy';
import PhoneCall from '../../components/Shared/PhoneCall';
import Ripple from 'react-native-material-ripple';

const data = [
  {
    pno: '+1-615-622-0600',
    desc:
      'United States and Canada, including Puerto Rico and the US Virgin Islands (toll-free)',
  },
  {
    pno: '+1-615-622-0600',
    desc: 'International Free Number (UIFN)',
  },
];
const MakeReservation = (props) => {
  const Call = new PhoneCall();
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <HeaderComponent {...props} hasBack isDark>
        <ImageComponent
          source={Images.Logo}
          style={{width: 120, height: 90}}
          resizeMode="contain"
        />
      </HeaderComponent>
      <View style={{padding: 20, paddingVertical: 10}}>
        <TextComponent style={{fontSize: 22}} type={FontType.BOLD}>
          Make or modify a reservation
        </TextComponent>
        <View style={{paddingVertical: 5}}>
          {data.map((data, i) => (
            <Ripple
              onPress={() => Call.makeCall(data.pno)}
              key={i}
              style={{
                marginBottom: 5,
              }}>
              <TouchableOpacity
                onPress={() => Call.makeCall()}
                style={{
                  borderWidth: 0.5,
                  borderColor: Colors.staysIcon,
                  borderRadius: 5,
                  flexDirection: 'row',
                  paddingRight: 8,
                  paddingVertical: 10,
                }}>
                <View
                  style={{
                    flex: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <IconComponent
                    type={IconType.MaterialCommunityIcons}
                    name="phone"
                    style={{fontSize: 25}}
                  />
                </View>
                <View style={{flex: 8}}>
                  <View>
                    <TextComponent style={{fontSize: 17}}>
                      {data.pno}
                    </TextComponent>
                  </View>
                  <TextComponent style={{color: Colors.searchText}}>
                    {data.desc}
                  </TextComponent>
                </View>
              </TouchableOpacity>
            </Ripple>
          ))}
        </View>
      </View>
      <PoweredBY />
    </View>
  );
};

export default MakeReservation;
