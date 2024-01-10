import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';
import {logout} from '../actions/actionsCreator';
import {IContact} from '../types';

// Define a type for the slice state
interface IContacts {
  contactsList: IContact[];
  fetched: boolean;
}

// Define the initial state using that type
const initialState: IContacts = {
  contactsList: [],
  fetched: false,
};

/**
 * contacts - PERSIST - hold the contacts the user adds, actions and getters.
 * holds the contactsList.
 */
export const contactsSlice = createSlice({
  name: 'contacts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Adds new contacts and sorts them alphabetically
    addContacts: (state, action: PayloadAction<IContact[]>) => {
      state.contactsList = [...state.contactsList, ...action.payload].sort(
        (a: IContact, b: IContact) => (a.name < b.name ? -1 : 1),
      );
      state.fetched = true;
    },
  },
  extraReducers: builder => {
    // logout action triggered with other reducers, inits the contacts list
    builder.addCase(logout, () => {
      return initialState;
    });
  },
});

export const {addContacts} = contactsSlice.actions;

//gets searched contacts
export const getSearchedContacts =
  (search: string) =>
  ({contacts}: RootState) =>
    search.length < 2
      ? contacts.contactsList
      : contacts.contactsList.filter(
          ({name, account}: IContact) =>
            name?.includes(search) || account?.includes(search),
        );

export const getIsFetched = ({contacts}: RootState) => contacts.fetched;
export default contactsSlice.reducer;
