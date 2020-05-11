import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  TextInput,
} from "react-native";
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

const data = [
  {
    title: "Fingerprint",
    icon: "home-outline",
    desc: "Use Fingerprint to sign in to your Dream account.",
    enabled: true,
  },
  {
    title: "Face Recognition",
    icon: "television",
    desc: "Use Face recognition feature to sign in to your Dream account.",
  },
  {
    title: "Extra Security",
    icon: "television",
    desc:
      "You can require Fingerprint after a set time, even while you're already signed in.",
  },
];
const PreferredTravelPartners = (props) => (
  <View style={{ flex: 1, backgroundColor: Colors.white }}>
    <HeaderComponent {...props} hasBack isDark twoOnly>
      <TextComponent style={{ fontSize: 25, color: Colors.white }}>
        Preferred Travel Partners
      </TextComponent>
    </HeaderComponent>
    <View
      style={{ padding: 10, paddingHorizontal: 20, color: Colors.textBlack }}
    >
      <TextComponent>
        Exchange Hilton Honors Points for airline miles or rail points with
        partners that participate in our points exchange program. Add preferred
        travel partners below.
      </TextComponent>
      <View style={{ paddingVertical: 15 }}>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: Colors.staysIcon,
            borderRadius: 5,
            flexDirection: "row",
            paddingRight: 8,
            // paddingVertical: 10,
            marginBottom: 5,
          }}
        >
          <View
            style={{
              flex: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconComponent
              type={IconType.MaterialCommunityIcons}
              name={"airplane"}
              style={{ fontSize: 25 }}
            />
          </View>
          <View style={{ flex: 8 }}>
            <ModalDropdown
              dropdownStyle={{
                // backgroundColor: 'red',
                width: "40%",
                height: 75,
              }}
              dropdownTextStyle={{
                fontFamily: "Proxima Nova Bold",
                fontSize: 13,
              }}
              options={["Visa", "Master"]}
            >
              <View
                style={{
                  borderRadius: 5,
                  //   borderWidth: 1,
                  borderColor: Colors.accordionBorderColor,
                  paddingHorizontal: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TextComponent
                  style={{
                    fontSize: 15,
                    paddingVertical: 15,
                    color: Colors.searchText,
                  }}
                >
                  Select a type*
                </TextComponent>
                <IconComponent type={IconType.AntDesign} name="down" />
              </View>
            </ModalDropdown>
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: Colors.staysIcon,
            borderRadius: 5,
            flexDirection: "row",
            paddingRight: 8,
            // paddingVertical: 10,
            marginBottom: 5,
          }}
        >
          <View
            style={{
              flex: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconComponent
              type={IconType.MaterialCommunityIcons}
              name={"dialpad"}
              style={{ fontSize: 25 }}
            />
          </View>
          <View style={{ flex: 8, paddingVertical: 8 }}>
            <TextInput placeholder="Enter Member Number*" />
          </View>
        </View>
        <View
          style={{
            alignSelf: "center",
            width: "35%",
            marginTop: 20,
          }}
        >
          <ButtonComponent
            borderRadius={50}
            style={{
              fontSize: 13,
              backgroundColor: Colors.themeBlack,
              color: Colors.white,
              // height: 40,
            }}
          >
            Update
          </ButtonComponent>
        </View>
      </View>
    </View>
    <PoweredBY />
  </View>
);

export default PreferredTravelPartners;
