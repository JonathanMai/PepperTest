import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Text from '../text/Text';

import {COLORS} from '../../../themes/colors';

/**
 * Creates a clickable text with blue color
 * @param {TouchableOpacity['props']} props;
 * @returns
 */
const TextButton = ({children, ...rest}: TouchableOpacity['props']) => {
  return (
    <TouchableOpacity {...rest}>
      <Text.Normal style={styles.link}>{children}</Text.Normal>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  link: {color: COLORS.BLUE},
});
