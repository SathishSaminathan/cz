import React from 'react';
import {View, TextInput} from 'react-native';
import {Colors} from '../../constants/ThemeConstants';
import HeaderComponent from '../../components/Shared/HeaderComponent';
import TextComponent from '../../components/Shared/TextComponent';
import {FontType, IconType} from '../../constants/AppConstants';
import IconComponent from '../../components/Shared/IconComponent';
import PoweredBY from '../../components/Shared/PoweredBy';
import ButtonComponent from '../../components/Shared/ButtonComponent';

const recommendations = [
  {
    desc: 'Do not use your email address as your username.',
  },
  {
    desc:
      'Use different login credentials for Hilton Honors than you use on other websites and mobile applications.',
  },
  {
    desc: 'Always check your account regularly.',
  },
  {
    desc: 'Promptly report any suspicious activity to us',
  },
];
const Favorites = (props) => (
  <View style={{flex: 1, backgroundColor: Colors.white}}>
    <HeaderComponent {...props} hasBack isDark twoOnly>
      <TextComponent style={{fontSize: 25, color: Colors.white}}>
        Username
      </TextComponent>
    </HeaderComponent>
    <View style={{width: '90%', alignSelf: 'center', paddingTop: 20}}>
      <View>
        <TextComponent type={FontType.BOLD} style={{fontSize: 17}}>
          Update your username
        </TextComponent>
        <View
          style={{
            borderWidth: 1,
            borderColor: Colors.warningRed,
            borderRadius: 5,
            // padding: 10,
            marginVertical: 10,
            flexDirection: 'row',
            // backgroundColor: 'red',
          }}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <IconComponent
              type={IconType.MaterialCommunityIcons}
              name="account-circle-outline"
              style={{fontSize: 18}}
            />
          </View>
          <View style={{flex: 9}}>
            <TextInput />
          </View>
        </View>
        <TextComponent style={{color: Colors.warningRed}}>
          Username must begin with a letter. Username can be between 4 and 32
          characters, without special characters or spaces except for period (),
          underscore(_), or at(@) symbol.
        </TextComponent>
      </View>
      <View
        style={{
          marginTop: 20,
          borderWidth: 1,
          borderColor: Colors.accordionBorderColor,
          borderRadius: 5,
          padding: 20,
          paddingVertical: 10,
        }}>
        <TextComponent type={FontType.BOLD} style={{fontSize: 17}}>
          We recommend that you
        </TextComponent>
        <View>
          {recommendations.map((v, i) => (
            <View key={i} style={{flexDirection: 'row'}}>
              <TextComponent
                style={{color: Colors.searchText, paddingRight: 5}}>
                {i + 1}.
              </TextComponent>
              <TextComponent style={{color: Colors.textBlack}}>
                {v.desc}
              </TextComponent>
            </View>
          ))}
        </View>
      </View>
      <View style={{width: '30%', alignSelf: 'center', marginTop: 20}}>
        <ButtonComponent
          borderRadius={50}
          style={{
            backgroundColor: Colors.themeBlack,
            fontSize: 14,
            color: Colors.white,
            height: 34,
            elevation: 5
          }}>
          Update
        </ButtonComponent>
      </View>
    </View>
    <PoweredBY />
  </View>
);

export default Favorites;
