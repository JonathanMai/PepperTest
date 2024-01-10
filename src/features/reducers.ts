import {combineReducers} from '@reduxjs/toolkit';
import {userInfoSlice} from './userInfo/slice';
import {contactsSlice} from './contacts/slice';

export default combineReducers({
  userInfo: userInfoSlice.reducer,
  contacts: contactsSlice.reducer,
});
