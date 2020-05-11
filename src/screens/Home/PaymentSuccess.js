import React from 'react';
import {View, ScrollView, Dimensions, ImageBackground} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import ButtonComponent from '../../components/Shared/ButtonComponent';
import ImageComponent from '../../components/Shared/ImageComponent';
import {Colors} from '../../constants/ThemeConstants';
import {heightPerc, widthPerc} from '../../helpers/styleHelper';
import {Images} from '../../assets/images';
import TextComponent from '../../components/Shared/TextComponent';
import {FontType, IconType} from '../../constants/AppConstants';
import IconComponent from '../../components/Shared/IconComponent';

const MONEY_DIMENSIONS = {width: 49, height: 26};
const SCREEN_DIMENSIONS = Dimensions.get('window');
const WIGGLE_ROOM = 50;

const FlippingImage = ({
  back = false,
  delay,
  duration = 1000,
  source,
  style = {},
}) => (
  <Animatable.Image
    animation={{
      from: {
        rotateX: back ? '0deg' : '180deg',
        rotate: !back ? '180deg' : '0deg',
      },
      to: {
        rotateX: back ? '360deg' : '-180deg',
        rotate: !back ? '180deg' : '0deg',
      },
    }}
    duration={duration}
    delay={delay}
    easing="linear"
    iterationCount="infinite"
    useNativeDriver
    source={source}
    style={{
      ...style,
      backfaceVisibility: 'hidden',
      width: 20,
      height: 10,
    }}
  />
);

const Swinging = ({
  amplitude,
  rotation = 10,
  delay,
  duration = 700,
  children,
}) => (
  <Animatable.View
    animation={{
      0: {
        translateX: -amplitude,
        translateY: -amplitude * 0.8,
        rotate: `${rotation}deg`,
      },
      0.5: {
        translateX: 0,
        translateY: 0,
        rotate: '0deg',
      },
      1: {
        translateX: amplitude,
        translateY: -amplitude * 0.8,
        rotate: `${-rotation}deg`,
      },
    }}
    delay={delay}
    duration={duration}
    direction="alternate"
    easing="ease-in-out"
    iterationCount="infinite"
    useNativeDriver>
    {children}
  </Animatable.View>
);

const Falling = ({duration, delay, style, children}) => (
  <Animatable.View
    animation={{
      from: {translateY: -MONEY_DIMENSIONS.height - WIGGLE_ROOM},
      to: {translateY: SCREEN_DIMENSIONS.height + WIGGLE_ROOM},
    }}
    duration={duration}
    delay={delay}
    easing={(t) => Math.pow(t, 1.7)}
    iterationCount="infinite"
    useNativeDriver
    style={style}>
    {children}
  </Animatable.View>
);

const ErlichBachman = ({children}) => (
  <View source={Images.erlich} style={{flex: 1}}>
    {children}
    <View
      style={{
        flex: 1,
      }}>
      <View style={{flex: 9, alignItems: 'center'}}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <View style={{height: 85, width: 85}}>
            <ImageComponent source={Images.payment} resizeMode="contain" />
          </View>
          <TextComponent
            style={{fontSize: 23, paddingVertical: 10}}
            type={FontType.BOLD}>
            Payment Completed
          </TextComponent>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{
            width: '88%',
            backgroundColor: 'white',
            borderRadius: 6,
            elevation: 10,
            paddingVertical: 25,
            alignItems: 'center',
          }}>
          <View style={{width: '85%'}}>
            <TextComponent style={{fontSize: 19}} type={FontType.BOLD}>
              Gold King Room, Dream Hotels
            </TextComponent>
            <View style={{flexDirection: 'row', paddingVertical: 5}}>
              <IconComponent
                type={IconType.MaterialCommunityIcons}
                name="map-marker-outline"
                style={{paddingRight: 5}}
              />
              <TextComponent style={{color: Colors.searchText}}>
                210 4th Avenue North Nashville TN 37219,
              </TextComponent>
            </View>
            <View style={{flexDirection: 'row'}}>
              <IconComponent
                type={IconType.MaterialCommunityIcons}
                name="clock-outline"
                style={{paddingRight: 5}}
              />
              <TextComponent style={{color: Colors.searchText}}>
                18 Mar, 2020 to 20 Mar, 2020
              </TextComponent>
            </View>
          </View>
          <View style={{width: '85%', marginTop: 30}}>
            <TextComponent style={{fontSize: 19}} type={FontType.BOLD}>
              Total for stay: $ 125
            </TextComponent>
            <View style={{flexDirection: 'row', paddingVertical: 5}}>
              <TextComponent style={{color: Colors.searchText}}>
                On 16Mar, 2020 at 2:30pm
              </TextComponent>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
);

