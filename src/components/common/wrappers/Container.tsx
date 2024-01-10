import React from 'react';
import {StyleSheet, View} from 'react-native';

/**
 *
 * @param {View['props']['style']} defaultStyles - locally creates a default style of container which add default styles to the wrapper
 * @param {View['props']['style']} style - styles the container wrapper from outside
 * @returns
 */
const Containers =
  (defaultStyles: View['props']['style'] = {}) =>
  ({style, ...rest}: View['props']) =>
    <View style={[styles.container, defaultStyles, style]} {...rest} />;

const styles = StyleSheet.create({
  container: {flex: 1},
  row: {flexDirection: 'row'},
});

const Container = {
  Column: Containers(),
  Row: Containers(styles.row),
};

export default Container;
