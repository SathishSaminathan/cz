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

const Stack = createStackNavigator();

function MyStack() {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <Stack.Navigator initialRouteName="Signup" headerMode="none">
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

export {MyStack};
