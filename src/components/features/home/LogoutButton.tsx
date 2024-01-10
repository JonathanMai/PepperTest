import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextButton from '../../common/buttons/TextButton';
import {useAppDispatch} from '../../../features/hooks';
import {logout} from '../../../features/actions/actionsCreator';

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const _logout = () => dispatch(logout());
  return <TextButton onPress={_logout}>התנתק</TextButton>;
};

export default LogoutButton;
