import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUpdateUserDataField, IUserData, ProfileState } from './types';

const initialState: ProfileState = {
  userData: {
    id: '',
    name: '',
    lastName: '',
    email: '',
    profileImage: '',
  },
  addressInfo: {
    street: '',
    extNumber: '',
    intNumber: '',
    zipCode: '',
  },
  userName: '',
  userEmail: '',
  userAge: 0,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    //reducers === actions
    updateUserData: (state, action: PayloadAction<IUserData>) => {
      state.userData = action.payload;
    },
    resetUserData: state => {
      state = initialState;
    },
    updateUserDataField: (
      state,
      action: PayloadAction<IUpdateUserDataField>,
    ) => {
      const { field, value } = action.payload;
      state.userData[field as keyof IUserData] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserData, resetUserData, updateUserDataField } =
  profileSlice.actions;

export default profileSlice.reducer;
