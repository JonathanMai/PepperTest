import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import SafeAreaView from '../components/common/wrappers/SafeAreaView';
import Box from '../components/common/Input/Box';
import ActionButton from '../components/common/buttons/ActionButton';

// import {setUser} from '../features/userInfo/slice';

import {useAppDispatch, useAppSelector} from '../features/hooks';
import {login} from '../features/userInfo/actions';
import {getUserName} from '../features/userInfo/slice';
import Text from '../components/common/text/Text';

/**
 * Login Screen - user needs to insert a name to "login"
 */
const Login = () => {
  const dispatch = useAppDispatch();
  // login states
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // local functions
  const _login = () => dispatch(login);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text.Title style={{textAlign: 'center', marginBottom: 30}}>
          התחברות לטסט
        </Text.Title>
        <Box
          containerStyle={styles.margin}
          value={name}
          onChangeText={setName}
          placeholder="שם משתמש"
        />
        <Box
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          placeholder="סיסמא"
        />
      </View>
      <ActionButton
        style={styles.actionButton}
        label="התחברות"
        onPress={_login}
        disabled={!name?.length || !password.length}
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  content: {flex: 1, justifyContent: 'center', paddingHorizontal: 40},
  actionButton: {marginBottom: 40},
  margin: {marginBottom: 20},
});
