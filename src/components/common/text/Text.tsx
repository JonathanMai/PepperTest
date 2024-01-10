import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';

import useDefaultTextStyle from './useDefaultTextStyle';

import {ITextProps, textType} from './types';
import {normalizeText} from '../../../utils/sizes';
import {useColors} from '../../../themes/useColors';
import {fontStyle} from './config';
import {COLORS} from '../../../themes/colors';

export type TTextProps = ITextProps & RNText['props'];

/**
 * Holds the text which is used all over the application, handles default styles and colors.
 *
 * @param {textType} type - holds the fontFamily type.
 */
const Texts =
  (
    defaultStyles?: RNText['props']['style'],
    defaultType: textType = textType.normal,
  ) =>
  ({type, style, ...rest}: TTextProps) => {
    const {FONT_COLOR} = useColors();
    const fontStyles = {
      fontSize: normalizeText(16),
      color: FONT_COLOR,
      fontFamily: fontStyle[type ?? defaultType],
    };

    return <RNText {...rest} style={[fontStyles, defaultStyles, style]} />;
  };

const styles = StyleSheet.create({
  title: {fontSize: normalizeText(32)},
  subtitle: {fontSize: normalizeText(25)},
  h1: {fontSize: normalizeText(23)},
  h2: {fontSize: normalizeText(22)},
  error: {color: COLORS.RED},
});

const Text = {
  Normal: Texts(),
  Title: Texts(styles.title, textType.bold),
  SubTitle: Texts(styles.subtitle),
  H1: Texts(styles.h1, textType.bold),
  H2: Texts(styles.h2, textType.bold),
  Error: Texts(styles.error, textType.bold),
};

export default Text;
