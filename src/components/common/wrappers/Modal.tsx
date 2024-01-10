import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import X from '../../../assets/svg/X';
import Container from './Container';
import {useColors} from '../../../themes/useColors';

type TProps = View['props'] & {
  paddingTop?: number;
  hideCloseButton?: boolean;
};

/**
 * Component that wraps modals and adding the close and X button on top.
 *
 * @param {number} paddingTop - indicates in how low the X button supposed to be placed from the top.
 * @param {View['props']['style']} style - styles the inner wrapper of the content
 */
const Modal = ({
  paddingTop = 0,
  hideCloseButton = false,
  style,
  children,
}: TProps) => {
  const {bottom} = useSafeAreaInsets();
  const navigation = useNavigation();
  const onCloseModal = () => navigation.goBack();
  const {OPACITY_BACKGROUND} = useColors();

  return (
    <Container.Column style={[styles.container]}>
      <Pressable
        onPress={onCloseModal}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: OPACITY_BACKGROUND,
        }}
      />
      <View
        style={[styles.wrapper, {paddingBottom: bottom}, style, {paddingTop}]}>
        {/* X button to close modal */}
        {!hideCloseButton && (
          <Pressable style={[styles.closeButton]} onPress={onCloseModal}>
            <X />
          </Pressable>
        )}
        {/* components content */}
        {children}
      </View>
    </Container.Column>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  wrapper: {
    padding: 10,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
});
