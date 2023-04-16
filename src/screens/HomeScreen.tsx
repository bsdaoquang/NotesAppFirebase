import React, {useEffect, useState} from 'react';
import {Alert, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {
  ContainerComponent,
  NoteItem,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../components';
import colors from '../styles/colors';
import {globalStyle} from '../styles/global';
import Ionicons from 'react-native-vector-icons/Ionicons';
import fonts from '../styles/fonts';
import {Note} from '../models/Note';
import database from '@react-native-firebase/database';
import {useSelector} from 'react-redux';
import {userSelector} from '../redux/reducers/userReducer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}: any) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const user = useSelector(userSelector);
  const [noteIds, setNoteIds] = useState<string[]>([]);

  useEffect(() => {
    if (user.uid) {
      database()
        .ref('notes')
        .orderByChild('by')
        .equalTo(user.uid)
        .on('value', (snap: any) => {
          if (snap.val()) {
            const itemsNote: Note[] = [];
            snap.forEach((item: any) => {
              itemsNote.unshift({
                key: item.key,
                ...item.val(),
              });
            });

            setNotes(itemsNote);
          }
        });
    }
  }, [user.uid]);

  const handleSelectNote = (id: string) => {
    if (!noteIds.includes(id)) {
      // const items: string[] = noteIds;
      // items.push(id);
      setNoteIds([...noteIds, id]);
    } else {
      const items: string[] = noteIds;
      const index = items.indexOf(id);
      items.splice(index, 1);
      setNoteIds([...items]);
    }
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
          noteIds.forEach((id, index) => {
            database().ref(`notes/${id}`).remove();

            if (index + 1 === noteIds.length) {
              setNoteIds([]);
            }
          });
        },
      },
    ]);
  };

  return (
    <>
      <ContainerComponent isScroll>
        <SectionComponent styles={[globalStyle.inner]}>
          {noteIds.length > 0 ? (
            <RowComponent>
              <RowComponent styles={{flex: 1, justifyContent: 'flex-start'}}>
                <TouchableOpacity onPress={() => setNoteIds([])}>
                  <AntDesign name="close" size={20} color={colors.text} />
                </TouchableOpacity>
                <TextComponent text={`Đã chọn ${noteIds.length}`} />
              </RowComponent>
              <RowComponent>
                <TouchableOpacity onPress={handleDeleteNote}>
                  <Ionicons
                    name="md-trash-outline"
                    size={20}
                    color={colors.text}
                  />
                </TouchableOpacity>
              </RowComponent>
            </RowComponent>
          ) : (
            <TouchableOpacity
              style={globalStyle.buttonInput}
              onPress={() => navigation.navigate('SearchNotes')}
            >
              <TextComponent text="Tìm kiếm ghi chú" color={colors.gray} />
            </TouchableOpacity>
          )}
        </SectionComponent>

        <SectionComponent>
          <TextComponent
            text="Được ghim"
            font={fonts.semiBold}
            styles={[{marginBottom: 8}]}
          />
          {notes.map(
            item =>
              item.isPin &&
              (item.title || item.content) && (
                <NoteItem
                  isSelected={
                    noteIds.includes(item.key as string) ? true : false
                  }
                  onLongPress={() => handleSelectNote(item.key as string)}
                  item={item}
                  key={item.key}
                  onPress={() =>
                    noteIds.length > 0
                      ? handleSelectNote(item.key as string)
                      : navigation.navigate('AddNewNote', {
                          note: item,
                        })
                  }
                />
              ),
          )}
        </SectionComponent>

        <SectionComponent>
          {notes.map(
            item =>
              !item.isPin &&
              (item.title || item.content) && (
                <NoteItem
                  isSelected={
                    noteIds.includes(item.key as string) ? true : false
                  }
                  onLongPress={() => handleSelectNote(item.key as string)}
                  item={item}
                  key={item.key}
                  onPress={() =>
                    noteIds.length > 0
                      ? handleSelectNote(item.key as string)
                      : navigation.navigate('AddNewNote', {
                          note: item,
                        })
                  }
                />
              ),
          )}
        </SectionComponent>
      </ContainerComponent>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddNewNote', {})}
        style={[
          {
            position: 'absolute',
            right: 20,
            bottom: 20,
            padding: 6,
            backgroundColor: colors.primary,
            borderRadius: 100,
          },
        ]}
      >
        <Ionicons name="add" size={26} color={colors.white} />
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;
