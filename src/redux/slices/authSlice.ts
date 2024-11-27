// src/redux/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoginVisible: boolean;
  email: string;
  password: string;
  registerEmail: string;
  registerPassword: string;
  confirmPassword: string;
  rememberMe: boolean;
  acceptTerms: boolean;
  focusedInput: string | null;
}

const initialState: AuthState = {
  isLoginVisible: true,
  email: '',
  password: '',
  registerEmail: '',
  registerPassword: '',
  confirmPassword: '',
  rememberMe: false,
  acceptTerms: false,
  focusedInput: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleLoginVisibility(state) {
      state.isLoginVisible = !state.isLoginVisible;
    },
    setInputValue(
      state,
      action: PayloadAction<{ field: keyof AuthState; value: string | boolean | null }>
    ) {
      const { field, value } = action.payload;
      (state[field] as string | boolean | null) = value;
    },
  },
});

export const { toggleLoginVisibility, setInputValue } = authSlice.actions;
export default authSlice.reducer;
