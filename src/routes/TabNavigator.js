import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import IconComponent from '../components/Shared/IconComponent';
import {IconType} from '../constants/AppConstants';
import {Button} from 'react-native';
import TabBarButton from './TabBarButton';
import Stays from '../screens/Stays';
import { HomeStack } from './StackNavigator';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
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
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Stays" component={Stays} />
      <Tab.Screen name="Offers" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export {TabNavigator};
