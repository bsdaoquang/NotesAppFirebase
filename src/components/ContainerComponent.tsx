import {
  View,
  Text,
  StyleProp,
  ViewProps,
  ViewStyle,
  ScrollView,
} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyle} from '../styles/global';

interface Props {
  children: ReactNode;
  isScroll?: boolean;
  styles?: StyleProp<ViewStyle>;
}

const ContainerComponent = (props: Props) => {
  const {children, isScroll, styles} = props;
  return isScroll ? (
    <ScrollView style={[globalStyle.container, styles]}>{children}</ScrollView>
  ) : (
    <View style={[globalStyle.container, styles]}>{children}</View>
  );
};

export default ContainerComponent;
