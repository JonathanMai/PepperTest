import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useColors} from '../../../themes/useColors';
import Screen from './Screen';
import Container from './Container';

/**
 * Adds padding to secure phones status bar and footer
 * Should be used with each new screen.
 *
 * @param {View['props']} props - used to style wrapper and add children
 * @returns
 */
const SafeAreaView = ({children, style, ...rest}: View['props']) => {
  const {bottom, top} = useSafeAreaInsets();
  return (
    <Screen>
      <Container.Column style={{paddingTop: top, paddingBottom: bottom}}>
        <Container.Column {...rest} style={style}>
          {children}
        </Container.Column>
      </Container.Column>
    </Screen>
  );
};

export default SafeAreaView;

const styles = StyleSheet.create({flex: {flex: 1}});
