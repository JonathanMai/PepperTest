import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextInput, {TTextInputProps} from '../../common/Input/TextInput';
import SearchIcon from '../../../assets/svg/SearchIcon';
import {useColors} from '../../../themes/useColors';

const Search = (props: TTextInputProps) => {
  const {BACKGROUND, FONT_COLOR} = useColors();
  return (
    <View style={{padding: 10, backgroundColor: BACKGROUND}}>
      <TextInput
        style={{
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          paddingRight: 50,
          borderColor: FONT_COLOR,
        }}
        placeholder="חיפוש מוטב"
        rightIcon={<SearchIcon />}
        {...props}
      />
    </View>
  );
};

export default Search;
