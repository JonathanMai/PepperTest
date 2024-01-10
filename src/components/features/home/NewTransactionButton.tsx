import React from 'react';
import ActionButton from '../../common/buttons/ActionButton';
import {useAppSelector} from '../../../features/hooks';
import {getUserBalance} from '../../../features/userInfo/slice';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../navigation/stacks/MainStack';

const NewTransactionButton = () => {
  const balance = useAppSelector(getUserBalance);
  const navigation =
    useNavigation<MainStackNavigationProp<'Home'>['navigation']>();
  const onPress = () => navigation.navigate('TransactionStack');

  return (
    <ActionButton
      label="העברה חדשה"
      onPress={onPress}
      disabled={!balance || balance < 0}
    />
  );
};

export default NewTransactionButton;
