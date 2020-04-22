import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Animated,
} from 'react-native';
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
import Divider from '../../components/Shared/Divider';
import {Images} from '../../assets/images';
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
class UpcomingStaysCardItem extends Component {
  constructor(props) {
    super(props);
    this.Phone = new PhoneCall();
    this.state = {
      animationValue: new Animated.Value(0),
      viewState: true,
    };
  }

  renderFooter = (props) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => this.Phone.makeCall()}
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
  };

  toggleAnimation = () => {
    if (this.state.viewState == true) {
      Animated.timing(this.state.animationValue, {
        toValue: 368,
        duration: 300,
      }).start(() => {
        this.setState({viewState: false});
      });
    } else {
      Animated.timing(this.state.animationValue, {
        toValue: 0,
        duration: 300,
      }).start(this.setState({viewState: true}));
    }
  };
  render() {
    const {data, type, navigation} = this.props;

    const height = this.state.animationValue;

    return (
      <View
        style={{
          minHeight: heightPerc(30),
          backgroundColor: Colors.white,
          width: '100%',
          borderRadius: 5,
          elevation: 5,
          overflow: 'hidden',
          marginBottom: 10,
        }}>
        <Ripple onPress={this.toggleAnimation} style={{flex: 1}}>
          <View
            style={{flex: 8, borderRadius: 5, overflow: 'hidden', height: 150}}>
            <View style={{flex: 1}}>
              <ImageComponent
                source={data.image}
                style={{flex: 1, width: undefined, height: undefined}}
              />
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
              <View style={{flex: 3, alignItems: 'flex-end'}}>
                <TextComponent
                  style={{fontSize: 25, color: Colors.white}}
                  type={FontType.BOLD}>
                  {data.price}
                </TextComponent>
                <OfferVal org={data.prePrice} off={data.off} />
              </View>
            </View>
          </View>
        </Ripple>
        <Animated.View style={{height: height, backgroundColor: 'red'}}>
          <View
            style={{
              // height: 100,
              backgroundColor: Colors.white,
              // borderRadius: 8,
              paddingVertical: 10,
              paddingHorizontal: 20,
              //   flex: 1,
            }}>
            <View style={{paddingBottom: 20}}>
              <View
                style={{
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
                    Bronze King
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

              <View style={{width: '100%', position: 'absolute', bottom: 0}}>
                <Divider style={{backgroundColor: Colors.accDividerColor}} />
              </View>
            </View>
            <View style={{paddingVertical: 20, paddingTop: 10}}>
              <View
                style={{
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
                  height: 80,
                  borderWidth: 1,
                  borderColor: Colors.accDividerColor,
                  borderRadius: 5,
                  overflow: 'hidden',
                }}>
                <View style={{flex: 3, borderRadius: 5, overflow: 'hidden'}}>
                  <ImageComponent source={Images.rm2} />
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
            <View style={{paddingVertical: 20, paddingTop: 10}}>
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
                    Dates:
                  </TextComponent>
                  <TextComponent>Mar 28-29</TextComponent>
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
        </Animated.View>
        <View style={{height: 60, backgroundColor: Colors.white}}>
          {this.renderFooter()}
        </View>
      </View>
    );
  }
}
export default UpcomingStaysCardItem;
