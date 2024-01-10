import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useAppSelector} from '../../../features/hooks';
import {getSearchedContacts} from '../../../features/contacts/slice';
import Search from './Search';
import TextButton from '../../common/buttons/TextButton';
import {IContact} from '../../../features/types';
import Container from '../../common/wrappers/Container';
import ContactsListItem from './ContactsListItem';
import LineSeparator from '../../common/separators/LineSeparator';

const ContactsList = () => {
  const [search, setSearch] = useState('');
  useAppSelector(getSearchedContacts(search));

  const data = useAppSelector(getSearchedContacts(search));
  const keyExtractor = (item: IContact) => item.account;
  const renderItem = ({item}: {item: IContact}) => (
    <ContactsListItem {...item} />
  );
  const ItemSeparatorComponent = () => <LineSeparator />;
  return (
    <Container.Column style={{width: '100%'}}>
      <Search value={search} onChangeText={setSearch} />
      <FlatList {...{data, keyExtractor, renderItem, ItemSeparatorComponent}} />
    </Container.Column>
  );
};

export default ContactsList;
