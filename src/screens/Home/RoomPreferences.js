import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {Colors} from '../../constants/ThemeConstants';
import HeaderComponent from '../../components/Shared/HeaderComponent';
import CheckboxComponent from '../../components/Shared/CheckboxComponent';
import TextComponent from '../../components/Shared/TextComponent';
import PoweredBy from '../../components/Shared/PoweredBy';
import {FontType, IconType} from '../../constants/AppConstants';
import ButtonComponent from '../../components/Shared/ButtonComponent';
import IconComponent from '../../components/Shared/IconComponent';
import Ripple from 'react-native-material-ripple';

export default class RoomPreferences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomType: [
        {
          name: 'Non-Smoking Rooms',
          value: true,
        },
        {
          name: 'Smoking Rooms',
          value: false,
        },
        {
          name: 'Accessible Rooms',
          value: false,
        },
        {
          name: 'Guest Rooms',
          value: true,
        },
        {
          name: 'Suites',
          value: false,
        },
      ],
      rateTypes: [
        {
          name: 'Special Offers',
          value: true,
        },
        {
          name: 'Easy Cancellation',
          value: true,
        },
        {
          name: 'Advance Purchase',
          value: false,
        },
        {
          name: 'Packages & Promotions',
          value: true,
        },
        {
          name: 'Dream Hotel Discount',
          value: false,
        },
      ],
      bedType: [
        {
          name: '1 Bed',
          value: true,
        },
        {
          name: '2 Bed',
          value: true,
        },
        {
          name: '3+ Bed',
          value: false,
        },
      ],
    };
  }

  handleCheckBox = (value, data, name, type) => {
    data = data.map(data => {
      if (name === data.name) {
        return {
          ...data,
          value,
        };
      } else return data;
    });
    this.setState({
      [type]: data,
    });
  };

  renderItems = (list, title, type) => {
    return (
      <View>
        <TextComponent
          style={{fontSize: 14, paddingVertical: 12}}
          type={FontType.BOLD}>
          {title}
        </TextComponent>
        <View
          style={{
            borderWidth: 1,
            borderColor: Colors.accordionBorderColor,
            borderRadius: 5,
          }}>
          {list.map((data, i) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 8,
              }}
              key={i}>
              <CheckBox
                value={data.value}
                onValueChange={val =>
                  this.handleCheckBox(val, list, data.name, type)
                }
                style={{marginRight: 20, marginLeft: 10}}
              />
              <TextComponent style={{fontSize: 13}}>{data.name}</TextComponent>
            </View>
          ))}
        </View>
      </View>
    );
  };

  render() {
    const {rateTypes, roomType, bedType} = this.state;
    return (
      <ScrollView style={{flex: 1, backgroundColor: Colors.staysBackground}}>
        {/* <HeaderComponent hasBack title="Room & Rates Filters" {...this.props} /> */}
        <View style={{paddingHorizontal: 15}}>
          {this.renderItems(roomType, 'Room Type', 'roomType')}
          <View>
            <TextComponent
              style={{fontSize: 14, paddingVertical: 12}}
              type={FontType.BOLD}>
              Bed Type
            </TextComponent>
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.accordionBorderColor,
                borderRadius: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 10,
                paddingRight: 15,
              }}>
              {bedType.map((data, i) => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 8,
                  }}
                  key={i}>
                  <CheckBox
                    value={data.value}
                    onValueChange={val =>
                      this.handleCheckBox(val, bedType, data.name, 'bedType')
                    }
                    // style={{marginRight: 10, marginLeft: 10}}
                  />
                  <TextComponent style={{fontSize: 13}}>
                    {data.name}
                  </TextComponent>
                </View>
              ))}
            </View>
          </View>
          {this.renderItems(rateTypes, 'Rate Types', 'rateTypes')}
        </View>
        <PoweredBy />
      </ScrollView>
    );
  }
}
