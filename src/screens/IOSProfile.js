import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Animated,
  Platform,
} from "react-native";

import { Colors } from "../constants/ThemeConstants";
import TextComponent from "../components/Shared/TextComponent";
import Status from "./Account/Status";
import Account from "./Account/Account";
import { widthPerc } from "../helpers/styleHelper";
import { FontType, IconType } from "../constants/AppConstants";
import IconComponent from "../components/Shared/IconComponent";

const initialLayout = { width: Dimensions.get("window").width };

class IOSProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: new Animated.Value(0),
      width: 0,
      activeTab: "Status",
    };
  }

  measureView(event) {
    this.setState({
      width: event.nativeEvent.layout.width,
    });
  }

  measureButton(event) {
    this.setState({
      butWidth: event.nativeEvent.layout.width,
    });
  }

  handleTab = (value) => {
    Animated.spring(this.state.position, {
      toValue: value,
      duration: 300,
      friction: 10,
    }).start();
  };

  render() {
    const { position, width, activeTab, butWidth } = this.state;
    const trans = position.interpolate({
      inputRange: [0, width],
      outputRange: [0, width / 2],
      extrapolate: "clamp",
    });
    const viewTrans = position.interpolate({
      inputRange: [0, width],
      outputRange: [0, -widthPerc(100)],
      extrapolate: "clamp",
    });

    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 20 : 0,
          backgroundColor: Colors.white,
        }}
      >
        {/* <HeaderComponent title="Profile" {...pageProps} hasBack/> */}
        <View
          style={{
            height: 60,
            elevation: 10,
            backgroundColor: Colors.white,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            justifyContent: "center",
            paddingRight:10
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.goBack()}
            style={{ flex: 1, alignItems: "center" }}
          >
            <IconComponent size={20} type={IconType.AntDesign} name="left" />
          </TouchableOpacity>
          <View
            style={{
              flex: 9,
              height: 40,
              backgroundColor: "rgba(118,118,128,0.12)",
              width: widthPerc(80),
              borderRadius: 8,
            }}
          >
            <View
              style={{ flex: 1, flexDirection: "row" }}
              onLayout={(event) => this.measureView(event)}
            >
              <TouchableOpacity
                onLayout={(event) => this.measureButton(event)}
                activeOpacity={1}
                onPress={() => {
                  // this.scrollViewRef.scrollTo({ x: 0 });
                  this.handleTab(0);
                  this.setState({ activeTab: "Status" });
                }}
                // style={{
                //   width: "50%",
                //   // backgroundColor: Colors.themeBlack,
                //   height: "100%",
                //   alignItems: "center",
                //   justifyContent: "center",
                // }}
                style={styles.buttonStyle}
              >
                <TextComponent
                  type={FontType.BOLD}
                  style={{
                    fontSize: 16,
                    color:
                      activeTab === "Status" ? Colors.white : Colors.themeBlack,
                  }}
                >
                  Status
                </TextComponent>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  // this.scrollViewRef.scrollTo({ x: 360 });
                  this.handleTab(width);
                  this.setState({ activeTab: "Account" });
                }}
                // style={{
                //   width: "50%",
                //   // backgroundColor: Colors.themeBlack,
                //   height: "100%",
                //   alignItems: "center",
                //   justifyContent: "center",
                // }}
                style={styles.buttonStyle}
              >
                <TextComponent
                  type={FontType.BOLD}
                  style={{
                    fontSize: 16,
                    color:
                      activeTab === "Account"
                        ? Colors.white
                        : Colors.themeBlack,
                  }}
                >
                  Account
                </TextComponent>
              </TouchableOpacity>
              <Animated.View
                style={{
                  width: butWidth,
                  backgroundColor: Colors.themeBlack,
                  height: "100%",
                  position: "absolute",
                  borderRadius: 8,
                  left: trans,
                  zIndex: -1,
                }}
              >
                {/* <TextComponent style={{ color: Colors.white }}>
                  {text}
                </TextComponent> */}
              </Animated.View>
            </View>
          </View>
        </View>
        <Animated.View
          style={{
            flexDirection: "row",
            // transform: [
            //   {
            //     translateX: viewTrans,
            //   },
            // ],
          }}
          // ref={(ref) => {
          //   this.scrollViewRef = ref;
          // }}
          // onScroll={Animated.event([
          //   { nativeEvent: { contentOffset: { x: this.state.position } } },
          // ])}
        >
          {activeTab === "Status" ? (
            <View style={{ width: widthPerc(100) }}>
              <Status {...this.props} />
            </View>
          ) : (
            <View style={{ width: widthPerc(100) }}>
              <Account {...this.props} />
            </View>
          )}
        </Animated.View>
      </View>
    );
  }
}
export default IOSProfile;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  buttonStyle: {
    // width: "30%",
    flex: 1,
    // backgroundColor: Colors.themeBlack,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
