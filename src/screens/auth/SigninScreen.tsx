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
import auth from '@react-native-firebase/auth';

const SigninScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSignWithEmail = () => {
    if (email) {
      setMessageError('');

      if (password && confirmPass) {
        setMessageError('');

        if (password.length > 6 && password === confirmPass) {
          setMessageError('');

          // true

          auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
              console.log(user);
            })
            .catch(e => {
              setMessageError(e.message);
            });
        } else {
          setMessageError('Mật khẩu phải lớn hơn 6 ký tự');
        }
      } else {
        setMessageError('Vui lòng nhập mật khẩu');
      }
    } else {
      setMessageError('Vui lòng nhập email');
    }
  };

  return (
    <ContainerComponent isScroll>
      <View style={[{marginTop: Dimensions.get('window').height * 0.25}]}>
        <SectionComponent>
          <TextComponent
            text="Đăng ký"
            styles={[{fontWeight: '700'}]}
            size={28}
            color="#676767"
          />
          <TextComponent text="Tạo tài khoản miễn phí" />
        </SectionComponent>

        <SectionComponent styles={[{marginTop: 20}]}>
          <InputComponent
            value={email}
            placeholder="Email"
            type="email-address"
            onChange={val => setEmail(val)}
          />
          <InputComponent
            value={password}
            placeholder="Mật khẩu"
            type="default"
            isSecure
            onChange={val => setPassword(val)}
          />
          <InputComponent
            value={confirmPass}
            placeholder="Xác nhận mật khẩu"
            type="default"
            isSecure
            onChange={val => setConfirmPass(val)}
          />
          <RowComponent styles={[{justifyContent: 'space-between'}]}>
            <TouchableOpacity>
              <TextComponent text="Đăng nhập" color="#3498db" />
            </TouchableOpacity>
          </RowComponent>
        </SectionComponent>

        {messageError && (
          <SectionComponent>
            <TextComponent text={messageError} color="#e74c3c" />
          </SectionComponent>
        )}

        <SectionComponent>
          <RowComponent
            styles={[globalStyle.button]}
            onPress={handleSignWithEmail}
          >
            <TextComponent
              text="Đăng ký"
              size={18}
              color="#fafafa"
              font="bold"
            />
          </RowComponent>
        </SectionComponent>
      </View>
    </ContainerComponent>
  );
};

export default SigninScreen;
