import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {getUserName} from '../features/userInfo/slice';
import {useAppSelector} from '../features/hooks';
import LoginStack from './stacks/LoginStack';
import MainStack from './stacks/MainStack';

const Root = () => {
  const userName = useAppSelector(getUserName);
  return (
    <NavigationContainer>
      {!userName?.length ? <LoginStack /> : <MainStack />}
    </NavigationContainer>
  );
};

export default Root;
