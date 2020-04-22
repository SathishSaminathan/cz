import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import TextComponent from '../components/Shared/TextComponent';
import HeaderComponent from '../components/Shared/HeaderComponent';
import ImageComponent from '../components/Shared/ImageComponent';
import {Images} from '../assets/images';
import {Colors} from '../constants/ThemeConstants';
import Ripple from 'react-native-material-ripple';
import IconComponent from '../components/Shared/IconComponent';
import PoweredBy from '../components/Shared/PoweredBy';
import {IconType, FontType} from '../constants/AppConstants';

export default class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Book Your Stay for 4days, Get 30% Off',
          desc: 'Book your hotel on March, 22 2020',
          timing: '1 day ago',
          image: Images.rm2,
        },
        {
          name: 'Save Bike rental',
          desc: 'Book your hotel on March, 22 2020',
          timing: '1 day ago',
          image: Images.offer1,
        },
      ],
    };
  }

  renderList = () => {
    const {data} = this.state;
    return data.map((data, i) => (
      <View
        key={i}
        rippleContainerBorderRadius={5}
        style={{
          width: '95%',
          height: 234,
          marginTop: 10,
          borderRadius: 5,
          overflow: 'hidden',
          elevation: 5,
        }}>
        <Ripple style={{flex: 7}}>
          <View style={{flex: 1, borderRadius: 5, overflow: 'hidden'}}>
            <ImageComponent source={data.image} />
          </View>
        </Ripple>
        <View
          style={{
            flex: 3,
            backgroundColor: Colors.white,
            flexDirection: 'row',
          }}>
          <View
            style={{flex: 8, paddingHorizontal: 15, justifyContent: 'center'}}>
            <TextComponent style={{fontSize: 14}} type={FontType.BOLD}>
              {data.name}
            </TextComponent>
            <TextComponent style={{color: Colors.searchText}}>
              {data.desc}
            </TextComponent>
            <TextComponent style={{color: Colors.searchText}}>
              {data.timing}
            </TextComponent>
          </View>
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 2}}>
            <TouchableOpacity
              //   onPress={() => alert('hai')}
              style={{
                padding: 5,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: Colors.accordionBorderColor,
              }}>
              <IconComponent type={IconType.AntDesign} name="close" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ));
  };

  render() {
    const {data} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: Colors.staysBackground}}>
        <HeaderComponent hasBack title="Offers" {...this.props} />
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          {this.renderList()}
          <View
            style={{
              paddingTop: 10,
              width: '95%',
            }}>
            <TextComponent style={{fontSize: 18}} type={FontType.BOLD}>
              Request an Uber
            </TextComponent>
            <View
              style={{
                height: 242,
                backgroundColor: Colors.white,
                borderRadius: 5,
                padding: 10,
                marginTop: 10,
              }}>
              <View style={{flex: 2}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: Colors.themeBlack,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 10,
                    }}>
                    <ImageComponent
                      source={Images.uberBook}
                      resizeMode="contain"
                      style={{width: '60%'}}
                    />
                  </View>
                  <TextComponent style={{fontSize: 14}} type={FontType.BOLD}>
                    Uber
                  </TextComponent>
                </View>
              </View>
              <View style={{flex: 5, borderRadius: 5, overflow: 'hidden'}}>
                <ImageComponent source={Images.uber} />
              </View>
              <View
                style={{
                  flex: 3,
                  backgroundColor: Colors.white,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flex: 8,
                    // paddingHorizontal: 15,
                    justifyContent: 'center',
                  }}>
                  <TextComponent style={{fontSize: 14}} type={FontType.BOLD}>
                    {data[0].name}
                  </TextComponent>
                  <TextComponent style={{color: Colors.searchText}}>
                    {data[0].desc}
                  </TextComponent>
                  <TextComponent style={{color: Colors.searchText}}>
                    {data[0].timing}
                  </TextComponent>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 2,
                  }}>
                  <TouchableOpacity
                    //   onPress={() => alert('hai')}
                    style={{
                      padding: 5,
                      borderRadius: 50,
                      borderWidth: 1,
                      borderColor: Colors.accordionBorderColor,
                    }}>
                    <IconComponent type={IconType.AntDesign} name="close" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingTop: 10,
              width: '95%',
            }}>
            <TextComponent style={{fontSize: 18}} type={FontType.BOLD}>
              Refer and earn
            </TextComponent>
            <View
              style={{
                height: 127,
                backgroundColor: Colors.white,
                borderRadius: 5,
                padding: 10,
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <View style={{flex: 6, borderRadius: 5, overflow: 'hidden'}}>
                <ImageComponent source={Images.referImage} resizeMode="contain" />
              </View>
              <View
                style={{
                  flex: 4,
                  backgroundColor: Colors.white,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flex: 8,
                    // paddingHorizontal: 15,
                    justifyContent: 'center',
                  }}>
                  <TextComponent style={{fontSize: 18}} type={FontType.BOLD}>
                    Refer a friend
                  </TextComponent>
                  <TextComponent
                    style={{color: Colors.searchText, fontSize: 9}}>
                    Classifieds are usually the first place you think of when
                    you are getting ready to make a purchase. Whether you
                  </TextComponent>
                </View>
              </View>
            </View>
          </View>
          <PoweredBy />
        </ScrollView>
      </View>
    );
  }
}
