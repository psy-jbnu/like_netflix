// src/redux/slices/authSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface AuthState {
  email: string;
  password: string;
  isLoginVisible: boolean;
}

const initialState: AuthState = {
  email: '',
  password: '',
  isLoginVisible: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleLoginVisibility(state) {
      state.isLoginVisible = !state.isLoginVisible;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
});

export const { toggleLoginVisibility, setEmail, setPassword } = authSlice.actions;
export default authSlice.reducer;
