import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {globalStyle} from '../styles/global';

interface Props {
  text: string;
  color?: string;
  size?: number;
  flex?: number;
  styles?: StyleProp<TextStyle>;
}

const TextComponent = (props: Props) => {
  const {text, color, size, flex, styles} = props;

  return (
    <Text
      style={[
        globalStyle.text,
        {color: color ?? '#212121', fontSize: size ?? 14, flex: flex ?? 1},
        styles,
      ]}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
