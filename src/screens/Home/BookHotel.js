import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import ImageComponent from '../../components/Shared/ImageComponent';
import {Images} from '../../assets/images';
import IconComponent from '../../components/Shared/IconComponent';
import {IconType, FontType} from '../../constants/AppConstants';
import {Colors} from '../../constants/ThemeConstants';
import TextComponent from '../../components/Shared/TextComponent';
import {AirbnbRating} from 'react-native-ratings';
import Divider from '../../components/Shared/Divider';
import {ReadmoreComponent} from '../../components/Shared/ReadmoreComponent';
import ButtonComponent from '../../components/Shared/ButtonComponent';
import PoweredBY from '../../components/Shared/PoweredBy';
import {CommonActions} from '@react-navigation/native';

const data = [
  {
    name: 'AC',
    images: 'card-outline',
  },
  {
    name: 'Wifi',
    images: 'wifi',
  },
  {
    name: 'TV',
    images: 'television',
  },
  {
    name: 'Bed',
    images: 'bed-empty',
  },
];

export default class BookHotel extends Component {
  render() {
    const roomName = this.props.route.params.roomName;
    const date = this.props.route.params.date;
    const image = this.props.route.params.image;
    return (
      <ScrollView style={{flex: 1, backgroundColor: Colors.white}}>
        <View style={{width: '100%', height: 250}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              color: Colors.white,
              position: 'absolute',
              left: 5,
              zIndex: 1,
              fontSize: 15,
              top: 5,
              padding: 10,
              paddingTop: 15,
            }}>
            <IconComponent
              type={IconType.AntDesign}
              name="left"
              style={{
                color: Colors.white,
                fontSize: 15,
              }}
            />
          </TouchableOpacity>
          <ImageComponent source={Images.hotel} />
        </View>
        <View
          style={{
            // height: 100,
            backgroundColor: Colors.white,
            borderRadius: 8,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}>
          <View style={{flex: 1, paddingBottom: 20}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flex: 7}}>
                <TextComponent
                  style={{
                    fontSize: 19,
                  }}
                  type={FontType.BOLD}>
                  {/* Bronze King */}
                  Dream Hotel, Nashville
                </TextComponent>
              </View>
              <View
                style={{flex: 3, flexDirection: 'row', alignItems: 'center'}}>
                <TextComponent style={{paddingRight: 5}}>4/5</TextComponent>
                <AirbnbRating
                  showRating={false}
                  starContainerStyle={{
                    alignSelf: 'flex-start',
                    paddingRight: 10,
                  }}
                  count={5}
                  defaultRating={4}
                  size={10}
                  isDisabled
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', paddingVertical: 8}}>
              <IconComponent
                type={IconType.MaterialCommunityIcons}
                name="map-marker-outline"
                style={{paddingRight: 3}}
              />
              <TextComponent style={{fontSize: 12, color: Colors.searchText}}>
                210 4th Avenue North Nashville TN 37219,
              </TextComponent>
              {/* <TextComponent style={{fontSize: 12, color: Colors.searchText}}>
                2km Away
              </TextComponent> */}
            </View>
            <TouchableOpacity
              style={{
                width: 37,
                height: 15,
                borderRadius: 9,
                backgroundColor: Colors.themeBlack,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TextComponent style={{fontSize: 9, color: Colors.white}}>
                Map
              </TextComponent>
            </TouchableOpacity>
            <View style={{width: '100%', position: 'absolute', bottom: 0}}>
              <Divider style={{backgroundColor: Colors.accDividerColor}} />
            </View>
          </View>
          <View style={{flex: 1, paddingVertical: 20, paddingTop: 10}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flex: 7}}>
                <TextComponent
                  style={{
                    fontSize: 15,
                  }}
                  type={FontType.BOLD}>
                  Map
                </TextComponent>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                height: 130,
                borderWidth: 1,
                borderColor: Colors.accDividerColor,
                borderRadius: 5,
                overflow: 'hidden',
              }}>
              <View style={{flex: 4, borderRadius: 5, overflow: 'hidden'}}>
                <ImageComponent source={Images.group16} />
              </View>
              <View
                style={{flex: 6, justifyContent: 'center', paddingLeft: 10}}>
                <TextComponent type={FontType.BOLD}>
                  210 4th Avenue North Nashville TN 37219
                </TextComponent>
                <View style={{flexDirection: 'row', paddingVertical: 5}}>
                  <IconComponent
                    type={IconType.MaterialCommunityIcons}
                    name="phone-in-talk"
                    style={{paddingRight: 5}}
                  />
                  <TextComponent
                    type={FontType.BOLD}
                    style={{color: Colors.searchText}}>
                    +1-615-622-0600
                  </TextComponent>
                </View>
              </View>
            </View>
            <TextComponent style={{fontSize: 11, paddingTop: 5}}>
              A daily destination amenity fee USD 17 will be added to the room
              rate
            </TextComponent>
            <View style={{width: '100%', position: 'absolute', bottom: 0}}>
              <Divider style={{backgroundColor: Colors.accDividerColor}} />
            </View>
          </View>
          <View style={{flex: 1, paddingVertical: 20, paddingTop: 10}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flex: 7}}>
                <TextComponent
                  style={{
                    fontSize: 15,
                  }}
                  type={FontType.BOLD}>
                  Stay Information
                </TextComponent>
              </View>
            </View>
            <View
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: Colors.accordionBorderColor,
                borderRadius: 5,
                marginTop: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <TextComponent type={FontType.BOLD} style={{paddingRight: 5}}>
                  Room Name:
                </TextComponent>
                <TextComponent>{roomName}</TextComponent>
              </View>
              <View style={{flexDirection: 'row', paddingTop: 5}}>
                <TextComponent type={FontType.BOLD} style={{paddingRight: 5}}>
                  Dates:
                </TextComponent>
                <TextComponent>{date}</TextComponent>
              </View>
              <View style={{flexDirection: 'row', paddingVertical: 5}}>
                <TextComponent type={FontType.BOLD} style={{paddingRight: 5}}>
                  Options:
                </TextComponent>
                <TextComponent>1 Room, 1 Guest, Std. Rate</TextComponent>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextComponent type={FontType.BOLD} style={{paddingRight: 5}}>
                  Total for Stay:
                </TextComponent>
                <TextComponent type={FontType.BOLD}>$ 125</TextComponent>
              </View>
            </View>
            <View style={{width: '100%', position: 'absolute', bottom: 0}}>
              <Divider style={{backgroundColor: Colors.accDividerColor}} />
            </View>
          </View>
        </View>

        <View style={{width: '90%', alignSelf: 'center'}}>
          <ButtonComponent
            onPress={() =>
              this.props.navigation.navigate('AddCardStack', {
                roomName,
                date,
              })
            }
            borderRadius={50}
            style={{
              backgroundColor: Colors.themeBlack,
              fontSize: 17,
              color: Colors.white,
            }}>
            Book Now
          </ButtonComponent>
        </View>
        <PoweredBY />
      </ScrollView>
    );
  }
}
