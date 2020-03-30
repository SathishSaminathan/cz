import React from 'react';
import {View, TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import TextComponent from '../components/Shared/TextComponent';
import {Colors} from '../constants/ThemeConstants';
import IconComponent from '../components/Shared/IconComponent';
import {IconType} from '../constants/AppConstants';

const TabBarButton = ({state, descriptors, navigation}) => {
  console.log('state, descriptors, navigation', state, descriptors, navigation);
  //   console.log(props, 'props');
  //   const {routeName, onPress, focused} = props;
  const iconMap = {
    Home: 'home',
    Profile: 'user',
    Wishlist: 'heart',
    MapView: 'map',
    Program: 'credit-card',
    Settings: 'settings',
    Fashion: 'layout',
    Beauty: 'instagram',
    Chat: 'message-square',
    Notifications: 'notification',
  };
  return (
    <View style={{flexDirection: 'row', height: 50}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          //   <TouchableOpacity
          //     accessibilityRole="button"
          //     accessibilityStates={isFocused ? ['selected'] : []}
          //     accessibilityLabel={options.tabBarAccessibilityLabel}
          //     testID={options.tabBarTestID}
          //     onPress={onPress}
          //     onLongPress={onLongPress}
          //     style={{flex: 1}}>
          //     <TextComponent style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</TextComponent>
          //   </TouchableOpacity>
          <TouchableNativeFeedback
            // background={TouchableNativeFeedback.Ripple('red')}
            // containerStyle={{
            //   backgroundColor: Colors.red,
            // }}
            delayPressIn={0}
            onPress={onPress}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconComponent
                type={IconType.AntDesign}
                name={iconMap[label]}
                size={isFocused ? 25 : 25}
                style={[
                  isFocused && {
                    // backgroundColor: Colors.primaryThemeColor,
                    // padding: 8,
                    borderRadius: 10,
                    // elevation: 10,
                  },
                  {alignSelf: 'center'},
                ]}
                color={isFocused ? Colors.darkGrey : Colors.lightGrey}
              />
              {/* <TextComponent
                style={{
                  color: isFocused
                    ? Colors.primaryThemeColor
                    : Colors.lightGrey,
                  fontSize: 12,
                }}>
                {label}
              </TextComponent> */}
            </View>
          </TouchableNativeFeedback>
        );
      })}
    </View>
  );
};

export default TabBarButton;
