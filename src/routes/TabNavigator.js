import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import IconComponent from '../components/Shared/IconComponent';
import {IconType} from '../constants/AppConstants';
import {Button} from 'react-native';
import TabBarButton from './TabBarButton';
import Stays from '../screens/Stays';
import {HomeStack, ProfileStack, AddCardStack, StaysStack} from './StackNavigator';
import Offers from '../screens/Offers';
import PaymentSuccess from '../screens/Home/PaymentSuccess';
import AddCard from '../screens/Home/AddCard';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return (
            <IconComponent
              type={IconType.Ionicons}
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
      tabBar={props => <TabBarButton {...props} />}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Stays" component={StaysStack} />
      <Tab.Screen name="Offers" component={Offers} />
      <Tab.Screen name="Profile" component={ProfileStack} />
      <Tab.Screen
        name="AddCardStack"
        component={AddCardStack}
        options={{
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
}

export {TabNavigator};
