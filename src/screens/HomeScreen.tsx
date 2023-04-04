import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  ContainerComponent,
  RowComponent,
  SectionComponent,
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

const HomeScreen = ({navigation}: any) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const user = useSelector(userSelector);

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

  return (
    <ContainerComponent>
      <SectionComponent styles={globalStyle.inner}>
        <TouchableOpacity
          style={globalStyle.buttonInput}
          onPress={() => navigation.navigate('SearchNotes')}
        >
          <TextComponent text="Tìm kiếm ghi chú" color={colors.desc} />
        </TouchableOpacity>
      </SectionComponent>

      <SectionComponent>
        <TextComponent text="Được ghim" font={fonts.semiBold} />
        {notes.map(
          item =>
            item.isPin &&
            (item.title || item.content) && (
              <TextComponent
                text={item.content ? item.content : ''}
                key={item.key}
              />
            ),
        )}
      </SectionComponent>

      <SectionComponent>
        <TextComponent text="note" />
      </SectionComponent>

      <RowComponent
        styles={[
          {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            padding: 8,
            backgroundColor: colors.white,
          },
        ]}
      >
        <View style={[{flex: 1}]}>
          {/* <TextComponent text="Button container" /> */}
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('AddNewNote')}
          style={[
            {
              padding: 6,
              backgroundColor: colors.primary,
              borderRadius: 8,
            },
          ]}
        >
          <Ionicons name="add" size={26} color={colors.white} />
        </TouchableOpacity>
      </RowComponent>
    </ContainerComponent>
  );
};

export default HomeScreen;
