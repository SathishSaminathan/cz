import React from 'react';
import { View, ScrollView} from 'react-native';

import {Colors} from '../../constants/ThemeConstants';
import TextComponent from '../../components/Shared/TextComponent';
import ButtonComponent from '../../components/Shared/ButtonComponent';
import {FontType} from '../../constants/AppConstants';
import {Images} from '../../assets/images';
import HeaderComponent from '../../components/Shared/HeaderComponent';
import ImageComponent from '../../components/Shared/ImageComponent';

const ReferEarn = props => (
  <View style={{flex: 1, backgroundColor: Colors.staysBackground}}>
    <HeaderComponent title="Refer & Earn" hasBack {...props} />
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        flex: 1,
        paddingTop: 5,
      }}>
      <View
        style={{
          width: '96%',
          height: 400,
          backgroundColor: Colors.white,
          elevation: 1,
          borderRadius: 5,
          overflow: 'hidden',
        }}>
        <View style={{flex: 5}}>
          <View style={{flex: 8}}>
            <ImageComponent source={Images.referImage} resizeMode="contain" />
          </View>
          <View style={{flex: 2}}>
            <TextComponent
              style={{textAlign: 'center', fontSize: 17}}
              type={FontType.BOLD}>
              Refer a friend
            </TextComponent>
          </View>
        </View>
        <View style={{flex: 5, paddingHorizontal: 10}}>
          <View style={{flex: 7}}>
            <TextComponent
              numberOfLines={4}
              style={{fontSize: 13, color: Colors.searchText}}>
              Classifieds are usually the first place you think of when you are
              getting ready to make a purchase. Whether you want to purchase a
              vehicle, bed, or pet, the classified section of your local
              newspaper can be one of the best resources available. With
            </TextComponent>
          </View>
          <View style={{flex: 3}}>
            <View style={{width: '50%', alignSelf: 'center'}}>
              <ButtonComponent
                borderRadius={50}
                style={{
                  backgroundColor: Colors.themeBlack,
                  fontSize: 13,
                  color: Colors.white,
                  // alignSelf: 'center',
                }}>
                Refer now
              </ButtonComponent>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  </View>
);

export default ReferEarn;
