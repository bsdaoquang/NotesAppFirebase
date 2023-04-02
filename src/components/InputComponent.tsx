import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextInput,
  KeyboardTypeOptions,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode, useState} from 'react';
import RowComponent from './RowComponent';
import {globalStyle} from '../styles/global';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';

interface Props {
  value?: string;
  placeholder?: string;
  onChange: (val: string) => void;
  onEnd?: () => void;
  styles?: StyleProp<ViewStyle>;
  type?: KeyboardTypeOptions;
  isSecure?: boolean;
  allowClear?: boolean;
  preFix?: ReactNode;
}

const InputComponent = (props: Props) => {
  const [isShowPass, setIsShowPass] = useState(false);

  const {
    value,
    placeholder,
    onChange,
    onEnd,
    styles,
    type,
    isSecure,
    preFix,
    allowClear,
  } = props;

  return (
    <RowComponent styles={[globalStyle.inputContainer, styles]}>
      {preFix && preFix}
      <TextInput
        keyboardType={type}
        value={value}
        placeholder={placeholder}
        onChangeText={val => onChange(val)}
        style={[
          globalStyle.input,
          {
            paddingLeft: preFix ? 4 : 0,
          },
        ]}
        secureTextEntry={isShowPass}
        autoCapitalize="none"
      />
      {isSecure ? (
        <TouchableOpacity onPress={() => setIsShowPass(!isShowPass)}>
          <FontAwesome
            name={isShowPass ? 'eye-slash' : 'eye'}
            size={18}
            color={colors.desc}
          />
        </TouchableOpacity>
      ) : null}
      {allowClear && value && (
        <TouchableOpacity onPress={() => onChange('')}>
          <AntDesign name="close" color={'#676767'} size={18} />
        </TouchableOpacity>
      )}
    </RowComponent>
  );
};

export default InputComponent;
