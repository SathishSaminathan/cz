import React from "react";
import {
  View,
  ScrollView,
  TouchableNativeFeedback,
  Linking,
  TouchableOpacity,
} from "react-native";

import { Colors } from "../../constants/ThemeConstants";
import TextComponent from "../../components/Shared/TextComponent";
import ButtonComponent from "../../components/Shared/ButtonComponent";
import { FontType } from "../../constants/AppConstants";
import { Images } from "../../assets/images";
import HeaderComponent from "../../components/Shared/HeaderComponent";
import ImageComponent from "../../components/Shared/ImageComponent";
import PoweredBY from "../../components/Shared/PoweredBy";
import Ripple from "react-native-material-ripple";

const data = [
  {
    image: Images.uberLogo,
    desc: "Get 20% off on Uber",
    color: Colors.themeBlack,
    app: "https://m.uber.com/ul/",
  },
  {
    image: Images.lyft,
    desc: "Get 30% off on Lyft",
    color: Colors.pink,
    app: "https://lyft.com/ride?id=lyft",
  },
];

const ChooseRide = (props) => (
  <View style={{ flex: 1, backgroundColor: Colors.staysBackground }}>
    <HeaderComponent title="Choose Your Ride" hasBack {...props} />
    <ScrollView
      contentContainerStyle={{
        alignItems: "center",
        flex: 1,
      }}
    >
      {data.map((data, i) => (
        <Ripple
          onPress={() => Linking.openURL(data.app)}
          key={i}
          style={{
            width: "96%",
            height: 200,
            borderRadius: 30,
            overflow: "hidden",
            elevation: 10,
            marginTop: 20,
          }}
        >
          {/* <TouchableNativeFeedback
            onPress={() => Linking.openURL(data.app)}> */}
          <View
            style={{
              flex: 1,
              backgroundColor: data.color,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <View style={{ height: 35, width: 100 }}>
                <ImageComponent source={data.image} resizeMode="contain" />
              </View>
              <TextComponent
                style={{ fontSize: 17, color: Colors.white, paddingTop: 10 }}
                type={FontType.BOLD}
              >
                {data.desc}{" "}
              </TextComponent>
            </View>
          </View>
          {/* </TouchableNativeFeedback> */}
        </Ripple>
      ))}
      <PoweredBY />
    </ScrollView>
  </View>
);

export default ChooseRide;
