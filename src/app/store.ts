import { configureStore } from '@reduxjs/toolkit';

import  previewerSlice from './previewerSlice';

export const store = configureStore({
  reducer: {
    previewer: previewerSlice
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch