import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUserData } from './types';

export interface ProfileState {
  userData: IUserData;
  unaCosa: string;
}

export interface IUpdateProfileField {
  field: string;
  value: string;
}

const initialState: ProfileState = {
  userData: {
    id: '',
    name: '',
    lastName: '',
    profileImage: '',
  },
  unaCosa: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateUserData: (state, action: PayloadAction<IUserData>) => {
      state.userData = action.payload;
      console.log('%c⧭ action', 'color: #a2124b', action);
    },
    updateUserDataField: (
      state,
      action: PayloadAction<IUpdateProfileField>,
    ) => {
      const { field, value } = action.payload;
      state.userData = { ...state.userData, [field]: value };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserData, updateUserDataField } = profileSlice.actions;

export default profileSlice.reducer;
