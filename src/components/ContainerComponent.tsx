import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyle} from '../styles/global';

const ContainerComponent = ({children}: {children: ReactNode}) => {
  return <View style={[globalStyle.container]}>{children}</View>;
};

export default ContainerComponent;
