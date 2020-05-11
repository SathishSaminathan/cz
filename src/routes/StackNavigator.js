import React from 'react';
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Stays from '../screens/Stays';
import GetStarted from '../screens/GetStarted';
import Signup from '../screens/auth/Signup';
import Login from '../screens/auth/Login';
import DrawerComponent from '../screens/Home/DrawerComponent';
import {TabNavigator} from './TabNavigator';
import Location from '../screens/Home/Location';
import LocationResults from '../screens/Home/LocationResults';
import RoomPreferences from '../screens/Home/RoomPreferences';
import Notification from '../screens/Home/Notification';
import ReferEarn from '../screens/Home/ReferEarn';
import ChooseRide from '../screens/Home/ChooseRide';
import MemberBenefits from '../screens/Home/MemberBenefits';
import AddCard from '../screens/Home/AddCard';
import PaymentSuccess from '../screens/Home/PaymentSuccess';
import HotelDetails from '../screens/Home/HotelDetails';
import BookHotel from '../screens/Home/BookHotel';
import MakeReservation from '../screens/Home/MakeReservation';
import Favorites from '../screens/Home/Favorites';
import Security from '../screens/Home/Security';
import CustomerService from '../screens/Home/CustomerService';
import PrivacyPolicy from '../screens/Home/PrivacyPolicy';
import EmailSubscriptions from '../screens/Home/EmailSubscriptions';
import PreferredTravelPartners from '../screens/Home/PreferredTravelPartners';
import RestaurantRecommendation from '../screens/Home/RestaurantRecommendation';
import OrderYourFood from '../screens/Home/OrderYourFood';
import AlfredLoyaltyInformation from '../screens/Home/AlfredLoyaltyInformation';
import Feedback from '../screens/Home/Feedback';
import ToiletriesRequest from '../screens/Home/ToiletriesRequest';
import Preferences from '../screens/Home/Preferences';
import CompletethePayment from '../screens/Home/CompletethePayment';
import Events from '../screens/Home/Events';
import PersonalInformation from '../screens/Account/PersonalInformation';
import UserName from '../screens/Account/UserName';
import IOSDate from '../screens/Home/IOSDate';
import IOSLocation from '../screens/Home/IOSLocation';
import IOSRoomFilter from '../screens/Home/IOSRoomFilter';

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
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
}

function DrawerStack() {
  return (
    <Stack.Navigator
      initialRouteName="Drawer"
      headerMode="none"
      screenOptions={
        {
          // gestureEnabled: true,
          // gestureDirection: 'horizontal',
          // animationEnabled: true,
        }
      }>
      <Stack.Screen
        name="Drawer"
        component={DrawerComponent}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="RoomPreferences"
        component={RoomPreferences}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ReferEarn"
        component={ReferEarn}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ChooseRide"
        component={ChooseRide}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="MemberBenefits"
        component={MemberBenefits}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="MakeReservation"
        component={MakeReservation}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Security"
        component={Security}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CustomerService"
        component={CustomerService}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="EmailSubscriptions"
        component={EmailSubscriptions}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="PreferredTravelPartners"
        component={PreferredTravelPartners}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="RestaurantRecommendation"
        component={RestaurantRecommendation}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="OrderYourFood"
        component={OrderYourFood}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="AlfredLoyaltyInformation"
        component={AlfredLoyaltyInformation}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ToiletriesRequest"
        component={ToiletriesRequest}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Preferences"
        component={Preferences}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Events"
        component={Events}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      headerMode="none"
      screenOptions={
        {
          // gestureEnabled: true,
          // gestureDirection: 'horizontal',
          // animationEnabled: true,
        }
      }>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Preferences"
        component={Preferences}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="MemberBenefits"
        component={MemberBenefits}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Security"
        component={Security}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="PersonalInformation"
        component={PersonalInformation}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="UserName"
        component={UserName}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
}

function StaysStack() {
  return (
    <Stack.Navigator
      initialRouteName="Stays"
      headerMode="none"
      screenOptions={
        {
          // gestureEnabled: true,
          // gestureDirection: 'horizontal',
          // animationEnabled: true,
        }
      }>
      <Stack.Screen
        name="Stays"
        component={Stays}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="HotelDetails"
        component={HotelDetails}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
}

function AddCardStack(props) {
  return (
    <Stack.Navigator initialRouteName="CompletethePayment" headerMode="none">
      <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="PaymentSuccess"
        component={PaymentSuccess}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="CompletethePayment"
        component={() => <CompletethePayment {...props} />}
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
      initialRouteName="Home"
      headerMode="none"
      screenOptions={
        {
          // gestureEnabled: true,
          // gestureDirection: 'horizontal',
          // animationEnabled: true,
        }
      }>
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
        component={DrawerStack}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Location"
        component={Location}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
      <Stack.Screen
        name="IOSLocation"
        component={IOSLocation}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
      <Stack.Screen
        name="IOSDate"
        component={IOSDate}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
      <Stack.Screen
        name="IOSRoomFilter"
        component={IOSRoomFilter}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
      <Stack.Screen
        name="LocationResults"
        component={LocationResults}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="RoomPreferences"
        component={RoomPreferences}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="HotelDetails"
        component={HotelDetails}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="BookHotel"
        component={BookHotel}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
}

export {MyStack, HomeStack, ProfileStack, AddCardStack, StaysStack};
