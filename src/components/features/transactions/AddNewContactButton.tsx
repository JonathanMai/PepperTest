import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ActionButton from '../../common/buttons/ActionButton';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackNavigationProp} from '../../../navigation/stacks/TransactionStack';

const AddNewContactButton = () => {
  const navigation =
    useNavigation<TransactionStackNavigationProp<'NewContact'>['navigation']>();
  const onPress = () => navigation.navigate('NewContact');
  return (
    <ActionButton
      label="הוספת מוטב"
      onPress={onPress}
      style={styles.actionButton}
    />
  );
};

export default AddNewContactButton;

const styles = StyleSheet.create({
  actionButton: {
    marginTop: 10,
  },
});
