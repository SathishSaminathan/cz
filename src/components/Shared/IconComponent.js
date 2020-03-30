import React from 'react';
import {IconType, FontType} from '../../constants/AppConstants';

const IconComponent = ({style, type, name}) => {
  const renderIcons = () => {
    let Icon = null;
    Icon = type;
    console.log('FontType', Icon, type, name);
    return <Icon style={style} name={name} />;
  };

  return <>{renderIcons()}</>;
};

export default IconComponent;
