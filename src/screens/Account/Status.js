import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Popover from 'react-native-popover-view';

import TextComponent from '../../components/Shared/TextComponent';
import {FontType, IconType} from '../../constants/AppConstants';
import {Colors} from '../../constants/ThemeConstants';
import {Images} from '../../assets/images';
import IconComponent from '../../components/Shared/IconComponent';
import ImageComponent from '../../components/Shared/ImageComponent';
import PoweredBY from '../../components/Shared/PoweredBy';

export default class Status extends Component {
  state = {
    isVisible: false,
  };

  showPopover() {
    this.setState({isVisible: true});
  }

  closePopover() {
    this.setState({isVisible: false});
  }
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: Colors.white, padding: 5}}>
        <View
          style={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: Colors.accordionBorderColor,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 12,
            paddingHorizontal: 18,
          }}>
          <View>
            <TextComponent style={{fontSize: 16}} type={FontType.BOLD}>
              Total Points
            </TextComponent>
            <TextComponent style={{fontSize: 16, color: Colors.searchText}}>
              1500
            </TextComponent>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <TextComponent style={{fontSize: 16}} type={FontType.BOLD}>
              Alfred Loyalty
            </TextComponent>
            <TextComponent style={{fontSize: 16, color: Colors.searchText}}>
              2316675278
            </TextComponent>
          </View>
        </View>
        <View
          style={[{width: '100%', marginTop: 5, padding: 15}, styles.border]}>
          <View style={{flex: 7}}>
            <View style={{height: 190, alignItems: 'center'}}>
              <View style={{width: '50%', height: '100%'}}>
                <ImageComponent
                  source={Images.accountShape}
                  resizeMode="contain"
                />
                <TextComponent
                  style={{
                    position: 'absolute',
                    fontSize: 30,
                    color: Colors.white,
                    left: '12%',
                    top: '42%',
                  }}
                  type={FontType.BOLD}>
                  MEMBER
                </TextComponent>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 40,
                borderWidth: 1,
                borderColor: Colors.themeBlack,
                borderRadius: 50,
                overflow: 'hidden',
                marginVertical: 10,
                marginBottom: 15,
              }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.themeBlack,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextComponent style={{color: Colors.white, fontSize: 14}}>
                  10 nights
                </TextComponent>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextComponent style={{fontSize: 14}}>5 Stays</TextComponent>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextComponent style={{fontSize: 14}}>
                  1500 Points
                </TextComponent>
              </View>
            </View>
            <TextComponent
              style={{fontSize: 17, textAlign: 'center'}}
              type={FontType.BOLD}>
              You need 20 Nights to Achieve Gold
            </TextComponent>
          </View>
          <View style={{flex: 3}}></View>
        </View>
        <View style={[styles.border, {marginTop: 5, padding: 15}]}>
          <TextComponent style={{fontSize: 14}} type={FontType.BOLD}>
            Bonus Points
          </TextComponent>
          <View
            style={{
              padding: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <>
              <TouchableOpacity
                activeOpacity={1}
                ref={ref => (this.touchable = ref)}
                onPress={() => this.showPopover()}
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: Colors.themeBlack,
                  borderRadius: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextComponent
                  style={{fontSize: 16, color: Colors.white}}
                  type={FontType.BOLD}>
                  {'20K'}
                </TextComponent>
              </TouchableOpacity>
              <Popover
                popoverStyle={{
                  width: 150,
                  borderColor: Colors.themeBlack,
                  borderWidth: 1,
                }}
                // arrowStyle={{
                //   borderColor: Colors.themeBlack,
                //   borderWidth: 1,
                // }}
                placement="bottom"
                isVisible={this.state.isVisible}
                fromView={this.touchable}
                onRequestClose={() => this.closePopover()}>
                <TextComponent style={{padding: 5}}>
                  10 Nights needed to get 20000 BP
                </TextComponent>
              </Popover>
            </>
            <>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: Colors.themeBlack,
                  borderRadius: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextComponent
                  style={{fontSize: 16, color: Colors.white}}
                  type={FontType.BOLD}>
                  {'40K'}
                </TextComponent>
              </TouchableOpacity>
            </>
            <>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: Colors.themeBlack,
                  borderRadius: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextComponent
                  style={{fontSize: 16, color: Colors.white}}
                  type={FontType.BOLD}>
                  {'80K'}
                </TextComponent>
              </TouchableOpacity>
            </>
          </View>
        </View>
        <PoweredBY />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  border: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.accordionBorderColor,
  },
});
