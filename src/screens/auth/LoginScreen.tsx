import React, {useState} from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import {
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../../components';
import {globalStyle} from '../../styles/global';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginWithEmail = () => {
    console.log(email);
  };

  return (
    <ContainerComponent isScroll>
      <View style={[{marginTop: Dimensions.get('window').height * 0.25}]}>
        <SectionComponent>
          <TextComponent
            text="Login"
            styles={[{fontWeight: '700'}]}
            size={28}
            color="#676767"
          />
          <TextComponent text="Welcome to NotesApp" />
        </SectionComponent>

        <SectionComponent>
          <InputComponent
            value={email}
            placeholder="Email"
            type="email-address"
            onChange={val => setEmail(val)}
          />
          <InputComponent
            value={password}
            placeholder="Password"
            type="default"
            isSecure
            onChange={val => setPassword(val)}
          />

          <RowComponent styles={[{justifyContent: 'space-between'}]}>
            <TouchableOpacity>
              <TextComponent text="Signin" color="#3498db" />
            </TouchableOpacity>
            <TouchableOpacity>
              <TextComponent text="Forget Pass?" color="#3498db" />
            </TouchableOpacity>
          </RowComponent>
        </SectionComponent>

        <SectionComponent>
          <RowComponent
            styles={[globalStyle.button]}
            onPress={handleLoginWithEmail}
          >
            <TextComponent text="Login" size={18} color="#fafafa" font="bold" />
          </RowComponent>
        </SectionComponent>
      </View>
    </ContainerComponent>
  );
};

export default LoginScreen;
