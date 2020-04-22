import React from 'react';
import {ScrollView} from 'react-native';

import PoweredBy from '../../components/Shared/PoweredBy';
import {Colors} from '../../constants/ThemeConstants';
import {Images} from '../../assets/images';
import StaysCardItem from './StaysCardItem';
import {Stays} from '../../constants/AppConstants';
import UpcomingStaysCardItem from './UpcomingStaysCardItem';

const data = [
  {
    name: 'Bronze King',
    location: '210 4th Avenue North Nashville TN 37219',
    totalReviews: '20 Reviews',
    price: '$ 125',
    prePrice: '$100',
    off: '55',
    reviewValue: 4,
    image: Images.reviewReservatiob,
  },
];

const Upcoming = (props) => {
  const renderItems = () => {
    return data.map((data, i) => (
      <UpcomingStaysCardItem
        data={data}
        type={Stays.UPCOMING}
        key={i}
        {...props}
      />
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

export default Upcoming;
