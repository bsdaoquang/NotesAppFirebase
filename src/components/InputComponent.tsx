import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextInput,
  KeyboardTypeOptions,
} from 'react-native';
import React from 'react';
import RowComponent from './RowComponent';

interface Props {
  value?: string;
  placeholder?: string;
  onChange: (val: string) => void;
  onEnd?: () => void;
  styles?: StyleProp<ViewStyle>;
  type?: KeyboardTypeOptions;
}

const InputComponent = (props: Props) => {
  const {value, placeholder, onChange, onEnd, styles, type} = props;

  return (
    <RowComponent styles={[styles]}>
      <TextInput
        keyboardType={type}
        value={value}
        placeholder={placeholder}
        onChangeText={val => onChange(val)}
        style={[{flex: 1}]}
      />
    </RowComponent>
  );
};

export default InputComponent;
