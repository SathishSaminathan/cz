import React from 'react';
import { View, ScrollView} from 'react-native';
import {Colors} from '../../constants/ThemeConstants';
import HeaderComponent from '../../components/Shared/HeaderComponent';
import {Images} from '../../assets/images';
import PoweredBY from '../../components/Shared/PoweredBy';
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
