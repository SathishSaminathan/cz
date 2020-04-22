import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  ScrollView,
  StatusBar,
  ImageBackground,
  Linking,
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
import Divider from '../../components/Shared/Divider';

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

const datas = [
  {
    name: 'Order Your Food',
    lists: [
      {
        image: Images.ubereats,
        text: 'GET 50% OFF',
        app: 'https://ubereats.com/ul/',
      },
      {
        image: Images.doordash,
        text: 'GET 1K POINTS',
      },
      {
        image: Images.post,
        text: 'GET 50% OFF',
        app: 'https://postmates.onelink.me',
      },
      {
        image: Images.grub,
        text: 'GET 50% OFF',
        app: 'https://www.grubhub.com/',
      },
    ],
  },
  {
    name: 'Reserve a table',
    lists: [
      {
        image: Images.opentable,
        text: 'EARN 1K POINTS',
        app: 'https://www.opentable.com',
      },
    ],
  },
];
const OrderYourFood = (props) => (
  <View style={{flex: 1, backgroundColor: Colors.white}}>
    {/* <HeaderComponent {...props} hasBack isDark twoOnly>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconComponent
          type={IconType.MaterialCommunityIcons}
          name="food"
          style={{fontSize: 20, color: Colors.white, paddingRight: 5}}
        />
        <TextComponent style={{fontSize: 25, color: Colors.white}}>
          Order Your Food
        </TextComponent>
      </View>
    </HeaderComponent> */}
    <StatusBar backgroundColor={Colors.themeBlack} barStyle="light-content" />
    <ImageBackground
      source={Images.orderfood}
      style={{height: 120, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => props.navigation.goBack()}
        style={{position: 'absolute', left: 10, top: 20}}>
        <IconComponent
          type={IconType.AntDesign}
          name="left"
          style={{color: Colors.white, fontSize: 20}}
        />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconComponent
          type={IconType.MaterialCommunityIcons}
          name="food"
          style={{fontSize: 20, color: Colors.white, paddingRight: 5}}
        />
        <TextComponent style={{fontSize: 25, color: Colors.white}}>
          Order Your Food
        </TextComponent>
      </View>
    </ImageBackground>

    <ScrollView style={{flex: 1, paddingVertical: 10}}>
      {datas.map((data, i) => (
        <View key={i} style={{width: widthPerc(95), alignSelf: 'center'}}>
          <TextComponent
            type={FontType.BOLD}
            style={{
              fontSize: 17,
              paddingVertical: 10,
              textDecorationLine: 'underline',
            }}>
            {data.name}
          </TextComponent>
          {data.lists.map((list, i) => (
            <View
              key={i}
              style={{
                height: 58,
                elevation: 5,
                backgroundColor: Colors.white,
                marginBottom: 10,
                borderRadius: 5,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ImageComponent
                  source={list.image}
                  resizeMode="contain"
                  style={{height: '50%'}}
                />
              </View>
              <View
                style={{
                  flex: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{width: '80%'}}>
                  <ButtonComponent
                    onPress={() => list.app && Linking.openURL(list.app)}
                    style={{
                      backgroundColor:
                        data.name === 'Reserve a table'
                          ? Colors.orderRed
                          : Colors.themeBlack,
                      fontSize: 12,
                      color: Colors.white,
                      elevation: 0,
                    }}>
                    {list.text}
                  </ButtonComponent>
                </View>
              </View>
            </View>
          ))}
          {datas.length !== i + 1 && (
            <View style={{width: '100%', paddingTop: 10}}>
              <Divider />
            </View>
          )}
        </View>
      ))}
      <PoweredBY />
    </ScrollView>
  </View>
);

export default OrderYourFood;
