import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../constants/ThemeConstants';

const Divider = ({params}) => (
  <View style={{height: 2, backgroundColor: Colors.dividerColor}}></View>
);

export default Divider;
