import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../pages/profile/profileSlice';
import settingsReducer from '../pages/settings/settingsSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
