import React from 'react';
import {Text, View} from 'react-native';
import TextComponent from './TextComponent';
import {Colors} from '../../constants/ThemeConstants';

const PoweredBY = ({params}) => (
  <TextComponent style={{color: Colors.textBlack, textAlign: 'center'}}>
    Powered By Alfred
  </TextComponent>
);

export default PoweredBY;
