import React from "react";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";

import { Colors } from "../../constants/ThemeConstants";
import IconComponent from "../../components/Shared/IconComponent";
import PoweredBy from "../../components/Shared/PoweredBy";
import { IconType, FontType } from "../../constants/AppConstants";
import TextComponent from "../../components/Shared/TextComponent";
import TextInputComponent from "../../components/Shared/TextInputComponent";
import Divider from "../../components/Shared/Divider";

const SearchLocation = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 5,
            paddingHorizontal: 22,
            alignItems: "center",
          }}
        >
          <IconComponent
            style={{ color: Colors.staysIcon, fontSize: 20, paddingRight: 10 }}
            type={IconType.AntDesign}
            name="search1"
          />
          <TextInputComponent
            style={{ margin: 0 }}
            placeholder="Search your Location"
          />
        </View>
        <Divider style={{ height: 1, width: "90%", alignSelf: "center" }} />
      </View>
      <ScrollView>
        {[
          "Nashville, TN",
          "Berlin",
          "London, United Kingdom",
          // 'Nashville, TN',
          // 'Berlin',
          // 'London, United Kingdom',
          // 'Nashville, TN',
          // 'Berlin',
          // 'London, United Kingdom',
          // 'Nashville, TN',
          // 'Berlin',
          // 'London, United Kingdom',
        ].map((v, i) => (
          // <TouchableNativeFeedback
          //   key={i}
          //   onPress={() => {
          //     v == "Nashville, TN" && props.setLocationName(v);
          //   }}
          // >
          <TouchableOpacity
            key={i}
            onPress={() => {
              // v == 'Nashville, TN' && props.changeRoute(1);
              v == "Nashville, TN" && props.setLocationName(v);
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 20,
                paddingHorizontal: 22,
                alignItems: "center",
              }}
            >
              <IconComponent
                style={{
                  color: Colors.staysIcon,
                  fontSize: 20,
                  paddingRight: 15,
                }}
                type={IconType.Entypo}
                name="back-in-time"
              />
              <TextComponent type={FontType.BOLD} style={{ fontSize: 16 }}>
                {v}
              </TextComponent>
            </View>
            <Divider style={{ height: 1, width: "90%", alignSelf: "center" }} />
          </TouchableOpacity>
          // </TouchableNativeFeedback>
        ))}
        <PoweredBy />
      </ScrollView>
    </View>
  );
};

export default SearchLocation;
