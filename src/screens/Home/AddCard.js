import React, {Component} from 'react';
import {Text, View, ScrollView, TextInput} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import {TextInputMask} from 'react-native-masked-text';

import HeaderComponent from '../../components/Shared/HeaderComponent';
import TextComponent from '../../components/Shared/TextComponent';
import ButtonComponent from '../../components/Shared/ButtonComponent';
import SwitchComponent from '../../components/Shared/SwitchComponent';
import {FontType, IconType} from '../../constants/AppConstants';
import {Colors} from '../../constants/ThemeConstants';
import IconComponent from '../../components/Shared/IconComponent';
import PoweredBY from '../../components/Shared/PoweredBy';

export default class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {dt: null, visamaster: null, cvv: null, saveCard: false};
  }

  render() {
    const {saveCard} = this.state;
    const roomName = this.props.route.params.roomName;
    return (
      <View style={{flex: 1}}>
        <HeaderComponent hasBack {...this.props} isDark>
          <TextComponent style={{fontSize: 25, color: Colors.white}}>
            Add Card
          </TextComponent>
        </HeaderComponent>
        <ScrollView
          style={{
            flex: 1,
            paddingHorizontal: 15,
            backgroundColor: Colors.white,
          }}>
          <View style={{paddingTop: 20}}>
            <TextComponent
              type={FontType.BOLD}
              style={{fontSize: 15, paddingBottom: 5}}>
              Card Type
            </TextComponent>
            <ModalDropdown
              dropdownStyle={{
                // backgroundColor: 'red',
                width: '91%',
                height: 80,
              }}
              dropdownTextStyle={{
                fontFamily: 'Proxima Nova Bold',
                fontSize: 13,
              }}
              options={['Visa', 'Master']}>
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
                    color: Colors.searchText,
                  }}>
                  Select a type
                </TextComponent>
                <IconComponent type={IconType.AntDesign} name="down" />
              </View>
            </ModalDropdown>
          </View>
          <View style={{paddingTop: 20}}>
            <TextComponent
              type={FontType.BOLD}
              style={{fontSize: 15, paddingBottom: 5}}>
              Name on Card
            </TextComponent>
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
              <TextInput placeholder="Name on Card" />
            </View>
          </View>
          <View style={{paddingTop: 20}}>
            <TextComponent
              type={FontType.BOLD}
              style={{fontSize: 15, paddingBottom: 5}}>
              Card Number
            </TextComponent>
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
              <TextInputMask
                placeholder="0000 0000 0000 0000"
                type={'credit-card'}
                options={{
                  obfuscated: false,
                  issuer: 'visa-or-mastercard',
                }}
                value={this.state.visamaster || null}
                onChangeText={(text) => {
                  this.setState({
                    visamaster: text,
                  });
                }}
              />
            </View>
          </View>
          <View style={{paddingTop: 20}}>
            <TextComponent
              type={FontType.BOLD}
              style={{fontSize: 15, paddingBottom: 5}}>
              Expiration
            </TextComponent>
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
              <TextInputMask
                placeholder="MM/YY"
                type={'datetime'}
                options={{
                  format: 'MM/YY',
                }}
                value={this.state.dt}
                onChangeText={(text) => {
                  this.setState({
                    dt: text,
                  });
                }}
              />
            </View>
          </View>
          <View style={{paddingTop: 20}}>
            <TextComponent
              type={FontType.BOLD}
              style={{fontSize: 15, paddingBottom: 5}}>
              CVV Number
            </TextComponent>
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
              <TextInputMask
                placeholder="3 digits CVV"
                type={'custom'}
                options={{
                  mask: '999',
                }}
                value={this.state.cvv || null}
                onChangeText={(text) => {
                  this.setState({
                    cvv: text,
                  });
                }}
              />
            </View>
          </View>
          <View
            style={{
              paddingTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextComponent
              type={FontType.BOLD}
              style={{fontSize: 15, paddingBottom: 5}}>
              Save card to my profile
            </TextComponent>
            <SwitchComponent
              status={saveCard}
              onChange={() =>
                this.setState({saveCard: !saveCard})
              }></SwitchComponent>
          </View>
          {saveCard && (
            <>
              <View style={{paddingTop: 20}}>
                <TextComponent
                  type={FontType.BOLD}
                  style={{fontSize: 15, paddingBottom: 5}}>
                  Purpose
                </TextComponent>
                <ModalDropdown
                  dropdownStyle={{
                    // backgroundColor: 'red',
                    width: '91%',
                    height: 80,
                  }}
                  dropdownTextStyle={{
                    fontFamily: 'Proxima Nova Bold',
                    fontSize: 13,
                  }}
                  options={['Visa', 'Master']}>
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
                        color: Colors.searchText,
                      }}>
                      Select a type
                    </TextComponent>
                    <IconComponent type={IconType.AntDesign} name="down" />
                  </View>
                </ModalDropdown>
              </View>
              <View style={{paddingTop: 20}}>
                <TextComponent
                  type={FontType.BOLD}
                  style={{fontSize: 15, paddingBottom: 5}}>
                  Card Nickname (Optional)
                </TextComponent>
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
                  <TextInput placeholder="Nickname" />
                </View>
              </View>
              <View style={{paddingTop: 20}}>
                <View
                  style={{
                    // borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.accordionBorderColor,
                    paddingHorizontal: 5,
                    paddingLeft: 10,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    backgroundColor: '#f4f4f4',
                  }}>
                  <View>
                    <TextComponent style={{fontSize: 11}} type={FontType.BOLD}>
                      Note:
                    </TextComponent>
                  </View>
                  <View style={{flex: 1, paddingHorizontal: 5}}>
                    <TextComponent style={{fontSize: 9, color: '#595959'}}>
                      Need a credit card to hold you to You will not be changed
                      at the time of booking Only those rabes that require a
                      deposit or prepayment will
                    </TextComponent>
                  </View>
                </View>
              </View>
            </>
          )}
          <PoweredBY />
          <View style={{height: 80}}></View>
        </ScrollView>
        <View
          style={{
            height: 80,
            backgroundColor: Colors.white,
            position: 'absolute',
            bottom: 0,
            width: '100%',
            elevation: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <TextComponent style={{fontSize: 27}} type={FontType.BOLD}>
            $ 125
          </TextComponent>
          <View style={{width: '60%'}}>
            <ButtonComponent
              onPress={() =>
                this.props.navigation.navigate('PaymentSuccess', {
                  roomName,
                })
              }
              borderRadius={50}
              style={{
                backgroundColor: Colors.themeBlack,
                fontSize: 17,
                color: Colors.white,
              }}>
              Pay
            </ButtonComponent>
          </View>
        </View>
      </View>
    );
  }
}
