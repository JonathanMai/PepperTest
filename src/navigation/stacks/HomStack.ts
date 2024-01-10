import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import {RouteProp} from '@react-navigation/native';

export type ITransactionStackParams = {
  NewTransaction: undefined;
  NewContact: undefined;
  TransactionDetails: IContact;
};

export type TransactionStackNavigationProp<
  RouteName extends keyof ITransactionStackParams,
> = NativeStackScreenProps<ITransactionStackParams, RouteName>;

export type TransactionStackRouteProp<
  RouteName extends keyof ITransactionStackParams,
> = RouteProp<ITransactionStackParams, RouteName>;

const stack = createNativeStackNavigator<ITransactionStackParams>();
const {Navigator, Screen} = stack;

const TransactionStack = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={'Home'} component={Home} />
    </Navigator>
  );
};

export default TransactionStack;
