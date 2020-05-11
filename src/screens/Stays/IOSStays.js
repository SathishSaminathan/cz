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
import Silver from "../MemberBenefits/Silver";
import Gold from "../MemberBenefits/Gold";
import Diamond from "../MemberBenefits/Diamond";
import { IconType, FontType } from "../../constants/AppConstants";
import Upcoming from "./Upcoming";
import Past from "./Past";
import Cancelled from "./Cancelled";

const initialLayout = { width: Dimensions.get("window").width };

class IOSStays extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: new Animated.Value(0),
      width: 0,
      activeTab: "Upcoming",
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
      case "Upcoming":
        return <Upcoming {...this.props} />;
      case "Past":
        return <Past {...this.props} />;
      case "Cancelled":
        return <Cancelled {...this.props} />;

      default:
        break;
    }
  };
  render() {
    const { position, width, activeTab, butWidth } = this.state;

    const trans = position.interpolate({
      inputRange: [0, width],
      outputRange: [0, width - width / 3],
      extrapolate: "clamp",
    });

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.staysBackground,
        }}
      >
        <View
          style={{
            paddingTop: Platform.OS === "ios" ? 20 : 0,
            backgroundColor: Colors.white,
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
              height: 0,
              width: 0,
            },
          }}
        >
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
                    this.setState({ activeTab: "Upcoming" });
                  }}
                  style={styles.buttonStyle}
                >
                  <TextComponent
                    type={FontType.BOLD}
                    style={{
                      fontSize: 16,
                      color:
                        activeTab === "Upcoming"
                          ? Colors.white
                          : Colors.themeBlack,
                    }}
                  >
                    Upcoming
                  </TextComponent>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    // this.scrollViewRef.scrollTo({ x: 0 });
                    this.handleTab(width / 2);
                    this.setState({ activeTab: "Past" });
                  }}
                  style={styles.buttonStyle}
                >
                  <TextComponent
                    type={FontType.BOLD}
                    style={{
                      fontSize: 16,
                      color:
                        activeTab === "Past" ? Colors.white : Colors.themeBlack,
                    }}
                  >
                    Past
                  </TextComponent>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    // this.scrollViewRef.scrollTo({ x: 360 });
                    this.handleTab(width);
                    this.setState({ activeTab: "Cancelled" });
                  }}
                  style={styles.buttonStyle}
                >
                  <TextComponent
                    type={FontType.BOLD}
                    style={{
                      fontSize: 16,
                      color:
                        activeTab === "Cancelled"
                          ? Colors.white
                          : Colors.themeBlack,
                    }}
                  >
                    Cancelled
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
        </View>
        <View style={{ backgroundColor: Colors.staysBackground }}>
          {this.renderScene(activeTab)}
        </View>
      </View>
    );
  }
}
export default IOSStays;

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
