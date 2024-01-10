import React from 'react';
import {getBankAccNumber} from '../../features/userInfo/slice';
import {useAppSelector} from '../../features/hooks';
import {IErrorProps} from '../../modals/ErrorModal';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {useColors} from '../../themes/useColors';
import Home from '../../screens/Home';
import LogoutButton from '../../components/features/home/LogoutButton';
import TransactionStack from './TransactionStack';
import {RouteProp} from '@react-navigation/native';
import ErrorModal from '../../modals/ErrorModal';

export type IMainStackParams = {
  Home: undefined;
  TransactionStack: undefined;
  ErrorModal: IErrorProps;
};

export type MainStackNavigationProp<RouteName extends keyof IMainStackParams> =
  NativeStackScreenProps<IMainStackParams, RouteName>;

export type MainStackRouteProps<RouteName extends keyof IMainStackParams> =
  RouteProp<IMainStackParams, RouteName>;

const stack = createNativeStackNavigator<IMainStackParams>();
const {Navigator, Group, Screen} = stack;

const MainStack = () => {
  const acc = useAppSelector(getBankAccNumber);
  const {BACKGROUND, FONT_COLOR} = useColors();
  return (
    <Navigator
      screenOptions={{
        title: acc,
        headerStyle: {backgroundColor: BACKGROUND},
        headerTintColor: FONT_COLOR,
      }}>
      <Screen
        options={{
          headerRight: () => <LogoutButton />,
        }}
        name={'Home'}
        component={Home}
      />
      <Screen name="TransactionStack" component={TransactionStack} />
      {/* Modals group */}
      <Group
        screenOptions={{
          headerShown: false,
        }}>
        <Screen
          options={{presentation: 'transparentModal', animation: 'fade'}}
          name="ErrorModal"
          component={ErrorModal}
          initialParams={{
            title: '',
            content: '',
          }}
        />
      </Group>
    </Navigator>
  );
};

export default MainStack;
