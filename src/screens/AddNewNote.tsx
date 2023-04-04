import database from '@react-native-firebase/database';
import React, {useRef, useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {
  ContainerComponent,
  RowComponent,
  SectionComponent,
} from '../components';
import {Note} from '../models/Note';
import {userSelector} from '../redux/reducers/userReducer';
import {globalStyle} from '../styles/global';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../styles/colors';

const AddNewNote = ({navigation}: any) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const contentRef = useRef<any>();
  const user = useSelector(userSelector);

  // Kiểm tra nếu có title || content thì lưu lại
  const handleSaveNote = (isPin?: boolean) => {
    if (title || content) {
      // Lưu ghi chú
      const data: Note = {
        title: title ?? '',
        content: content ?? '',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        by: user.uid,
        isPin,
      };

      database().ref('notes').push(data);
    }

    // Quay lại màn hình trước
    navigation.goBack();
  };

  return (
    <ContainerComponent
      isScroll
      back
      onBack={handleSaveNote}
      right={
        <RowComponent>
          <TouchableOpacity onPress={() => handleSaveNote(true)}>
            <MaterialIcons name="push-pin" size={22} color={colors.text} />
          </TouchableOpacity>
        </RowComponent>
      }
    >
      <SectionComponent>
        <TextInput
          placeholder="Tiêu đề"
          style={[globalStyle.titleNote]}
          onChangeText={val => setTitle(val)}
          maxLength={100}
        />

        <TextInput
          ref={contentRef}
          placeholder="Ghi chú"
          style={[globalStyle.text]}
          onChangeText={val => setContent(val)}
          maxLength={1000}
          multiline
          autoFocus
        />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default AddNewNote;
