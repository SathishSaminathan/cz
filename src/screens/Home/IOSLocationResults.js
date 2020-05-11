import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Colors } from "../../constants/ThemeConstants";
import TextComponent from "../../components/Shared/TextComponent";
import { IconType, FontType } from "../../constants/AppConstants";
import LocationResultList from "./LocationResultList";
import NearByEvents from "./NearByEvents";
import IconComponent from "../../components/Shared/IconComponent";

const initialLayout = { width: Dimensions.get("window").width };

class IOSLocationResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: new Animated.Value(0),
      width: 0,
      activeTab: "Nashville Rooms",
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

  renderScene = (Scene) => {
    switch (Scene) {
      case "Nashville Rooms":
        return <LocationResultList hideFilter {...this.props} />;
      case "Nearby Events":
        return <NearByEvents {...this.props} />;
      default:
        break;
    }
  };
  render() {
    const { position, width, activeTab, butWidth } = this.state;

    const trans = position.interpolate({
      inputRange: [0, width],
      outputRange: [0, width / 2],
      extrapolate: "clamp",
    });

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 60,
            // elevation: 10,
            backgroundColor: Colors.white,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            justifyContent: "center",
            paddingHorizontal: 10,
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
              //   width: widthPerc(90),
              borderRadius: 8,
              //   alignItems:'center'
            }}
          >
            <View
              style={{ flex: 1, flexDirection: "row", alignSelf: "center" }}
              onLayout={(event) => this.measureView(event)}
            >
              <TouchableOpacity
                onLayout={(event) => this.measureButton(event)}
                activeOpacity={1}
                onPress={() => {
                  // this.scrollViewRef.scrollTo({ x: 0 });
                  this.handleTab(0);
                  this.setState({ activeTab: "Nashville Rooms" });
                }}
                style={styles.buttonStyle}
              >
                <TextComponent
                  type={FontType.BOLD}
                  style={{
                    fontSize: 16,
                    color:
                      activeTab === "Nashville Rooms"
                        ? Colors.white
                        : Colors.themeBlack,
                  }}
                >
                  Nashville Rooms
                </TextComponent>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  // this.scrollViewRef.scrollTo({ x: 0 });
                  this.handleTab(width);
                  this.setState({ activeTab: "Nearby Events" });
                }}
                style={styles.buttonStyle}
              >
                <TextComponent
                  type={FontType.BOLD}
                  style={{
                    fontSize: 16,
                    color:
                      activeTab === "Nearby Events"
                        ? Colors.white
                        : Colors.themeBlack,
                  }}
                >
                  Nearby Events
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
              ></Animated.View>
            </View>
          </View>
        </View>
        {activeTab !== "Nearby Events" && (
          <View
            style={{
              flexDirection: "row",
              backgroundColor: Colors.white,
              paddingHorizontal: 20,
              paddingBottom: 5,
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.props.navigation.push("IOSDate")}
              style={{
                height: 40,
                borderWidth: 0.5,
                flex: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                borderColor: Colors.accordionBorderColor,
              }}
            >
              <TextComponent style={{ fontSize: 10 }}>
                May 22 - May 27
              </TextComponent>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.props.navigation.push("IOSRoomFilter")}
              style={{
                height: 40,
                borderWidth: 0.5,
                flex: 1.4,
                borderRadius: 5,
                marginHorizontal: 5,
                alignItems: "center",
                justifyContent: "center",
                borderColor: Colors.accordionBorderColor,
              }}
            >
              <TextComponent style={{ fontSize: 10 }}>
                Room 1, Adults 1, Children 1
              </TextComponent>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.props.navigation.push("IOSLocation")}
              style={{
                height: 40,
                borderWidth: 0.5,
                flex: 1,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                borderColor: Colors.accordionBorderColor,
              }}
            >
              <TextComponent style={{ fontSize: 10 }}>
                Nashville, TN
              </TextComponent>
            </TouchableOpacity>
          </View>
        )}
        {this.renderScene(activeTab)}
      </View>
    );
  }
}
export default IOSLocationResults;

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
