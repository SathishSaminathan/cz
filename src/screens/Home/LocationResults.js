import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Modal from "react-native-modal";
import FAB from "react-native-fab";
import { Colors } from "../../constants/ThemeConstants";
import TextComponent from "../../components/Shared/TextComponent";
import IconComponent from "../../components/Shared/IconComponent";
import ButtonComponent from "../../components/Shared/ButtonComponent";
import Upcoming from "../Stays/Upcoming";
import Past from "../Stays/Past";
import Cancelled from "../Stays/Cancelled";
import SearchLocation from "./SearchLocation";
import PickDate from "./PickDate";
import { IconType, FontType } from "../../constants/AppConstants";
import LocationResultList from "./LocationResultList";
import NearByEvents from "./NearByEvents";
import HeaderComponent from "../../components/Shared/HeaderComponent";
import RoomPreferences from "./RoomPreferences";
import Ripple from "react-native-material-ripple";
import IOSLocationResults from "./IOSLocationResults";

const initialLayout = { width: Dimensions.get("window").width };

const LocationResults = (props) => {
  const [index, setIndex] = React.useState(0);
  const [ModalVisible, setModalVisible] = React.useState(false);
  const [routes] = React.useState([
    { key: "LocationResultList", title: "Nashville Rooms" },
    { key: "NearByEvents", title: "Nearby Events" },
  ]);

  const renderScene = SceneMap({
    LocationResultList: () => (
      <LocationResultList changeRoute={updateRoute} {...props} />
    ),
    NearByEvents: () => <NearByEvents changeRoute={updateRoute} {...props} />,
  });

  const updateRoute = (newIdx) => {
    setIndex(newIdx);
  };

  const labels = ({ title }) => {
    switch (title) {
      case "Nearby Events":
        return (
          <View>
            <TextComponent
              style={{
                fontFamily: "Proxima Nova Bold",
                fontSize: 15,
                color: Colors.tabText,
                paddingVertical: 10,
              }}
            >
              {title}
            </TextComponent>
          </View>
        );

      default:
        return (
          <View style={{ flex: 1 }}>
            <TextComponent
              style={{
                fontFamily: "Proxima Nova Bold",
                fontSize: 15,
                color: Colors.tabText,
                paddingVertical: 0,
              }}
            >
              {title}
            </TextComponent>
            <TextComponent
              style={{
                fontFamily: "Proxima Nova Regular",
                fontSize: 13,
                color: Colors.tabText,
                paddingVertical: 5,
              }}
            >
              {props.route.params.date}
            </TextComponent>
          </View>
        );
    }
  };

  const renderLabel = ({ route }) => labels(route);

  const renderHeader = (props) => (
    <TabBar
      // activeColor={Colors.primaryDarkThemeColor}
      // inactiveColor={Colors.grey}
      indicatorStyle={{ backgroundColor: Colors.themeBlack, height: 1.5 }}
      style={{ backgroundColor: Colors.white }}
      renderLabel={renderLabel}
      {...props}
    />
  );

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 20 : 0,
        backgroundColor: Colors.white,
      }}
    >
      {Platform.OS === "ios" ? (
        <IOSLocationResults {...props} />
      ) : (
        <View style={{ flex: 1 }}>
          <HeaderComponent title="Search Results" hasBack {...props} />
          <TabView
            navigationState={{ index, routes }}
            renderTabBar={renderHeader}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
          />
        </View>
      )}
      <FAB
        buttonColor={Colors.themeBlack}
        iconTextColor="#FFFFFF"
        onClickAction={() => {
          setModalVisible(!ModalVisible);
        }}
        visible={index === 0}
        iconTextComponent={
          <IconComponent type={IconType.AntDesign} name="filter" />
        }
      />
      <Modal
        isVisible={ModalVisible}
        // animationOut="bounceOut"
        onBackButtonPress={() => setModalVisible(false)}
        style={{
          flex: 1,
          backgroundColor: Colors.white,
          padding: 0,
          margin: 0,
        }}
      >
        {/* <Reeo */}
        <View
          style={{
            height: 60,
            backgroundColor: Colors.white,
            // borderBottomWidth: 1,
            borderBottomColor: Colors.accordionBorderColor,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            elevation: 5,
            justifyContent:
              Platform.OS === "ios" ? "space-between" : "flex-start",
          }}
        >
          <Ripple
            rippleColor={Colors.white}
            onPress={() => setModalVisible(!ModalVisible)}
          >
            <View
              style={{
                width: 40,
                height: "100%",
                // alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
              }}
            >
              <IconComponent
                type={IconType.AntDesign}
                name="left"
                style={{ fontSize: 18 }}
              />
            </View>
          </Ripple>
          <TextComponent style={{ fontSize: 18 }} type={FontType.BOLD}>
            Room & Rates Filters
          </TextComponent>
          {Platform.OS === "ios" && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setModalVisible(false)}
            >
              <TextComponent
                type={FontType.BOLD}
                style={{ fontSize: 17, color: Colors.cancelblue }}
              >
                Done
              </TextComponent>
            </TouchableOpacity>
          )}
        </View>
        <RoomPreferences />
      </Modal>
    </View>
  );
};
export default LocationResults;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
