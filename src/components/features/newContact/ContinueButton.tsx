import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ActionButton from '../../common/buttons/ActionButton';
import {IContact} from '../../../features/types';
import {addNewContact} from '../../../features/contacts/actions';
import {useAppDispatch} from '../../../features/hooks';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackNavigationProp} from '../../../navigation/stacks/TransactionStack';
import {navigateApiErrorModal} from '../../../modals/navigate';
import {randomRespStatus} from '../../../utils/randomizeResp';

const ContinueButton = (contact: IContact) => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<
      TransactionStackNavigationProp<'TransactionDetails'>['navigation']
    >();

  // local functions
  const onSuccess = () => {
    dispatch(addNewContact(contact));
    navigation.navigate('TransactionDetails', contact);
  };
  const onFailure = () => {
    navigateApiErrorModal(navigation);
  };
  const onPress = () => randomRespStatus(onSuccess, onFailure);

  return (
    <ActionButton
      label="אישור"
      onPress={onPress}
      disabled={!contact.name.length || !contact.account.length}
    />
  );
};

export default ContinueButton;
