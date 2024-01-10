import React, {useRef} from 'react';
import {TextInput as RNTextInput, StyleSheet, View} from 'react-native';

import useDefaultTextStyle from '../text/useDefaultTextStyle';

import {ITextProps, textType} from '../text/types';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type TTextInputProps = ITextProps &
  RNTextInput['props'] & {
    value?: string;
    paddingLeft?: number;
    forwardRef?: React.RefObject<RNTextInput>;
    rightIcon?: React.ReactNode;
  };

/**
 * Apps text input, handles some default states and styles.
 *
 * @param {textType} type - holds the fontFamily type.
 */
const TextInput = ({
  type = textType.normal,
  forwardRef,
  style,
  rightIcon,
  ...rest
}: TTextInputProps) => {
  const defaultStyle = useDefaultTextStyle(type);
  const textInputRef = forwardRef ?? useRef<RNTextInput>(null);
  const onPress = () => textInputRef?.current?.focus();

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <RNTextInput
        {...rest}
        ref={textInputRef}
        style={[defaultStyle, styles.container, style]}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {rightIcon && (
        <View
          style={{
            position: 'absolute',
            right: 20,
            width: 30,
            top: 0,
            bottom: 0,
          }}>
          {rightIcon}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {padding: 0, backgroundColor: 'transparent'},
});
