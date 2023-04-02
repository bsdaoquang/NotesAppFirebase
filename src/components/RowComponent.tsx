import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyle} from '../styles/global';

interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const RowComponent = (props: Props) => {
  const {children, styles, onPress} = props;

  return onPress ? (
    <TouchableOpacity style={[globalStyle.rowCenter, styles]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={[globalStyle.rowCenter, styles]}>{children}</View>
  );
};

export default RowComponent;
