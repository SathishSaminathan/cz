import React from 'react';
import {View, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

import ImageComponent from '../../components/Shared/ImageComponent';
import IconComponent from '../../components/Shared/IconComponent';
import {Colors} from '../../constants/ThemeConstants';
import {heightPerc} from '../../helpers/styleHelper';
import TextComponent from '../../components/Shared/TextComponent';
import {IconType, FontType, Stays} from '../../constants/AppConstants';
import PhoneCall from '../../components/Shared/PhoneCall';
import OfferVal from '../../components/Shared/OfferVal';
import Ripple from 'react-native-material-ripple';

const StaysCardItem = ({data, type, navigation, route}) => {
  const Phone = new PhoneCall();
  const iconMap = {
    Home: 'home',
    ['Book Again']: 'calendar-outline',
    Receipt: 'file-document-outline',
    Feedback: 'message-text-outline',
    ['Call Hotel']: 'phone-in-talk',
    Offers: 'tag-outline',
    Settings: 'settings',
    Fashion: 'layout',
    Beauty: 'instagram',
    Bookings: 'message-square',
    Notifications: 'bell',
  };

  const renderFooter = (props) => {
    switch (type) {
      case Stays.UPCOMING:
        return (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => Phone.makeCall()}
            style={{
              alignItems: 'center',
              flex: 1,
            }}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <IconComponent
                type={IconType.MaterialCommunityIcons}
                name="phone-in-talk"
                style={{color: Colors.staysIcon, marginRight: 10, fontSize: 20}}
              />
              <TextComponent
                style={{fontSize: 15, color: Colors.tabText}}
                type={FontType.BOLD}>
                Call Hotel
              </TextComponent>
            </View>
          </TouchableOpacity>
        );

      case Stays.PAST:
        return (
          <View style={{flexDirection: 'row', flex: 1}}>
            {['Book Again', 'Receipt', 'Feedback', 'Call Hotel'].map((v, i) => (
              <View style={{flex: 1}} key={i}>
                <TouchableNativeFeedback
                  delayPressIn={0}
                  onPress={() =>
                    v === 'Call Hotel'
                      ? Phone.makeCall()
                      : v === 'Feedback' && navigation.navigate('Feedback')
                  }>
                  <View
                    style={[
                      {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                    ]}>
                    <IconComponent
                      type={IconType.MaterialCommunityIcons}
                      name={iconMap[v]}
                      style={{fontSize: 20, color: Colors.staysIcon}}
                      // color={isFocused ? Colors.darkGrey : Colors.lightGrey}
                    />
                    <TextComponent style={{fontSize: 13}}>{v}</TextComponent>
                  </View>
                </TouchableNativeFeedback>
              </View>
            ))}
          </View>
        );

      default:
        return (
          <View style={{flexDirection: 'row', flex: 1}}>
            {['Book Again', 'Call Hotel'].map((v, i) => (
              <View style={{flex: 1}} key={i}>
                <TouchableNativeFeedback
                  delayPressIn={0}
                  onPress={() => v === 'Call Hotel' && Phone.makeCall()}>
                  <View
                    style={[
                      {
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                    ]}>
                    <IconComponent
                      type={IconType.MaterialCommunityIcons}
                      name={iconMap[v]}
                      style={{
                        fontSize: 20,
                        color: Colors.staysIcon,
                        paddingRight: 10,
                      }}
                      // color={isFocused ? Colors.darkGrey : Colors.lightGrey}
                    />
                    <TextComponent style={{fontSize: 14}} type={FontType.BOLD}>
                      {v}
                    </TextComponent>
                  </View>
                </TouchableNativeFeedback>
              </View>
            ))}
          </View>
        );
    }
  };
  return (
    <View
      style={{
        height: heightPerc(30),
        backgroundColor: Colors.white,
        width: '100%',
        borderRadius: 5,
        elevation: 5,
        overflow: 'hidden',
        marginBottom: 10,
      }}>
      <View style={{flex: 8, borderRadius: 5, overflow: 'hidden'}}>
        <Ripple
          onPress={() =>
            // data.name === 'Bronze King' &&
            navigation.navigate('HotelDetails', {
              roomName: data.name,
              image: data.image,
              date: (route.params && route.params.date) || '14/4',
            })
          }
          style={{flex: 1}}>
          <View style={{flex: 1}}>
            <ImageComponent
              source={data.image}
              style={{flex: 1, width: undefined, height: undefined}}
            />
            <View
              style={{
                position: 'absolute',
                flexDirection: 'row',
                paddingHorizontal: 30,
                paddingLeft: 15,
                flex: 1,
                //   backgroundColor: 'red',
                bottom: 5,
              }}>
              <View style={{flex: 7}}>
                <TextComponent
                  style={{fontSize: 15, color: Colors.white}}
                  type={FontType.BOLD}>
                  {data.name}
                </TextComponent>
                <View style={{flexDirection: 'row'}}>
                  <IconComponent
                    type={IconType.MaterialCommunityIcons}
                    name="map-marker-outline"
                    style={{color: Colors.white, paddingRight: 5}}
                  />
                  <TextComponent
                    style={{fontSize: 12, color: Colors.searchText}}>
                    {data.location}
                  </TextComponent>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <AirbnbRating
                    showRating={false}
                    starContainerStyle={{
                      alignSelf: 'flex-start',
                      paddingRight: 10,
                    }}
                    count={5}
                    defaultRating={data.reviewValue}
                    size={10}
                    isDisabled
                  />
                  <TextComponent style={{fontSize: 13, color: Colors.white}}>
                    {data.totalReviews}
                  </TextComponent>
                </View>
              </View>
              {type !== Stays.PAST && (
                <View style={{flex: 3, alignItems: 'flex-end'}}>
                  <TextComponent
                    style={{fontSize: 25, color: Colors.white}}
                    type={FontType.BOLD}>
                    {data.price}
                  </TextComponent>
                  <OfferVal org={data.prePrice} off={data.off} />
                </View>
              )}
            </View>
          </View>
        </Ripple>
      </View>
      <View style={{flex: 3, backgroundColor: Colors.white}}>
        {renderFooter()}
      </View>
    </View>
  );
};
export default StaysCardItem;
