import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Screen from '../components/common/wrappers/Screen';
import Box from '../components/common/Input/Box';
import Container from '../components/common/wrappers/Container';
import ContinueButton from '../components/features/newContact/ContinueButton';

const NewContact = () => {
  const [name, setName] = useState('');
  const [account, setAccount] = useState('');
  return (
    <Screen style={styles.container}>
      <Container.Column style={styles.content}>
        <Box
          placeholder="שם מלא"
          value={name}
          onChangeText={setName}
          containerStyle={{marginBottom: 35}}
        />
        <Box
          placeholder="מספר חשבון"
          value={account}
          onChangeText={setAccount}
          containerStyle={{marginBottom: 35}}
        />
      </Container.Column>
      <ContinueButton {...{name, account}} />
    </Screen>
  );
};

export default NewContact;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  content: {flex: 1, justifyContent: 'center', paddingHorizontal: 40},
});
