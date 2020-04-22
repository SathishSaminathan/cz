import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Colors} from '../constants/ThemeConstants';
import TextComponent from '../components/Shared/TextComponent';
import Upcoming from './Stays/Upcoming';
import Past from './Stays/Past';
import Cancelled from './Stays/Cancelled';
import HeaderComponent from '../components/Shared/HeaderComponent';

const initialLayout = {width: Dimensions.get('window').width};

const Stays = props => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Upcoming', title: 'Upcoming'},
    {key: 'Past', title: 'Past'},
    {key: 'Cancelled', title: 'Cancelled'},
  ]);

  const renderScene = SceneMap({
    Upcoming: () => <Upcoming {...props} />,
    Past: () => <Past {...props} />,
    Cancelled: () => <Cancelled {...props} />,
  });

  const renderLabel = ({route}) => (
    <TextComponent
      style={{
        fontFamily: 'Proxima Nova Bold',
        fontSize: 15,
        color: Colors.tabText,
        paddingVertical: 10,
      }}>
      {route.title}
    </TextComponent>
  );

  const renderHeader = props => (
    <TabBar
      // activeColor={Colors.primaryDarkThemeColor}
      // inactiveColor={Colors.grey}
      indicatorStyle={{backgroundColor: Colors.themeBlack, height: 1.5}}
      style={{backgroundColor: Colors.white}}
      renderLabel={renderLabel}
      {...props}
    />
  );

  return (
    <View style={{flex: 1}}>
      {/* <HeaderComponent {...props} hasBack title="Stays" /> */}
      <TabView
        navigationState={{index, routes}}
        renderTabBar={renderHeader}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
};
export default Stays;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
