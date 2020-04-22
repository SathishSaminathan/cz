import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import IconComponent from './IconComponent';
import {IconType} from '../../constants/AppConstants';
import TextComponent from './TextComponent';

const ToiletryAdd = ({item, handleChange, handleAddButton}) => {
  const [Count, setCount] = useState(1);
  const handleMinus = () => {
    if (Count === 1) {
      handleChange(item.name);
      return;
    }
    setCount(Count - 1);
    handleAddButton(item.name, Count - 1);
  };
  const handleAdd = () => {
    setCount(Count + 1);
    handleAddButton(item.name, Count + 1);
  };
  return (
    <View style={{width: '33.3%', alignItems: 'stretch'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <TouchableOpacity onPress={handleMinus}>
          <IconComponent type={IconType.AntDesign} name="minuscircleo" />
        </TouchableOpacity>
        <TextComponent style={{paddingHorizontal: '3%'}}>
          {`${Count} ${item.name}`}
        </TextComponent>
        <TouchableOpacity onPress={handleAdd}>
          <IconComponent type={IconType.AntDesign} name="pluscircleo" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToiletryAdd;
