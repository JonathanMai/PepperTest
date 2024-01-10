import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {IContact} from '../features/types';
import {
  CommonActions,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  TransactionStackNavigationProp,
  TransactionStackRouteProp,
} from '../navigation/stacks/TransactionStack';
import Text from '../components/common/text/Text';
import Screen from '../components/common/wrappers/Screen';
import {MoneyInputUnderLine} from '../components/common/Input/UnderLine';
import ActionButton from '../components/common/buttons/ActionButton';
import {useAppDispatch, useAppSelector} from '../features/hooks';
import {getUserBalance, subAmount} from '../features/userInfo/slice';
import Container from '../components/common/wrappers/Container';
import {navigateApiErrorModal} from '../modals/navigate';
import {randomRespStatus} from '../utils/randomizeResp';

const TransactionDetails = () => {
  const {
    params: {account, name},
  } = useRoute<TransactionStackRouteProp<'TransactionDetails'>>();
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<
      TransactionStackNavigationProp<'TransactionDetails'>['navigation']
    >();

  // local/rtk states
  const [money, setMoney] = useState('');
  const balance = useAppSelector(getUserBalance);

  // local functions
  const onSuccess = () => {
    dispatch(subAmount(money));
    navigation.dispatch(CommonActions.navigate({name: 'Home'}));
  };
  const onFailure = () => {
    navigateApiErrorModal(navigation);
  };

  const onPress = () => {
    randomRespStatus(onSuccess, onFailure);
  };

  return (
    <Screen>
      {/* Title */}
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <Container.Column
          style={{justifyContent: 'center', paddingHorizontal: 50}}>
          <Text.SubTitle style={{textAlign: 'center'}}>העברה ל</Text.SubTitle>
          <Text.Title
            style={{
              textAlign: 'center',
            }}>{`${name} - ${account}`}</Text.Title>
        </Container.Column>

        {/* transaction sum input */}
        <View>
          <View style={{marginHorizontal: 50}}>
            <MoneyInputUnderLine
              value={money}
              onChangeText={setMoney}
              placeholder="סכום העברה"
            />
          </View>
          <Text.Error style={{textAlign: 'center'}}>
            {(balance as number) < +money && ' סכום העברה גבוה מהיתרה'}
          </Text.Error>
        </View>
        {/* Transaction button */}
        <ActionButton
          onPress={onPress}
          label="העברה"
          disabled={
            !balance || !+money || +money < 0 || (balance as number) < +money
          }
        />
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default TransactionDetails;
