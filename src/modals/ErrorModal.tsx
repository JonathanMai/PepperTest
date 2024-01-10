import {StyleSheet, View} from 'react-native';
import React from 'react';
import Modal from '../components/common/wrappers/Modal';
import Text from '../components/common/text/Text';
import {MainStackNavigationProp} from '../navigation/stacks/MainStack';
import ActionButton from '../components/common/buttons/ActionButton';
import {useColors} from '../themes/useColors';
import {useNavigation, useRoute} from '@react-navigation/native';

export interface IErrorProps {
  title: string;
  content: string;
}

/**
 *
 * @param {MainStackNavigationProp} - navigation and route.
 *
 */
const ErrorModal = () => {
  const navigation =
    useNavigation<MainStackNavigationProp<'ErrorModal'>['navigation']>();
  const {
    params: {title, content},
  } = useRoute<MainStackNavigationProp<'ErrorModal'>['route']>();
  const {BACKGROUND} = useColors();
  // local functions
  // handles action button
  const handleActionPress = () => {
    navigation.goBack();
  };

  return (
    <Modal
      hideCloseButton
      paddingTop={20}
      style={[styles.container, {backgroundColor: BACKGROUND}]}>
      <View style={{marginBottom: 30, alignItems: 'center'}}>
        <Text.Title style={{marginBottom: 10}}>{title}</Text.Title>
        <Text.SubTitle style={{marginBottom: 50}}>{content}</Text.SubTitle>
        <ActionButton label={'אישור'} onPress={handleActionPress} />
      </View>
    </Modal>
  );
};

export default ErrorModal;

// styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {},
  buttonsContainer: {alignItems: 'center', paddingBottom: 20},
  deleteButton: {marginVertical: 20},
});
