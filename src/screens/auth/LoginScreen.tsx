import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import {
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../../components';
import fonts from '../../styles/fonts';
import {globalStyle} from '../../styles/global';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginWithEmail = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
      });
  };

  return (
    <ContainerComponent isScroll>
      <View style={[{marginTop: Dimensions.get('window').height * 0.25}]}>
        <SectionComponent>
          <TextComponent
            text="Login"
            font={fonts.bold}
            size={28}
            color="#676767"
          />
          <TextComponent text="Welcome to NotesApp" />
        </SectionComponent>

        <SectionComponent>
          <InputComponent
            preFix={<Entypo name="email" size={16} color={colors.desc} />}
            value={email}
            placeholder="Email"
            type="email-address"
            onChange={val => setEmail(val)}
            allowClear
          />
          <InputComponent
            preFix={<FontAwesome name="lock" size={16} color={colors.desc} />}
            value={password}
            placeholder="Mật khẩu"
            type="default"
            isSecure
            onChange={val => setPassword(val)}
          />

          <RowComponent styles={[{justifyContent: 'space-between'}]}>
            <TouchableOpacity>
              <TextComponent text="Đăng ký" color="#3498db" />
            </TouchableOpacity>
            <TouchableOpacity>
              <TextComponent text="Quên mật khẩu?" color="#3498db" />
            </TouchableOpacity>
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent
            styles={[globalStyle.button]}
            onPress={handleLoginWithEmail}
          >
            <TextComponent
              text="Login"
              size={18}
              color="#fafafa"
              font={fonts.semiBold}
            />
          </RowComponent>
        </SectionComponent>
      </View>
    </ContainerComponent>
  );
};

export default LoginScreen;
