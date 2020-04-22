import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {Colors} from '../../constants/ThemeConstants';
import HeaderComponent from '../../components/Shared/HeaderComponent';
import TextComponent from '../../components/Shared/TextComponent';
import {FontType, IconType} from '../../constants/AppConstants';
import ImageComponent from '../../components/Shared/ImageComponent';
import {Images} from '../../assets/images';
import IconComponent from '../../components/Shared/IconComponent';
import PoweredBY from '../../components/Shared/PoweredBy';

const data = [
  {
    icon: 'home-outline',
    desc: 'Rooms',
  },
  {
    icon: 'television',
    desc: 'Streaming Apps & TV Channels',
  },
];
const Favorites = (props) => (
  <View style={{flex: 1, backgroundColor: Colors.white}}>
    <HeaderComponent {...props} hasBack isDark>
      <TextComponent style={{fontSize: 30, color: Colors.white}}>
        Favorites
      </TextComponent>
    </HeaderComponent>
    <View style={{padding: 20, paddingVertical: 10}}>
      <View style={{paddingVertical: 5}}>
        {data.map((data, i) => (
          <TouchableNativeFeedback key={i}>
            <View
              key={i}
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: Colors.staysIcon,
                borderRadius: 5,
                flexDirection: 'row',
                paddingRight: 8,
                height: 50,
                // marginBottom: 5,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <IconComponent
                  type={IconType.MaterialCommunityIcons}
                  name={data.icon}
                  style={{fontSize: 25, color: Colors.searchText}}
                />
              </View>
              <View style={{flex: 7}}>
                <TextComponent
                  style={{fontSize: 16, paddingLeft: 5}}
                  type={FontType.BOLD}>
                  {data.desc}
                </TextComponent>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <IconComponent
                  type={IconType.AntDesign}
                  name={'right'}
                  style={{fontSize: 12, color: Colors.searchText}}
                />
              </View>
            </View>
          </TouchableNativeFeedback>
        ))}
      </View>
    </View>
    <PoweredBY />
  </View>
);

export default Favorites;
