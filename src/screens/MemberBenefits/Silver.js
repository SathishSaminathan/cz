import React from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";
import { Colors } from "../../constants/ThemeConstants";
import { Images } from "../../assets/images";
import TextComponent from "../../components/Shared/TextComponent";
import { FontType } from "../../constants/AppConstants";
import ButtonComponent from "../../components/Shared/ButtonComponent";
import PoweredBY from "../../components/Shared/PoweredBy";

const data = [
  "20% Elite Bonus",
  "Bottled Water ",
  "Elite Rollover Nights",
  "5th Night Free on Reward Stay",
  "Free WiFi",
  "Digital Check-In",
  "Digital Key",
  "Late Check-Out",
  "2nd Guest Stays Free",
];
const Silver = ({ params }) => (
  <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
      backgroundColor: Colors.white,
      paddingTop: 15,
    }}
  >
    <View
      style={{
        flex: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ width: 180, height: 180 }}>
        <ImageBackground
          source={Images.silver}
          resizeMode="contain"
          style={{
            width: undefined,
            height: undefined,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <TextComponent style={{ fontSize: 23, color: Colors.white }}>
              Silver
            </TextComponent>
            <TextComponent
              style={{ fontSize: 30, color: Colors.white }}
              type={FontType.BOLD}
            >
              MEMBER
            </TextComponent>
          </View>
        </ImageBackground>
      </View>
    </View>
    <View style={{ flex: 5, padding: 10 }}>
      <ButtonComponent
        style={{
          backgroundColor: Colors.themeBlack,
          color: Colors.white,
          fontFamily: "Proxima Nova Bold",
          height: 50,
        }}
        borderRadius={5}
      >
        Benefits
      </ButtonComponent>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: 15,
          justifyContent: "space-between",
        }}
      >
        {data.map((data, i) => (
          <View
            key={i}
            style={{
              width: "32%",
              borderWidth: 1,
              borderColor: Colors.silver,
              // height: 40,
              borderRadius: 5,
              marginBottom: 5,
              alignItems: "flex-start",
              justifyContent: "center",
              paddingHorizontal: 5,
            }}
          >
            <TextComponent style={{ fontSize: 13 }}>{data}</TextComponent>
          </View>
        ))}
      </View>
    </View>
    <View style={{ paddingVertical: 10 }}>
      <PoweredBY />
    </View>
  </ScrollView>
);

export default Silver;
