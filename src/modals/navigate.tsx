import {ERROR} from './config';

export const navigateApiErrorModal = navigation => {
  navigation.navigate('ErrorModal', ERROR.API_ERROR);
};
