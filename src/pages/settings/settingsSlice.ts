import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
  onlyIncrement: number;
  onlyDecrement: number;
}

const initialState: SettingsState = {
  onlyIncrement: 0,
  onlyDecrement: 0,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    increment: state => {
      state.onlyIncrement += 1;
    },
    decrement: state => {
      state.onlyDecrement -= 1;
    },
    updateBothValues: (state, action: PayloadAction<number>) => {
      state.onlyDecrement -= action.payload;
      state.onlyIncrement += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, updateBothValues } = settingsSlice.actions;

export default settingsSlice.reducer;
