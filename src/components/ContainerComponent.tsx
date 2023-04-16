import {
  View,
  Text,
  StyleProp,
  ViewProps,
  ViewStyle,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyle} from '../styles/global';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../styles/colors';
import {useNavigation} from '@react-navigation/native';

interface Props {
  children: ReactNode;
  isScroll?: boolean;
  styles?: StyleProp<ViewStyle>;
  title?: string;
  right?: ReactNode;
  back?: boolean;
  onBack?: () => void;
}

const ContainerComponent = (props: Props) => {
  const {children, isScroll, styles, back, title, right, onBack} = props;

  const navigation: any = useNavigation();

  return (
    <View style={{flex: 1}}>
      {(back || title || right) && (
        <RowComponent styles={[{padding: 16}]}>
          {back && (
            <TouchableOpacity
              onPress={onBack ? onBack : () => navigation.goBack()}
            >
              <MaterialIcons
                name="arrow-back-ios"
                size={22}
                color={colors.text}
              />
            </TouchableOpacity>
          )}
          <View style={{flex: 1}}>
            <TextComponent text={title ? title : ''} />
          </View>
          {right && right}
        </RowComponent>
      )}
      {isScroll ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[globalStyle.container, styles]}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[globalStyle.container, styles]}>{children}</View>
      )}
    </View>
  );
};

export default ContainerComponent;
