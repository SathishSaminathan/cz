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
import PoweredBy from "../../components/Shared/PoweredBy";
import { Images } from "../../assets/images";
import IconComponent from "../../components/Shared/IconComponent";
import PhoneCall from "../../components/Shared/PhoneCall";
import Ripple from "react-native-material-ripple";

const data = [
  {
    content: "+1-615-622-0600",
    icon: "phone",
  },
  {
    content: "Feedback",
    icon: "message-text-outline",
    route: "Feedback",
  },
];
const CustomerService = (props) => {
  const Call = new PhoneCall();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <HeaderComponent {...props} hasBack isDark>
        <ImageComponent
          source={Images.Logo}
          style={{ width: 120, height: 90 }}
          resizeMode="contain"
        />
      </HeaderComponent>
      <View style={{ padding: 20, paddingVertical: 10 }}>
        <TextComponent style={{ fontSize: 22 }} type={FontType.BOLD}>
          Customer Service
        </TextComponent>
        <View style={{ paddingVertical: 5 }}>
          {data.map((data, i) => (
            <Ripple
              style={{
                marginBottom: 5,
              }}
              key={i}
              onPress={() =>
                data.route
                  ? props.navigation.navigate(data.route)
                  : Call.makeCall(data.content)
              }
            >
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: Colors.staysIcon,
                  borderRadius: 5,
                  flexDirection: "row",
                  paddingRight: 8,
                  paddingVertical: 10,
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
                    name={data.icon}
                    style={{ fontSize: 25 }}
                  />
                </View>

                <View style={{ flex: 8 }}>
                  {/* <TouchableOpacity> */}
                  <TextComponent style={{ fontSize: 17 }}>
                    {data.content}
                  </TextComponent>
                  {/* </TouchableOpacity> */}
                </View>
              </View>
            </Ripple>
          ))}
        </View>
      </View>
      <PoweredBy />
    </View>
  );
};

export default CustomerService;
