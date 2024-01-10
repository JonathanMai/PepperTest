import {StyleSheet} from 'react-native';
import React from 'react';
import Container from '../../common/wrappers/Container';
import Text from '../../common/text/Text';
import {useAppSelector} from '../../../features/hooks';
import {getUserBalance, getUserName} from '../../../features/userInfo/slice';

const Greetings = () => {
  const userName = useAppSelector(getUserName);
  const balance = useAppSelector(getUserBalance);
  return (
    <Container.Column>
      <Text.Title style={styles.text}>{`שלום ${userName}`}</Text.Title>
      <Text.Title style={styles.text}>{`יתרה ${balance}`}</Text.Title>
    </Container.Column>
  );
};

export default Greetings;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});
