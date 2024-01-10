import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import Container from '../../common/wrappers/Container';
import ContactsList from './ContactsList';
import AddNewContactButton from './AddNewContactButton';

const TransactionsPanel = () => {
  return (
    <Container.Column>
      <ContactsList />
      <AddNewContactButton />
    </Container.Column>
  );
};

export default TransactionsPanel;
