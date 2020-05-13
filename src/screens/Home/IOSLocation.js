import React from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {Colors} from '../../constants/ThemeConstants';
import IconComponent from '../../components/Shared/IconComponent';
import PoweredBy from '../../components/Shared/PoweredBy';
import {IconType, FontType} from '../../constants/AppConstants';
import TextComponent from '../../components/Shared/TextComponent';
import TextInputComponent from '../../components/Shared/TextInputComponent';
import Divider from '../../components/Shared/Divider';
import {StatusBarHeight} from '../../helpers/styleHelper';

const IOSLocation = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: Platform.OS === 'ios' ? StatusBarHeight : 0,
      }}>
      <View style={{flexDirection: 'row', height: 60}}>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 5,
            paddingLeft: 15,
            alignItems: 'center',
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 5,
              paddingHorizontal: 22,
              backgroundColor: 'rgba(118,118,128,0.12)',
              alignItems: 'center',
              borderRadius: 10,
              flex: 7,
            }}>
            <IconComponent
              style={{
                color: Colors.staysIcon,
                fontSize: 20,
                paddingRight: 10,
              }}
              type={IconType.AntDesign}
              name="search1"
            />
            <TextInputComponent
              style={{margin: 0, fontSize: 16}}
              placeholder="Search your Location"
            />
          </View>
          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => props.navigation.goBack()}>
              <TextComponent
                type={FontType.BOLD}
                style={{fontSize: 17, color: Colors.cancelblue}}>
                Cancel
              </TextComponent>
            </TouchableOpacity>
          </View>
          {/* <Divider style={{ height: 1, width: "90%", alignSelf: "center" }} /> */}
        </View>
      </View>
      <ScrollView>
        {[
          'Nashville, TN',
          'Berlin',
          'London, United Kingdom',
          // 'Nashville, TN',
          // 'Berlin',
          // 'London, United Kingdom',
          // 'Nashville, TN',
          // 'Berlin',
          // 'London, United Kingdom',
          // 'Nashville, TN',
          // 'Berlin',
          // 'London, United Kingdom',
        ].map((v, i) => (
          // <TouchableNativeFeedback
          //   key={i}
          //   onPress={() => {
          //     v == "Nashville, TN" && props.setLocationName(v);
          //   }}
          // >
          <TouchableOpacity
            key={i}
            onPress={() => {
              // v == 'Nashville, TN' && props.changeRoute(1);
              v == 'Nashville, TN' && props.navigation.navigate('IOSDate');
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 20,
                paddingHorizontal: 22,
                alignItems: 'center',
              }}>
              <IconComponent
                style={{
                  color: Colors.staysIcon,
                  fontSize: 20,
                  paddingRight: 15,
                }}
                type={IconType.Entypo}
                name="back-in-time"
              />
              <TextComponent type={FontType.BOLD} style={{fontSize: 16}}>
                {v}
              </TextComponent>
            </View>
            <Divider style={{height: 1, width: '90%', alignSelf: 'center'}} />
          </TouchableOpacity>
          // </TouchableNativeFeedback>
        ))}
        <PoweredBy />
      </ScrollView>
    </View>
  );
};

export default IOSLocation;
