import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

interface SettingsState {
  darkMode: boolean;
}

const slice = createSlice({
  name: 'settings',
  initialState: { darkMode: false } as SettingsState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    }
  }
});

export const { setDarkMode } = slice.actions;
export const selectSettings = (state: RootState) => state.settings;
export default slice.reducer;
