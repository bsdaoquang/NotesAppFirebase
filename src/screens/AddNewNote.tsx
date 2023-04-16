import database from '@react-native-firebase/database';
import React, {useEffect, useRef, useState} from 'react';
import {Alert, TextInput, ToastAndroid, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {
  ContainerComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
} from '../components';
import {Note} from '../models/Note';
import {userSelector} from '../redux/reducers/userReducer';
import {globalStyle} from '../styles/global';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';

const AddNewNote = ({route, navigation}: any) => {
  const {note}: {note: Note} = route.params;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPin, setIsPin] = useState(false);

  const contentRef = useRef<any>();
  const user = useSelector(userSelector);

  useEffect(() => {
    if (note && (note.title || note.content)) {
      note.title && setTitle(note.title);
      note.content && setContent(note.content);
      note.isPin && setIsPin(note.isPin);
    }
  }, [note]);

  // Kiểm tra nếu có title || content thì lưu lại
  const handleSaveNote = () => {
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

  const handleDeleteNote = () => {
    Alert.alert('Xóa ghi chú', 'Bạn muốn xóa ghi chú này?', [
      {
        text: 'Hủy',
        onPress: () => {},
      },
      {
        text: 'Đồng ý',
        style: 'destructive',
        onPress: () => {
          database()
            .ref(`notes/${note.key}`)
            .remove()
            .then(() => {
              ToastAndroid.show('Đã xóa ghi chú', ToastAndroid.SHORT);
              navigation.goBack();
            });
        },
      },
    ]);
  };

  return (
    <ContainerComponent
      isScroll
      back
      onBack={handleSaveNote}
      right={
        <RowComponent>
          <TouchableOpacity onPress={() => setIsPin(!isPin)}>
            <MaterialCommunityIcons
              name={isPin ? 'pin' : 'pin-outline'}
              size={22}
              color={colors.text}
            />
          </TouchableOpacity>
          <SpaceComponent width={12} />

          {note && (
            <TouchableOpacity onPress={handleDeleteNote}>
              <Ionicons name="md-trash-outline" size={20} color={colors.text} />
            </TouchableOpacity>
          )}
        </RowComponent>
      }
    >
      <SectionComponent>
        <TextInput
          value={title}
          placeholder="Tiêu đề"
          style={[globalStyle.titleNote]}
          onChangeText={val => setTitle(val)}
          maxLength={100}
        />

        <TextInput
          value={content}
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
