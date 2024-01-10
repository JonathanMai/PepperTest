import {StyleSheet} from 'react-native';
import React from 'react';
import {IContact} from '../../../features/types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../../common/text/Text';
import {useNavigation} from '@react-navigation/native';
import {TransactionStackNavigationProp} from '../../../navigation/stacks/TransactionStack';

const ContactsListItem = ({name, account}: IContact) => {
  const navigation =
    useNavigation<
      TransactionStackNavigationProp<'NewTransaction'>['navigation']
    >();
  const onPress = () =>
    navigation.navigate('TransactionDetails', {name, account});
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text.Normal>{`${name} - ${account}`}</Text.Normal>
    </TouchableOpacity>
  );
};

export default ContactsListItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
