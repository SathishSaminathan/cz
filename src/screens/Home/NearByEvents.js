import React from 'react';
import {Text, View, ScrollView, TouchableNativeFeedback} from 'react-native';
import {Colors} from '../../constants/ThemeConstants';
import {widthPerc, heightPerc} from '../../helpers/styleHelper';
import PoweredBY from '../../components/Shared/PoweredBy';
import ImageComponent from '../../components/Shared/ImageComponent';
import {Images} from '../../assets/images';
import Ripple from 'react-native-material-ripple';
import IconComponent from '../../components/Shared/IconComponent';
import TextComponent from '../../components/Shared/TextComponent';
import {FontType, IconType} from '../../constants/AppConstants';

const data = [
  {
    name: 'DJ sound, Max',
    location: '210 4th Avenue North Nashville TN 37219',
    image: Images.group3,
  },
  {
    name: 'Music Event',
    location: '210 4th Avenue North Nashville TN 37219',
    image: Images.group4,
  },
  {
    name: 'Music Event',
    location: '210 4th Avenue North Nashville TN 37219',
    image: Images.group5,
  },
  {
    name: 'DJ sound, Max',
    location: '210 4th Avenue North Nashville TN 37219',
    image: Images.event4,
  },
];

const NearByEvents = ({params}) => {
  const renderCards = () => {
    return data.map((data, i) => (
      <Ripple key={i}>
        <View
          style={{
            width: '100%',
            height: 152,
            backgroundColor: Colors.red,
            marginTop: 10,
            borderRadius: 5,
            overflow: 'hidden',
          }}>
          <View style={{flex: 1}}>
            <ImageComponent source={data.image} />
          </View>
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
                  style={{color: Colors.white, paddingRight: 5, fontSize: 12}}
                />
                <TextComponent style={{fontSize: 12, color: Colors.searchText}}>
                  {data.location}
                </TextComponent>
              </View>
            </View>
          </View>
        </View>
      </Ripple>
    ));
  };
  return (
    <ScrollView
      style={{
        backgroundColor: Colors.staysBackground,
        flex: 1,
        paddingHorizontal: 10,
      }}>
      {renderCards()}
      <PoweredBY />
    </ScrollView>
  );
};

export default NearByEvents;
