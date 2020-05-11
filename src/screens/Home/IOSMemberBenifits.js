import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
  Animated,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Colors } from "../../constants/ThemeConstants";
import TextComponent from "../../components/Shared/TextComponent";
import IconComponent from "../../components/Shared/IconComponent";
import ButtonComponent from "../../components/Shared/ButtonComponent";
import Upcoming from "../Stays/Upcoming";
import Past from "../Stays/Past";
import Cancelled from "../Stays/Cancelled";
import SearchLocation from "./SearchLocation";
import PickDate from "./PickDate";
import HeaderComponent from "../../components/Shared/HeaderComponent";
import Silver from "../MemberBenefits/Silver";
import Gold from "../MemberBenefits/Gold";
import Diamond from "../MemberBenefits/Diamond";
import { IconType, FontType } from "../../constants/AppConstants";
import { widthPerc } from "../../helpers/styleHelper";

const initialLayout = { width: Dimensions.get("window").width };

class IOSMemberBenifits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: new Animated.Value(0),
      width: 0,
      activeTab: "Silver",
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
      case "Silver":
        return <Silver {...this.props} />;
      case "Gold":
        return <Gold {...this.props} />;
      case "Diamond":
        return <Diamond {...this.props} />;

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
                  this.setState({ activeTab: "Silver" });
                }}
                style={styles.buttonStyle}
              >
                <TextComponent
                  type={FontType.BOLD}
                  style={{
                    fontSize: 16,
                    color:
                      activeTab === "Silver" ? Colors.white : Colors.themeBlack,
                  }}
                >
                  Silver
                </TextComponent>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  // this.scrollViewRef.scrollTo({ x: 0 });
                  this.handleTab(width / 2);
                  this.setState({ activeTab: "Gold" });
                }}
                style={styles.buttonStyle}
              >
                <TextComponent
                  type={FontType.BOLD}
                  style={{
                    fontSize: 16,
                    color:
                      activeTab === "Gold" ? Colors.white : Colors.themeBlack,
                  }}
                >
                  Gold
                </TextComponent>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  // this.scrollViewRef.scrollTo({ x: 360 });
                  this.handleTab(width);
                  this.setState({ activeTab: "Diamond" });
                }}
                style={styles.buttonStyle}
              >
                <TextComponent
                  type={FontType.BOLD}
                  style={{
                    fontSize: 16,
                    color:
                      activeTab === "Diamond"
                        ? Colors.white
                        : Colors.themeBlack,
                  }}
                >
                  Diamond
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
        {this.renderScene(activeTab)}
      </View>
    );
  }
}
export default IOSMemberBenifits;

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
