import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
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
import Ripple from "react-native-material-ripple";

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
const Security = (props) => (
  <View style={{ flex: 1, backgroundColor: Colors.white }}>
    <HeaderComponent {...props} hasBack isDark>
      <TextComponent style={{ fontSize: 30, color: Colors.white }}>
        Security
      </TextComponent>
    </HeaderComponent>
    <View style={{ paddingVertical: 10 }}>
      <View style={{ paddingVertical: 5 }}>
        {data.map((data, i) => (
          <Ripple key={i}>
            <View
              key={i}
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: Colors.staysIcon,
                borderRadius: 5,
                flexDirection: "row",
                paddingRight: 8,
                height: 80,
                // marginBottom: 5,
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}
            >
              <View style={{ flex: 7 }}>
                <TextComponent
                  style={{ paddingLeft: 5, fontSize: 15, paddingBottom: 5 }}
                  type={FontType.BOLD}
                >
                  {data.title}
                </TextComponent>
                <TextComponent
                  style={{ paddingLeft: 5, color: Colors.textBlack }}
                  type={FontType.BOLD}
                >
                  {data.desc}
                </TextComponent>
              </View>
              <View style={{ flex: 2, alignItems: "center" }}>
                <SwitchComponent
                  status={data.enabled || false}
                ></SwitchComponent>
              </View>
            </View>
          </Ripple>
        ))}
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
        borderRadius={50}
        style={{
          fontSize: 13,
          backgroundColor: Colors.themeBlack,
          color: Colors.white,
          // height: 40,
        }}
      >
        Confirm
      </ButtonComponent>
    </View>
    <PoweredBY />
  </View>
);

export default Security;
