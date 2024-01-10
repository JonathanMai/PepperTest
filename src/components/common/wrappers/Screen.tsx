import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from './Container';
import {useColors} from '../../../themes/useColors';

const Screen = ({style, ...rest}: View['props']) => {
  const {BACKGROUND} = useColors();
  return (
    <Container.Column
      {...rest}
      style={[{backgroundColor: BACKGROUND, paddingBottom: 30}, style]}
    />
  );
};

export default Screen;
