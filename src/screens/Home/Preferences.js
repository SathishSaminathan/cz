import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  ScrollView,
} from "react-native";
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from "react-native-check-box";
import ModalDropdown from "react-native-modal-dropdown";
import { Colors } from "../../constants/ThemeConstants";
import HeaderComponent from "../../components/Shared/HeaderComponent";
import TextComponent from "../../components/Shared/TextComponent";
import { FontType, IconType } from "../../constants/AppConstants";
import ImageComponent from "../../components/Shared/ImageComponent";
import { Images } from "../../assets/images";
import IconComponent from "../../components/Shared/IconComponent";
import SwitchComponent from "../../components/Shared/SwitchComponent";
import PoweredBY from "../../components/Shared/PoweredBy";
import ButtonComponent from "../../components/Shared/ButtonComponent";
import { widthPerc } from "../../helpers/styleHelper";

let data = [
  {
    name: "High Floor",
    checked: false,
  },
  {
    name: "Low Floor",
    checked: false,
  },
  {
    name: "Away from Highway",
    checked: false,
  },
  {
    name: "Close to Elevator",
    checked: false,
  },
  // {
  //   name: 'Select your floor number',
  // },
];
class Preferences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startsWith: 0,
      endsWith: 0,
      floorNumber: 1,
      data: data,
    };
  }

  handleCheck = (name, checked) => {
    // console.log(name, checked);
    data = data.map((data) => {
      if (name === data.name) {
        return {
          ...data,
          checked,
        };
      } else return data;
    });
    this.setState({
      data,
    });
  };

  render() {
    const { startsWith, endsWith, data, floorNumber } = this.state;
    let temp = JSON.parse(JSON.stringify(data));
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <HeaderComponent {...this.props} hasBack isDark twoOnly>
          <TextComponent style={{ fontSize: 25, color: Colors.white }}>
            Room Preferences
          </TextComponent>
        </HeaderComponent>
        <ScrollView>
          <View style={{ paddingVertical: 10, alignItems: "center" }}>
            <View style={{ width: widthPerc(90) }}>
              <TextComponent style={{ color: Colors.textBlack }}>
                Your selections will determine results when you search for rooms
              </TextComponent>
              <View style={{ paddingTop: 10 }}>
                <TextComponent style={{ fontSize: 15 }} type={FontType.BOLD}>
                  Preferences
                </TextComponent>
                <View
                  style={{
                    marginTop: 10,
                    borderWidth: 0.5,
                    borderRadius: 5,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                  }}
                >
                  {temp.splice(0, 2).map((data, i) => (
                    <View
                      key={i}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingVertical: 8,
                        borderBottomWidth: 0.5,
                        borderColor: Colors.staysIcon,
                      }}
                    >
                      <View style={{ flex: 1, alignItems: "center" }}>
                        <CheckBox
                          onClick={() =>
                            this.handleCheck(data.name, !data.checked)
                          }
                          isChecked={data.checked}
                        />
                      </View>
                      <View style={{ flex: 9 }}>
                        <TextComponent
                          style={{ fontSize: 13, paddingLeft: "5%" }}
                        >
                          {data.name}
                        </TextComponent>
                      </View>
                    </View>
                  ))}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingVertical: 8,
                      borderBottomWidth: 0.5,
                      borderColor: Colors.staysIcon,
                    }}
                  >
                    <View style={{ flex: 1, alignItems: "center" }}>
                      <CheckBox
                        onClick={() => console.log("onClick")}
                        value={false}
                      />
                    </View>
                    <View
                      style={{
                        flex: 9,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextComponent
                        style={{ fontSize: 13, paddingLeft: "5%" }}
                      >
                        Number Starts with
                      </TextComponent>
                      <ModalDropdown
                        onSelect={(v, startsWith) =>
                          this.setState({ startsWith })
                        }
                        dropdownStyle={{
                          // backgroundColor: 'red',
                          width: "15%",
                          //   height: 300,
                        }}
                        dropdownTextStyle={{
                          fontFamily: "Proxima Nova Bold",
                          fontSize: 13,
                          textAlign: "center",
                          color: Colors.themeBlack,
                        }}
                        options={Array(10)
                          .fill("")
                          .map((data, i) => i)}
                      >
                        <View
                          style={{
                            borderRadius: 5,
                            // borderWidth: 1,
                            // borderColor: Colors.accordionBorderColor,
                            paddingHorizontal: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <TextComponent
                            style={{
                              fontSize: 15,
                              paddingRight: 10,
                              //   paddingVertical: 15,
                              //   color: Colors.searchText,
                            }}
                          >
                            {startsWith}
                          </TextComponent>
                          <IconComponent
                            type={IconType.AntDesign}
                            name="down"
                          />
                        </View>
                      </ModalDropdown>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingVertical: 8,
                      borderBottomWidth: 0.5,
                      borderColor: Colors.staysIcon,
                    }}
                  >
                    <View style={{ flex: 1, alignItems: "center" }}>
                      <CheckBox
                        onClick={() => console.log("onClick")}
                        value={false}
                      />
                    </View>
                    <View
                      style={{
                        flex: 9,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextComponent
                        style={{ fontSize: 13, paddingLeft: "5%" }}
                      >
                        Number Ends with
                      </TextComponent>
                      <ModalDropdown
                        onSelect={(v, endsWith) => this.setState({ endsWith })}
                        dropdownStyle={{
                          // backgroundColor: 'red',
                          width: "15%",
                          //   height: 300,
                        }}
                        dropdownTextStyle={{
                          fontFamily: "Proxima Nova Bold",
                          fontSize: 13,
                          textAlign: "center",
                          color: Colors.themeBlack,
                        }}
                        options={Array(10)
                          .fill("")
                          .map((data, i) => i)}
                      >
                        <View
                          style={{
                            borderRadius: 5,
                            // borderWidth: 1,
                            // borderColor: Colors.accordionBorderColor,
                            paddingHorizontal: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <TextComponent
                            style={{
                              fontSize: 15,
                              paddingRight: 10,
                              //   paddingVertical: 15,
                              //   color: Colors.searchText,
                            }}
                          >
                            {endsWith}
                          </TextComponent>
                          <IconComponent
                            type={IconType.AntDesign}
                            name="down"
                          />
                        </View>
                      </ModalDropdown>
                    </View>
                  </View>
                  {temp.splice(0, 3).map((data, i) => (
                    <View
                      key={i}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingVertical: 8,
                        borderBottomWidth: 0.5,
                        borderColor: Colors.staysIcon,
                      }}
                    >
                      <View style={{ flex: 1, alignItems: "center" }}>
                        <CheckBox
                          onClick={() =>
                            this.handleCheck(data.name, !data.checked)
                          }
                          isChecked={data.checked}
                        />
                      </View>
                      <View style={{ flex: 9 }}>
                        <TextComponent
                          style={{ fontSize: 13, paddingLeft: "5%" }}
                        >
                          {data.name}
                        </TextComponent>
                      </View>
                    </View>
                  ))}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingVertical: 8,
                      borderBottomWidth: 0.5,
                      borderColor: Colors.staysIcon,
                    }}
                  >
                    <View style={{ flex: 1, alignItems: "center" }}>
                      <CheckBox
                        onClick={() => console.log("onClick")}
                        value={false}
                      />
                    </View>
                    <View
                      style={{
                        flex: 9,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextComponent
                        style={{ fontSize: 13, paddingLeft: "5%" }}
                      >
                        Select your floor number
                      </TextComponent>
                      <ModalDropdown
                        onSelect={(v, floorNumber) =>
                          this.setState({ floorNumber })
                        }
                        dropdownStyle={{
                          // backgroundColor: 'red',
                          width: "15%",
                          //   height: 300,
                        }}
                        dropdownTextStyle={{
                          fontFamily: "Proxima Nova Bold",
                          fontSize: 13,
                          textAlign: "center",
                          color: Colors.themeBlack,
                        }}
                        options={Array(10)
                          .fill("")
                          .map((data, i) => i + 1)}
                      >
                        <View
                          style={{
                            borderRadius: 5,
                            // borderWidth: 1,
                            // borderColor: Colors.accordionBorderColor,
                            paddingHorizontal: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <TextComponent
                            style={{
                              fontSize: 15,
                              paddingRight: 10,
                              //   paddingVertical: 15,
                              //   color: Colors.searchText,
                            }}
                          >
                            {floorNumber}
                          </TextComponent>
                          <IconComponent
                            type={IconType.AntDesign}
                            name="down"
                          />
                        </View>
                      </ModalDropdown>
                    </View>
                  </View>
                </View>
              </View>
              <TextComponent
                style={{ paddingVertical: 10, color: Colors.textBlack }}
              >
                Please indicate your preferences below (don't worry, this won't
                limit the room options we show you). We can't guarantee
                availability, but we'll try our best!
              </TextComponent>
            </View>
          </View>
          <View
            style={{
              alignSelf: "center",
              width: "35%",
              marginTop: 5,
            }}
          >
            <ButtonComponent
              onPress={() => this.props.navigation.goBack()}
              borderRadius={50}
              style={{
                fontSize: 13,
                backgroundColor: Colors.themeBlack,
                color: Colors.white,
                // height: 40,
              }}
            >
              Apply
            </ButtonComponent>
          </View>
          <PoweredBY />
        </ScrollView>
      </View>
    );
  }
}

export default Preferences;
