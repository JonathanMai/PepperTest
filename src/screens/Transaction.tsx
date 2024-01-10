import {ActivityIndicator, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from '../features/hooks';
import {getIsFetched} from '../features/contacts/slice';
import {fetchContacts} from '../features/contacts/actions';
import TransactionsPanel from '../components/features/transactions/TransactionsPanel';
import Screen from '../components/common/wrappers/Screen';

const Transaction = () => {
  const fetched = useAppSelector(getIsFetched);
  const dispatch = useAppDispatch();
  useEffect(() => {
    !fetched && dispatch(fetchContacts());
  }, []);

  return (
    <Screen>
      {!fetched ? (
        <ActivityIndicator style={{alignSelf: 'center'}} size={'large'} />
      ) : (
        <TransactionsPanel />
      )}
    </Screen>
  );
};

export default Transaction;
