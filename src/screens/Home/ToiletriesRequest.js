import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

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
import ToiletryAdd from '../../components/Shared/ToiletryAdd';

class ToiletriesRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: 'Choose a timeline',
      isConfirmed: false,
      data: [
        {
          name: 'Soap',
          image: Images.soap,
          checked: true,
          count: 1,
        },
        {
          name: 'Shampoo',
          image: Images.shampoo,
          checked: false,
          count: 1,
        },
        {
          name: 'Dental Kit',
          image: Images.dentalKit,
          checked: false,
          count: 1,
        },
        {
          name: 'Comb',
          image: Images.comb,
          checked: false,
          count: 1,
        },
        {
          name: 'Shaving Kit',
          image: Images.shavingKit,
          checked: false,
          count: 1,
        },
        {
          name: 'Conditioner',
          image: Images.conditioner,
          checked: false,
          count: 1,
        },
        {
          name: 'Towel',
          image: Images.towel,
          checked: false,
          count: 1,
        },
        {
          name: 'Shower cap',
          image: Images.showerCap,
          checked: false,
          count: 1,
        },
        {
          name: 'Hair gel',
          image: Images.hairGel,
          checked: false,
          count: 1,
        },
        {
          name: 'Hair dryer',
          image: Images.hairDryer,
          checked: false,
          count: 1,
        },
        {
          name: 'Body lotion',
          image: Images.bodyLotion,
          checked: false,
          count: 1,
        },
        {
          name: 'Body scrubber',
          image: Images.bodyScrubber,
          checked: false,
          count: 1,
        },
      ],
    };
  }

  handleAddButton = (name, count) => {
    let data = this.state.data.map((data) => {
      if (data.name === name) {
        return {
          ...data,
          count,
        };
      } else {
        return data;
      }
    });
    this.setState({
      data,
    });
  };

  handleChange = (name) => {
    let data = this.state.data.map((data) => {
      if (data.name === name) {
        return {
          ...data,
          checked: !data.checked,
        };
      } else {
        return data;
      }
    });
    this.setState({
      data,
    });
  };

  render() {
    const {data, timeline, isConfirmed} = this.state;

    const selectedItems = data.filter((data) => data.checked === true);
    // console.log('selectedItems', selectedItems);
    return (
      <View style={{flex: 1, backgroundColor: Colors.white}}>
        <HeaderComponent {...this.props} hasBack isDark twoOnly>
          <TextComponent style={{fontSize: 30, color: Colors.white}}>
            Toiletries Request
          </TextComponent>
        </HeaderComponent>
        {!isConfirmed ? (
          <ScrollView style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.white,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  // backgroundColor: 'red',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  marginTop: 15,
                }}>
                {data.map((data, i) => (
                  <View
                    key={i}
                    style={{
                      width: '31.5%',
                      height: 80,
                      backgroundColor: Colors.white,
                      marginBottom: 10,
                      borderRadius: 5,
                      elevation: data.checked ? 5 : 0,
                      borderColor: '#DBDBDB',
                      borderWidth: !data.checked ? 0.8 : 0,
                      marginHorizontal: '0.9%',
                    }}>
                    <Ripple
                      onPress={() => this.handleChange(data.name)}
                      rippleContainerBorderRadius={5}
                      style={{flex: 1}}
                      rippleSize={180}>
                      <View
                        style={{
                          flex: 7,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <ImageComponent
                          source={data.image}
                          resizeMode="contain"
                          style={{height: '40%'}}
                        />
                      </View>
                      <View style={{flex: 3, alignItems: 'center'}}>
                        <TextComponent type={FontType.SEMIBOLD}>
                          {data.name}
                        </TextComponent>
                      </View>
                      <IconComponent
                        type={IconType.MaterialCommunityIcons}
                        name="check-circle"
                        style={{position: 'absolute', right: '5%', top: '5%'}}
                      />
                      {!data.checked && (
                        <View
                          style={{
                            position: 'absolute',
                            backgroundColor: Colors.white,
                            borderRadius: 5,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            opacity: 0.8,
                          }}></View>
                      )}
                    </Ripple>
                  </View>
                ))}
              </View>
              {selectedItems.length !== 0 && (
                <View
                  style={{
                    width: '93%',
                    borderWidth: 0.5,
                    borderColor: Colors.staysIcon,
                    borderRadius: 5,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    padding: 5,
                    paddingVertical: 10,
                    // justifyContent: 'center',
                    paddingBottom: 0,
                  }}>
                  {selectedItems.map((item, i) => (
                    <ToiletryAdd
                      key={i}
                      item={item}
                      handleAddButton={this.handleAddButton}
                      handleChange={this.handleChange}
                    />
                  ))}
                </View>
              )}
              <View
                style={{
                  width: '93%',
                  marginTop: 10,
                }}>
                <ModalDropdown
                  onSelect={(v, timeline) => this.setState({timeline})}
                  dropdownStyle={{
                    // backgroundColor: 'red',
                    width: '91%',
                    height: 110,
                  }}
                  dropdownTextStyle={{
                    fontFamily: 'Proxima Nova Bold',
                    fontSize: 13,
                    color: Colors.themeBlack,
                  }}
                  options={[
                    '30 minutes',
                    '1 Hour',
                    'During Room Cleaning Time',
                  ]}>
                  <View
                    style={{
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: Colors.accordionBorderColor,
                      paddingHorizontal: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <TextComponent
                      style={{
                        fontSize: 15,
                        paddingVertical: 15,
                        //   color: Colors.searchText,
                      }}>
                      {timeline}
                    </TextComponent>
                    <IconComponent type={IconType.AntDesign} name="down" />
                  </View>
                </ModalDropdown>
              </View>
              <View style={{width: '95%'}}>
                <ButtonComponent
                  onPress={() => this.setState({isConfirmed: true})}
                  borderRadius={50}
                  style={{
                    backgroundColor: Colors.themeBlack,
                    color: Colors.white,
                    marginTop: 10,
                    elevation: 0,
                  }}>
                  Confirm
                </ButtonComponent>
              </View>
            </View>
            <PoweredBY />
          </ScrollView>
        ) : (
          <ScrollView style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.white,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  //   backgroundColor: 'red',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  marginTop: 15,
                }}>
                {selectedItems.map((data, i) => (
                  <View
                    key={i}
                    style={{
                      width: '31.5%',
                      height: 80,
                      backgroundColor: Colors.white,
                      marginBottom: 10,
                      borderRadius: 5,
                      elevation: data.checked ? 5 : 0,
                      borderColor: '#DBDBDB',
                      borderWidth: !data.checked ? 0.8 : 0,
                      marginHorizontal: '0.9%',
                    }}>
                    <View style={{flex: 1}}>
                      <View
                        style={{
                          flex: 7,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <ImageComponent
                          source={data.image}
                          resizeMode="contain"
                          style={{height: '40%'}}
                        />
                      </View>
                      <View style={{flex: 3, alignItems: 'center'}}>
                        <TextComponent type={FontType.SEMIBOLD}>
                          {data.name}
                        </TextComponent>
                      </View>
                      <IconComponent
                        type={IconType.MaterialCommunityIcons}
                        name="check-circle"
                        style={{position: 'absolute', right: '5%', top: '5%'}}
                      />
                    </View>
                  </View>
                ))}
              </View>
              <View
                style={{
                  width: '80%',
                  borderWidth: 0.5,
                  borderColor: Colors.staysIcon,
                  borderRadius: 5,
                  paddingVertical: 10,
                  paddingHorizontal: 8,
                  marginTop: 10,
                }}>
                <TextComponent style={{color: Colors.searchText}}>
                  You have requested for{' '}
                  {selectedItems.map((item, i) => (
                    <TextComponent key={i}>
                      {`${item.count} ${item.name}`},
                    </TextComponent>
                  ))}
                  Our Service is on the way
                </TextComponent>
              </View>
            </View>
            <View style={{height: 200}}>
              <View
                style={{
                  flex: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{width: '80%', height: '80%'}}>
                  <ImageComponent
                    source={Images.service}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <View style={{flex: 2}}>
                <TextComponent
                  style={{textAlign: 'center', fontSize: 18}}
                  type={FontType.SEMIBOLD}>
                  Service is on the way
                </TextComponent>
              </View>
            </View>
            <PoweredBY />
          </ScrollView>
        )}
      </View>
    );
  }
}

export default ToiletriesRequest;
