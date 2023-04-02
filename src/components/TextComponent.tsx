import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {globalStyle} from '../styles/global';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

interface Props {
  text: string;
  color?: string;
  size?: number;
  flex?: number;
  styles?: StyleProp<TextStyle>;
  font?: string;
}

const TextComponent = (props: Props) => {
  const {text, color, size, flex, styles, font} = props;

  return (
    <Text
      style={[
        globalStyle.text,
        {
          color: color ?? colors.text,
          fontSize: size ?? 14,
          flex: flex ?? 0,
          fontFamily: font ?? fonts.regular,
        },
        styles,
      ]}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
