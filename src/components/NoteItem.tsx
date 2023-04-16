import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Note} from '../models/Note';
import TextComponent from './TextComponent';
import {globalStyle} from '../styles/global';
import fonts from '../styles/fonts';
import {GetDate} from '../utils/GetDate';
import colors from '../styles/colors';
import SpaceComponent from './SpaceComponent';

interface Props {
  item: Note;
  onPress: () => void;
  onLongPress?: () => void;
  isSelected?: boolean;
}

const NoteItem = (props: Props) => {
  const {item, onPress, onLongPress, isSelected} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={[
        globalStyle.noteItem,
        isSelected && {
          borderColor: colors.red4,
          backgroundColor: colors.gray1,
        },
      ]}
    >
      {item.title && (
        <TextComponent text={item.title} font={fonts.semiBold} size={16} />
      )}
      {item.content && <TextComponent text={item.content} />}
      <SpaceComponent height={12} />
      <TextComponent
        size={12}
        color={colors.gray}
        text={`Cập nhật: ${GetDate.getDateString(item.updatedAt)}`}
      />
    </TouchableOpacity>
  );
};

export default NoteItem;
