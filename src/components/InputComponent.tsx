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
import {globalStyle} from '../styles/global';

interface Props {
  value?: string;
  placeholder?: string;
  onChange: (val: string) => void;
  onEnd?: () => void;
  styles?: StyleProp<ViewStyle>;
  type?: KeyboardTypeOptions;
  isSecure?: boolean;
}

const InputComponent = (props: Props) => {
  const {value, placeholder, onChange, onEnd, styles, type, isSecure} = props;

  return (
    <RowComponent styles={[globalStyle.inputContainer, styles]}>
      <TextInput
        keyboardType={type}
        value={value}
        placeholder={placeholder}
        onChangeText={val => onChange(val)}
        style={[globalStyle.input]}
        secureTextEntry={isSecure}
        autoCapitalize="none"
      />
    </RowComponent>
  );
};

export default InputComponent;
