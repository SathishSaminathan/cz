import React from 'react';
import {IconType, FontType} from '../../constants/AppConstants';

const IconComponent = ({style, type, name, size, color}) => {
  const renderIcons = () => {
    let Icon = null;
    Icon = type;
    return <Icon style={style} name={name} size={size} color={color} />;
  };

  return <>{renderIcons()}</>;
};

export default IconComponent;
