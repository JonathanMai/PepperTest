import {get} from '../../api';
import {urls} from '../../api/consts';
import {setUserDetails} from './slice';

export const login = async dispatch => {
  try {
    const res = await get(urls.userLogin);
    dispatch(setUserDetails(res.data));
  } catch (e) {
    console.error('LOGIN ERR', e);
  }
};
