import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyle} from '../styles/global';

const SectionComponent = ({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
}) => {
  return <View style={[globalStyle.section, styles]}>{children}</View>;
};

export default SectionComponent;
