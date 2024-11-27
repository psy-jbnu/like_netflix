// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.ts';

export const store = configureStore({
  reducer: {
    auth: authReducer, // 추가적인 slice도 이곳에 포함 가능
  },
});

// 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
