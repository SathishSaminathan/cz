import React from 'react';
import {ScrollView} from 'react-native';

import PoweredBy from '../../components/Shared/PoweredBy';
import {Colors} from '../../constants/ThemeConstants';
import {Images} from '../../assets/images';
import StaysCardItem from './StaysCardItem';
import {Stays} from '../../constants/AppConstants';

const data = [
  {
    name: 'Silver Queen',
    location: '210 4th Avenue North Nashville TN 37219',
    totalReviews: '20 Reviews',
    price: '$ 125',
    prePrice: '$100',
    off: '55',
    reviewValue: 4,
    image: Images.rm2,
  },
  {
    name: 'Silver King',
    location: '210 4th Avenue North Nashville TN 37219',
    totalReviews: '20 Reviews',
    price: '$ 125',
    prePrice: '$100',
    off: '55',
    reviewValue: 4,
    image: Images.rm3,
  },
];
const Past = (props) => {
  const renderItems = () => {
    return data.map((data, i) => (
      <StaysCardItem data={data} type={Stays.PAST} key={i} {...props} />
    ));
  };
  return (
    <ScrollView
      style={{
        backgroundColor: Colors.staysBackground,
        marginHorizontal: 6,
        marginTop: 10,
      }}>
      {renderItems()}
      <PoweredBy />
    </ScrollView>
  );
};

export default Past;
