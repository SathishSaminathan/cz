import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Colors} from '../../constants/ThemeConstants';
import HeaderComponent from '../../components/Shared/HeaderComponent';
import {ReadmoreComponent} from '../../components/Shared/ReadmoreComponent';
import ImageComponent from '../../components/Shared/ImageComponent';
import {Images} from '../../assets/images';
import TextComponent from '../../components/Shared/TextComponent';
import {FontType} from '../../constants/AppConstants';
import ButtonComponent from '../../components/Shared/ButtonComponent';
import PoweredBY from '../../components/Shared/PoweredBy';
import Ripple from 'react-native-material-ripple';
import RecommendationCard from './RecommendationCard';

const data = [
  {
    name: 'STATESIDE KITCHEN',
    image: Images.Mask,
  },
  {
    name: 'NATURA NASHVILLE',
    image: Images.Mask1,
  },
  {name: 'PARLOUR BAR', image: Images.Mask2},
];
const RestaurantRecommendation = (props) => (
  <View style={{flex: 1, backgroundColor: Colors.staysBackground}}>
    <HeaderComponent title="Restaurant Recommendation" {...props} hasBack />
    <ScrollView style={{flex: 1, padding: 10, paddingHorizontal: 15}}>
      {data.map((data, i) => (
        <RecommendationCard key={i} name={data.name} image={data.image} />
      ))}
      <View style={{paddingVertical: 10}}>
        <PoweredBY />
      </View>
    </ScrollView>
  </View>
);

export default RestaurantRecommendation;
