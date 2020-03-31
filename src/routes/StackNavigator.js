import React from 'react';
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import GetStarted from '../screens/GetStarted';
import Signup from '../screens/auth/Signup';
import Login from '../screens/auth/Login';
import DrawerComponent from '../screens/Home/DrawerComponent';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="GetStarted" headerMode="none">
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        // options={{
        //   title: 'Profile',
        //   cardStyleInterpolator:
        //     CardStyleInterpolators.forRevealFromBottomAndroid,
        // }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
}
function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="GetStarted"
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        animationEnabled:true
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        // options={{
        //   title: 'Profile',
        //   cardStyleInterpolator:
        //     CardStyleInterpolators.forRevealFromBottomAndroid,
        // }}
      />
      <Stack.Screen
        name="Drawer"
        component={DrawerComponent}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
}

export {MyStack, HomeStack};
