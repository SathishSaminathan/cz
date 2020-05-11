import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { Calendar } from "react-native-calendario";
import { Colors } from "../../constants/ThemeConstants";
import TextComponent from "../../components/Shared/TextComponent";
import ButtonComponent from "../../components/Shared/ButtonComponent";
import SearchLocation from "./SearchLocation";
import IconComponent from "../../components/Shared/IconComponent";
import { IconType, FontType } from "../../constants/AppConstants";
import moment from "moment";
import { without } from "lodash";
import Ripple from "react-native-material-ripple";

const initialLayout = { width: Dimensions.get("window").width };

class IOSRoomFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LocationName: null,
      SelectedDate: null,
      ActiveTab: "Location",
      startDate: moment(),
      endDate: null,
      DaysCount: null,
      ShowDates: moment().format("DD/MM").replace(/\b0/g, ""),
    };
  }

  _renderContent = (section) => {
    let data = [
      { name: "Room", value: 1 },
      { name: "Adults", value: 2 },
      { name: "Children", value: 0 },
    ];
    let totalLength = data.length;
    return data.map((data, i) => (
      <View
        style={[
          styles.content,
          // {
          //   borderBottomColor:
          //     i + 1 === totalLength
          //       ? Colors.accordionBorderColor
          //       : Colors.white,
          // },
        ]}
        key={i}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            borderBottomWidth: 1,
            borderBottomColor: Colors.accDividerColor,
            paddingBottom: 10,
            paddingHorizontal: 5,
          }}
        >
          <View style={{ flex: 7, justifyContent: "center" }}>
            <TextComponent style={{ fontSize: 14 }} type={FontType.BOLD}>
              {data.name}
            </TextComponent>
          </View>
          <View
            style={{
              fontSize: 15,
              flex: 3,
              backgroundColor: Colors.white,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.accordionBorderColor,
                borderRadius: 50,
                overflow: "hidden",
              }}
            >
              <Ripple>
                <View style={{ backgroundColor: Colors.white, padding: 5 }}>
                  <IconComponent
                    type={IconType.AntDesign}
                    name={"minus"}
                    style={{}}
                  ></IconComponent>
                </View>
              </Ripple>
            </View>
            <TextComponent>{data.value}</TextComponent>
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.accordionBorderColor,
                borderRadius: 50,
                overflow: "hidden",
              }}
            >
              <Ripple>
                <View style={{ backgroundColor: Colors.white, padding: 5 }}>
                  <IconComponent
                    type={IconType.AntDesign}
                    name={"plus"}
                    style={{}}
                  ></IconComponent>
                </View>
              </Ripple>
            </View>
          </View>
        </View>
      </View>
    ));
  };

  render() {
    const {
      ActiveTab,
      SelectedDate,
      LocationName,
      DaysCount,
      ShowDates,
    } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.staysBackground,
          // paddingTop: Platform.OS === "ios" ? 20 : 0,
        }}
      >
        <View
          style={{
            height: 60,
            flexDirection: "row",
            backgroundColor: Colors.white,
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingTop: Platform.OS === "ios" ? 20 : 0,
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <IconComponent size={15} type={IconType.AntDesign} name="left" />
          </TouchableOpacity>
          <TextComponent type={FontType.BOLD} style={{ fontSize: 17 }}>
            Room Filters
          </TextComponent>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.goBack()}
          >
            <TextComponent
              type={FontType.BOLD}
              style={{ fontSize: 17, color: Colors.cancelblue }}
            >
              Done
            </TextComponent>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 5 }}>{this._renderContent()}</View>
      </View>
    );
  }
}
export default IOSRoomFilter;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 20,
  },
  header: {
    backgroundColor: Colors.white,
    // padding: 10,
    paddingVertical: 5,
    flexDirection: "row",
    borderColor: Colors.accordionBorderColor,
    borderWidth: 1,
    overflow: "hidden",
  },
  headerText: {
    textAlign: "left",
    fontSize: 13,
    paddingVertical: 8,
    paddingLeft: 10,
  },
  content: {
    padding: 10,
    backgroundColor: Colors.white,
    borderColor: Colors.accordionBorderColor,
    // borderWidth: 1,
    borderTopWidth: 0,
    flexDirection: "row",
  },
  active: {
    backgroundColor: "rgba(255,255,255,1)",
  },
  inactive: {
    backgroundColor: "rgba(245,252,255,1)",
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  selector: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  activeSelector: {
    fontWeight: "bold",
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center",
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
