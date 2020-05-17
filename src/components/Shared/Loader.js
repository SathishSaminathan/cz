import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../../constants/ThemeConstants';
import Spinner from 'react-native-spinkit';

const Loader = ({params}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.nativeBlack,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Spinner type="9CubeGrid" color={Colors.white} />
    </View>
  );
};

export default Loader;
