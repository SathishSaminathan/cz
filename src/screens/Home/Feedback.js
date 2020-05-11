import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import {Colors} from '../../constants/ThemeConstants';
import HeaderComponent from '../../components/Shared/HeaderComponent';
import TextComponent from '../../components/Shared/TextComponent';
import {FontType} from '../../constants/AppConstants';
import ImageComponent from '../../components/Shared/ImageComponent';
import {Images} from '../../assets/images';
import PoweredBY from '../../components/Shared/PoweredBy';
import {AirbnbRating} from 'react-native-ratings';
import ButtonComponent from '../../components/Shared/ButtonComponent';

const data = [
  {
    name: 'Quality Service',
    isSelected: false,
  },
  {
    name: 'High Price',
    isSelected: false,
  },
  {
    name: 'Cleanliness',
    isSelected: false,
  },
  {
    name: 'Food Quality',
    isSelected: false,
  },
  {
    name: 'Customer Service',
    isSelected: false,
  },
  {
    name: 'Other',
    isSelected: true,
  },
];

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Quality Service',
          isSelected: false,
        },
        {
          name: 'High Price',
          isSelected: false,
        },
        {
          name: 'Cleanliness',
          isSelected: false,
        },
        {
          name: 'Food Quality',
          isSelected: false,
        },
        {
          name: 'Customer Service',
          isSelected: false,
        },
        {
          name: 'Other',
          isSelected: true,
        },
      ],
    };
  }

  handleChange = (name) => {
    let data = this.state.data.map((data) => {
      if (data.name === name) {
        return {
          ...data,
          isSelected: !data.isSelected,
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
    const {data} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: Colors.white}}>
        <HeaderComponent {...this.props} hasBack isDark>
          <ImageComponent
            source={Images.Logo}
            style={{width: 120, height: 90}}
            resizeMode="contain"
          />
        </HeaderComponent>
        <ScrollView>
          <View style={{padding: 20, paddingVertical: 10}}>
            <TextComponent
              style={{fontSize: 22, paddingVertical: 10}}
              type={FontType.BOLD}>
              Feedback
            </TextComponent>
            <View
              style={{
                paddingVertical: 5,
                borderWidth: 0.5,
                borderColor: Colors.staysIcon,
                borderRadius: 5,
              }}>
              <View>
                <AirbnbRating
                  //   showRating={false}
                  starContainerStyle={{
                    paddingRight: 10,
                  }}
                  count={5}
                  defaultRating={3}
                  size={20}
                  //   isDisabled
                />
                <TextComponent
                  style={{
                    color: Colors.staysIcon,
                    textAlign: 'center',
                    paddingTop: 10,
                  }}>
                  Why it is not great ?
                </TextComponent>
                <View style={{alignItems: 'center', paddingTop: 10}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      paddingHorizontal: 10,
                    }}>
                    {data.map((data, i) => (
                      <View key={i}>
                        <ButtonComponent
                          onPress={() => this.handleChange(data.name)}
                          style={{
                            backgroundColor: data.isSelected
                              ? Colors.themeBlack
                              : Colors.white,
                            fontSize: 13,
                            // height: 40,
                            paddingHorizontal: 13,
                            // marginRight: 10,
                            marginBottom: 5,
                            elevation: 0,
                            color: data.isSelected
                              ? Colors.white
                              : Colors.searchText,
                            borderWidth: 0.5,
                            borderColor: Colors.searchText,
                          }}>
                          {data.name}
                        </ButtonComponent>
                      </View>
                    ))}
                  </View>
                </View>
                <View style={{paddingHorizontal: 10}}>
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: Colors.staysIcon,
                      borderRadius: 5,
                      paddingHorizontal: 10,
                    }}>
                    <TextInput
                      multiline={true}
                      numberOfLines={8}
                      textAlignVertical="top"
                      placeholder="Write your Feedback"
                    />
                  </View>
                  <View style={{paddingVertical: 20}}>
                    <ButtonComponent
                      borderRadius={50}
                      style={{
                        backgroundColor: Colors.themeBlack,
                        color: Colors.white,
                        fontSize: 17,
                      }}>
                      Submit
                    </ButtonComponent>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <PoweredBY />
        </ScrollView>
      </View>
    );
  }
}

export default Feedback;
