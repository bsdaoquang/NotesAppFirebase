import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {globalStyle} from '../styles/global';

interface Props {
  text: string;
  color?: string;
  size?: number;
  flex?: number;
  styles?: StyleProp<TextStyle>;
  font?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
}

const TextComponent = (props: Props) => {
  const {text, color, size, flex, styles, font} = props;

  return (
    <Text
      style={[
        globalStyle.text,
        {
          color: color ?? '#212121',
          fontSize: size ?? 14,
          flex: flex ?? 0,
          fontWeight: font,
        },
        styles,
      ]}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
