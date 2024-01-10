import React from 'react';
import {StyleSheet} from 'react-native';
import Greetings from '../components/features/home/Greetings';
import NewTransaction from '../components/features/home/NewTransactionButton';
import Screen from '../components/common/wrappers/Screen';
import SafeAreaView from '../components/common/wrappers/SafeAreaView';

/**
 * Home screen - greets the user and let him create a new transaction.
 */
const Home = () => {
  return (
    <Screen style={styles.container}>
      <Greetings />
      <NewTransaction />
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: '25%',
    justifyContent: 'space-between',
  },
});
