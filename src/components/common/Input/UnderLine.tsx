import React from 'react';
import {StyleSheet, View} from 'react-native';

import Text from '../text/Text';
import Floating from './Floating';
import {TTextInputProps} from './TextInput';

import {useColors} from '../../../themes/useColors';

/**
 * Floating input with underline looks
 *
 * @param {TTextInputProps} props
 */
const UnderLine = (props: TTextInputProps) => {
  const {FONT_COLOR} = useColors();
  const borderColor = {borderBottomColor: FONT_COLOR};
  return (
    <View style={[styles.container, borderColor]}>
      <View style={styles.borderPadding}>
        <Floating {...props} />
      </View>
    </View>
  );
};

/**
 * Floating input with underline looks to insert dollars amount
 *
 * @param {TTextInputProps} props
 */
export const MoneyInputUnderLine = (props: TTextInputProps) => (
  <>
    <Text.Normal style={styles.dollarSign}>₪</Text.Normal>
    <UnderLine {...props} keyboardType="numeric" />
  </>
);

/**
 * Floating input with underline looks for date picker
 *
 * @param {TTextInputProps} props
 */
// export const DateInputUnderLine = (
//   props: TTextInputProps & {setValue: Function},
// ) => {
//   const [visible, setVisible] = useState(false);
//   const handlePress = () => setVisible(true);
//   const handleConfirm = (date: Date) => {
//     props.setValue(dateToString(date));
//     hideDatePicker();
//   };
//   const hideDatePicker = () => {
//     setVisible(false);
//   };
//   return (
//     <>
//       <TouchableOpacity onPress={handlePress}>
//         <UnderLine {...props} editable={false} />
//       </TouchableOpacity>
//     </>
//   );
// };

export default UnderLine;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
  },
  borderPadding: {paddingBottom: 5, paddingHorizontal: 10},
  dollarSign: {position: 'absolute', right: -5, bottom: 10, zIndex: 1},
});
