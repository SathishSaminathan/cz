import * as React from "react";
import { View, Platform, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Colors } from "../constants/ThemeConstants";
import TextComponent from "../components/Shared/TextComponent";
import Status from "./Account/Status";
import Account from "./Account/Account";
import HeaderComponent from "../components/Shared/HeaderComponent";
import IOSProfile from "./IOSProfile";

const initialLayout = { width: Dimensions.get("window").width };

const Profile = (pageProps) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Status", title: "Status" },
    { key: "Account", title: "Account" },
  ]);

  const renderScene = SceneMap({
    Status: (props) => <Status {...props} {...pageProps} />,
    Account: (props) => <Account {...props} {...pageProps} />,
  });

  const updateRoute = (newIdx) => {
    setIndex(newIdx);
    // alert('hai', newIdx);
  };

  const renderLabel = ({ route }) => (
    <View>
      <TextComponent
        style={{
          fontFamily: "Proxima Nova Bold",
          fontSize: 15,
          color: Colors.tabText,
          paddingVertical: 10,
        }}
      >
        {route.title}
      </TextComponent>
    </View>
  );

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

  return Platform.OS === "ios" ? (
    <IOSProfile {...pageProps} />
  ) : (
    <View style={{ flex: 1 }}>
      {/* <HeaderComponent title="Profile" {...pageProps} hasBack/> */}
      <TabView
        navigationState={{ index, routes }}
        renderTabBar={renderHeader}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
};

export default Profile;
