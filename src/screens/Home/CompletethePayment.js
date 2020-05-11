import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";

import HeaderComponent from "../../components/Shared/HeaderComponent";
import TextComponent from "../../components/Shared/TextComponent";
import ButtonComponent from "../../components/Shared/ButtonComponent";
import { FontType, IconType } from "../../constants/AppConstants";
import { Colors } from "../../constants/ThemeConstants";
import IconComponent from "../../components/Shared/IconComponent";
import PoweredBY from "../../components/Shared/PoweredBy";
import WalletCarousal from "../../components/Shared/WalletCarousal";

export default class CompletethePayment extends Component {
  constructor(props) {
    super(props);
    this.state = { dt: null, visamaster: null, cvv: null, saveCard: false };
  }

  render() {
    const { saveCard } = this.state;
    const roomName =
      (this.props.route.params && this.props.route.params.roomName) ||
      "Bronze King";
    const date =
      (this.props.route.params && this.props.route.params.date) || "14/4";
    return (
      <View style={{ flex: 1 }}>
        {/* <StatusBar
          backgroundColor={Colors.themeBlack}
          barStyle={"light-content"}
          hidden={false}
          translucent={false}
        /> */}
        <HeaderComponent hasBack {...this.props} isDark twoOnly>
          <TextComponent style={{ fontSize: 25, color: Colors.white }}>
            Complete the Payment
          </TextComponent>
        </HeaderComponent>
        <ScrollView
          style={{
            flex: 1,
            // paddingHorizontal: 15,
            backgroundColor: Colors.white,
          }}
        >
          <View>
            <TextComponent
              style={{ fontSize: 16, padding: 15, paddingBottom: 0 }}
            >
              Saved Card
            </TextComponent>
            <WalletCarousal />
          </View>
          <View style={{ paddingHorizontal: 15 }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("AddCard", {
                  roomName,
                })
              }
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  borderColor: "#6917AF",
                  borderWidth: 0.5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconComponent
                  style={{ color: "#6917AF" }}
                  type={IconType.MaterialCommunityIcons}
                  name="plus"
                />
              </View>
              <TextComponent style={{ color: "#6917AF", paddingLeft: 10 }}>
                Add Card
              </TextComponent>
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 15 }}>
            <View style={{ paddingTop: 20 }}>
              <TextComponent
                type={FontType.BOLD}
                style={{
                  fontSize: 12,
                  color: Colors.searchText,
                  paddingBottom: 5,
                }}
              >
                Card Number*
              </TextComponent>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: Colors.accordionBorderColor,
                  paddingHorizontal: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingVertical: 8,
                }}
              >
                <TextInputMask
                  placeholder="0000 0000 0000 0000"
                  type={"credit-card"}
                  options={{
                    obfuscated: false,
                    issuer: "visa-or-mastercard",
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
            <View style={{ paddingTop: 20 }}>
              <TextComponent
                type={FontType.BOLD}
                style={{
                  fontSize: 12,
                  color: Colors.searchText,
                  paddingBottom: 5,
                }}
              >
                Name on Card*
              </TextComponent>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: Colors.accordionBorderColor,
                  paddingHorizontal: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingVertical: 8,
                }}
              >
                <TextInput placeholder="Name on Card" />
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ paddingTop: 20, flex: 4 }}>
                <TextComponent
                  type={FontType.BOLD}
                  style={{
                    fontSize: 12,
                    color: Colors.searchText,
                    paddingBottom: 5,
                  }}
                >
                  Expiration*
                </TextComponent>
                <View
                  style={{
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.accordionBorderColor,
                    paddingHorizontal: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: 8,
                  }}
                >
                  <TextInputMask
                    placeholder="MM/YY"
                    type={"datetime"}
                    options={{
                      format: "MM/YY",
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
              <View style={{ flex: 1 }}></View>
              <View style={{ paddingTop: 20, flex: 4 }}>
                <TextComponent
                  type={FontType.BOLD}
                  style={{
                    fontSize: 12,
                    color: Colors.searchText,
                    paddingBottom: 5,
                  }}
                >
                  CVV Number*
                </TextComponent>
                <View
                  style={{
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.accordionBorderColor,
                    paddingHorizontal: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: 8,
                  }}
                >
                  <TextInputMask
                    placeholder="3 digits CVV"
                    type={"custom"}
                    options={{
                      mask: "999",
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
            </View>
          </View>
          <PoweredBY />
          <View style={{ height: 80 }}></View>
        </ScrollView>
        <View
          style={{
            height: 80,
            backgroundColor: Colors.white,
            position: "absolute",
            bottom: 0,
            width: "100%",
            elevation: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TextComponent style={{ fontSize: 27 }} type={FontType.BOLD}>
            $ 125
          </TextComponent>
          <View style={{ width: "60%" }}>
            <ButtonComponent
              onPress={() =>
                this.props.navigation.navigate("PaymentSuccess", {
                  roomName,
                  date,
                })
              }
              borderRadius={50}
              style={{
                backgroundColor: Colors.themeBlack,
                fontSize: 17,
                color: Colors.white,
                height:48
              }}
            >
              Pay
            </ButtonComponent>
          </View>
        </View>
      </View>
    );
  }
}
