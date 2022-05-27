import { combineReducers } from '@reduxjs/toolkit';
import settingsSlice from './slices/settingsSlice';

const rootReducer = combineReducers({
  settings: settingsSlice
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