const randomize = (max) => Math.random() * max;

const range = (count) => {
  const array = [];
  for (let i = 0; i < count; i++) {
    array.push(i);
  }
  return array;
};

const PaymentSuccess = ({
  count = 30,
  duration = 3000,
  navigation,
  route: {
    params: {roomName, date},
  },
}) => {
  const BUTTON_HEIGHT = 80;
  return (
    <ImageBackground source={Images.paymentBG} style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Colors.transparent,
        }}>
        {/* <ErlichBachman>
          {range(count)
            .map(i => randomize(1000))
            .map((flipDelay, i) => (
              <Falling
                key={i}
                duration={duration}
                delay={i * (duration / count)}
                style={{
                  position: 'absolute',
                  zIndex: 2,
                  paddingHorizontal: WIGGLE_ROOM,
                  left:
                    randomize(
                      SCREEN_DIMENSIONS.width - MONEY_DIMENSIONS.width,
                    ) - WIGGLE_ROOM,
                }}>
                <Swinging
                  amplitude={MONEY_DIMENSIONS.width / 3}
                  delay={randomize(duration)}>
                  <FlippingImage source={Images.moneyFront} delay={flipDelay} />
                  <FlippingImage
                    source={Images.moneyBack}
                    delay={flipDelay}
                    back
                    style={{position: 'absolute'}}
                  />
                </Swinging>
              </Falling>
            ))}
        </ErlichBachman> */}
        <View
          style={{
            height: heightPerc(70),
            width: widthPerc(80),
            backgroundColor: Colors.themeBlack,
            borderRadius: 5,
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <View style={{flex: 4, alignItems: 'center'}}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <View style={{height: heightPerc(10), width: 150}}>
                  <ImageComponent
                    source={Images.paymentWhiteSuccess}
                    resizeMode="contain"
                  />
                </View>
                <TextComponent
                  style={{
                    fontSize: 23,
                    paddingVertical: 10,
                    paddingBottom: 0,
                    color: Colors.white,
                  }}
                  type={FontType.BOLD}>
                  Payment Completed
                </TextComponent>
                <TextComponent
                  style={{
                    // paddingVertical: 10,
                    color: Colors.searchText,
                  }}
                  type={FontType.BOLD}>
                  16Mar, 2020 at 2:30pm
                </TextComponent>
              </View>
            </View>
            <View style={{flex: 6, alignItems: 'center'}}>
              <View
                style={{
                  width: '100%',
                  backgroundColor: 'white',
                  borderRadius: 6,
                  elevation: 10,
                  paddingVertical: 25,
                  alignItems: 'center',
                  flex: 1,
                }}>
                <View style={{width: '85%'}}>
                  <TextComponent style={{fontSize: 19}} type={FontType.BOLD}>
                    {roomName}, Dream Hotels
                  </TextComponent>
                  <View style={{flexDirection: 'row', paddingVertical: 5}}>
                    <IconComponent
                      type={IconType.MaterialCommunityIcons}
                      name="map-marker-outline"
                      style={{paddingRight: 5}}
                    />
                    <TextComponent style={{color: Colors.searchText}}>
                      210 4th Avenue North Nashville TN 37219,
                    </TextComponent>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <IconComponent
                      type={IconType.MaterialCommunityIcons}
                      name="clock-outline"
                      style={{paddingRight: 5}}
                    />
                    <TextComponent style={{color: Colors.searchText}}>
                      {/* 18 Mar, 2020 to 20 Mar, 2020 */}
                      {date}
                    </TextComponent>
                  </View>
                </View>
                <View style={{width: '85%', marginTop: 30}}>
                  <TextComponent style={{fontSize: 19}} type={FontType.BOLD}>
                    Total for stay: $ 125
                  </TextComponent>
                  <View style={{flexDirection: 'row', paddingVertical: 5}}>
                    <TextComponent style={{color: Colors.searchText}}>
                      On 16Mar, 2020 at 2:30pm
                    </TextComponent>
                  </View>
                </View>
                <View style={{width: '30%', paddingTop: 30}}>
                  <ButtonComponent
                    onPress={() =>
                      navigation.dispatch(
                        CommonActions.reset({
                          index: 0,
                          routes: [{name: 'Home'}],
                        }),
                      )
                    }
                    borderRadius={50}
                    style={{
                      backgroundColor: Colors.themeBlack,
                      fontSize: 14,
                      color: Colors.white,
                      // height: 34,
                    }}>
                    Done
                  </ButtonComponent>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default PaymentSuccess;
