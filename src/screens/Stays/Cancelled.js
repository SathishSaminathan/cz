import React from 'react';
import {ScrollView} from 'react-native';

import PoweredBy from '../../components/Shared/PoweredBy';
import {Colors} from '../../constants/ThemeConstants';
import {Images} from '../../assets/images';
import StaysCardItem from './StaysCardItem';
import {Stays} from '../../constants/AppConstants';
const data = [
  {
    name: 'Silver Queen Double',
    location: '210 4th Avenue North Nashville TN 37219',
    totalReviews: '20 Reviews',
    price: '$ 125',
    prePrice: '$100',
    off: '55',
    reviewValue: 4,
    image: Images.rm2,
  },
  {
    name: 'Gold Queen Studio',
    location: '210 4th Avenue North Nashville TN 37219',
    totalReviews: '20 Reviews',
    price: '$ 125',
    prePrice: '$100',
    off: '55',
    reviewValue: 4,
    image: Images.reviewReservatiob,
  },
];
const Cancelled = (props) => {
  const renderItems = () => {
    return data.map((data, i) => (
      <StaysCardItem data={data} type={Stays.CANCELLED} key={i} {...props} />
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

export default Cancelled;
