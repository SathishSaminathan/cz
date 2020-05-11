import React from "react";
import { Text, View } from "react-native";
import TextComponent from "./TextComponent";
import { FontType, IconType } from "../../constants/AppConstants";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconComponent from "./IconComponent";
import { Colors } from "../../constants/ThemeConstants";

const IOSHeader = ({ navigation, title, backText = "Done" }) => (
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
    <TouchableOpacity onPress={() => props.navigation.goBack()}>
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
);

export default IOSHeader;
