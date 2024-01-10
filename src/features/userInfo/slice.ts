import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {logout} from '../actions/actionsCreator';
import {RootState} from '../store';

// Define a type for the slice state
interface IUserInfo {
  userName: string;
  bankAccNumber: string;
  balance?: number;
}

// Define the initial state using that type
const initialState: IUserInfo = {
  userName: '',
  bankAccNumber: '',
};

/**
 * user info - PERSIST - would hold much more data in real apps
 */
export const userInfoSlice = createSlice({
  name: 'userInfo',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // sets users data
    setUserDetails: (state, action: PayloadAction<any>) => {
      state.userName = action.payload.username;
      state.bankAccNumber = action.payload.acount;
      state.balance = action.payload.balance;
    },
    subAmount: (state, action: PayloadAction<string>) => {
      state.balance = state.balance! - +action.payload;
    },
  },
  extraReducers: builder => {
    // logout action triggered with other reducers, init userInfo
    builder.addCase(logout, () => {
      return initialState;
    });
  },
});

export const {setUserDetails, subAmount} = userInfoSlice.actions;

// returns user name
export const getUserName = ({userInfo}: RootState) => userInfo.userName;
export const getUserBalance = ({userInfo}: RootState) => userInfo.balance;
export const getBankAccNumber = ({userInfo}: RootState) =>
  userInfo.bankAccNumber;

export default userInfoSlice.reducer;
