import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUserData } from './types';

export interface ProfileState {
  userData: IUserData;
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
  },
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateUserData: (state, action: PayloadAction<IUserData>) => {
      state.userData = action.payload;
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
