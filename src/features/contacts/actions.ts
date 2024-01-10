import {get} from '../../api';
import {urls} from '../../api/consts';
import {AppDispatch} from '../store';
import {IContact} from '../types';
import {addContacts} from './slice';

// get contacts
export const fetchContacts = () => async (dispatch: AppDispatch) => {
  try {
    const res = await get(urls.getContacts);
    dispatch(
      addContacts(
        res.data.contacts.map(({name, acount}: any) => ({
          name,
          account: acount,
        })),
      ),
    );
    // dispatch(setUserDetails(res.data));
  } catch (e) {
    console.error('FETCH CONTACTS ERR', e);
  }
};

export const addNewContact =
  (contact: IContact) => async (dispatch: AppDispatch) => {
    dispatch(addContacts([contact]));
  };
