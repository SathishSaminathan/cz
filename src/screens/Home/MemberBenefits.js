import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Colors} from '../../constants/ThemeConstants';
import TextComponent from '../../components/Shared/TextComponent';
import ButtonComponent from '../../components/Shared/ButtonComponent';
import Upcoming from '../Stays/Upcoming';
import Past from '../Stays/Past';
import Cancelled from '../Stays/Cancelled';
import SearchLocation from './SearchLocation';
import PickDate from './PickDate';
import HeaderComponent from '../../components/Shared/HeaderComponent';
import Silver from '../MemberBenefits/Silver';
import Gold from '../MemberBenefits/Gold';
import Diamond from '../MemberBenefits/Diamond';

const initialLayout = {width: Dimensions.get('window').width};

const MemberBenefits = props => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Silver', title: 'Silver'},
    {key: 'Gold', title: 'Gold'},
    {key: 'Diamond', title: 'Diamond'},
  ]);

  const renderScene = SceneMap({
    Silver: props => <Silver changeRoute={updateRoute} {...props} />,
    Gold: props => <Gold changeRoute={updateRoute} {...props} />,
    Diamond: props => <Diamond changeRoute={updateRoute} {...props} />,
  });

  const updateRoute = newIdx => {
    setIndex(newIdx);
    // alert('hai', newIdx);
  };

  const renderLabel = ({route}) => (
    <View>
      <TextComponent
        style={{
          fontFamily: 'Proxima Nova Bold',
          fontSize: 15,
          color: Colors.tabText,
          paddingVertical: 10,
        }}>
        {route.title}
      </TextComponent>
    </View>
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
      <HeaderComponent title="Member Benefits" hasBack {...props} />
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
export default MemberBenefits;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
