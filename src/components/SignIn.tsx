// src/components/SignIn.tsx
import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks.ts';
import { toggleLoginVisibility, setInputValue } from '../redux/slices/authSlice.ts';
import '../styles/sign-in.css';


const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    isLoginVisible,
    email,
    password,
    registerEmail,
    registerPassword,
    confirmPassword,
    rememberMe,
    acceptTerms,
    focusedInput,
  } = useAppSelector((state) => state.auth);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login with:', { email, password });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register with:', { registerEmail, registerPassword, confirmPassword });
  };

  const handleFocus = (inputName: string) => {
    dispatch(setInputValue({ field: 'focusedInput', value: inputName }));
  };

  const handleBlur = () => {
    dispatch(setInputValue({ field: 'focusedInput', value: null }));
  };

  return (
    <div>
      <div className="bg-image"></div>
      <div className="container">
        <div id="phone">
          <div id="content-wrapper">
            {isLoginVisible ? (
              <div className="card" id="login">
                <form onSubmit={handleLogin}>
                  <h1>Sign in</h1>
                  <div className={`input ${focusedInput === 'email' || email ? 'active' : ''}`}>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) =>
                        dispatch(setInputValue({ field: 'email', value: e.target.value }))
                      }
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="email">Username or Email</label>
                  </div>
                  <div className={`input ${focusedInput === 'password' || password ? 'active' : ''}`}>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) =>
                        dispatch(setInputValue({ field: 'password', value: e.target.value }))
                      }
                      onFocus={() => handleFocus('password')}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <span className="checkbox remember">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) =>
                        dispatch(setInputValue({ field: 'rememberMe', value: e.target.checked }))
                      }
                    />
                    <label htmlFor="remember" className="read-text">
                      Remember me
                    </label>
                  </span>
                  <button disabled={!email || !password}>Login</button>
                </form>
                <a
                  href="javascript:void(0)"
                  className="account-check"
                  onClick={() => dispatch(toggleLoginVisibility())}
                >
                  Don't have an account? <b>Sign up</b>
                </a>
              </div>
            ) : (
              <div className="card" id="register">
                <form onSubmit={handleRegister}>
                  <h1>Sign up</h1>
                  <div
                    className={`input ${focusedInput === 'registerEmail' || registerEmail ? 'active' : ''}`}
                  >
                    <input
                      id="register-email"
                      type="email"
                      value={registerEmail}
                      onChange={(e) =>
                        dispatch(setInputValue({ field: 'registerEmail', value: e.target.value }))
                      }
                      onFocus={() => handleFocus('registerEmail')}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="register-email">Email</label>
                  </div>
                  <div
                    className={`input ${focusedInput === 'registerPassword' || registerPassword ? 'active' : ''}`}
                  >
                    <input
                      id="register-password"
                      type="password"
                      value={registerPassword}
                      onChange={(e) =>
                        dispatch(setInputValue({ field: 'registerPassword', value: e.target.value }))
                      }
                      onFocus={() => handleFocus('registerPassword')}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="register-password">Password</label>
                  </div>
                  <div
                    className={`input ${focusedInput === 'confirmPassword' || confirmPassword ? 'active' : ''}`}
                  >
                    <input
                      id="confirm-password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) =>
                        dispatch(setInputValue({ field: 'confirmPassword', value: e.target.value }))
                      }
                      onFocus={() => handleFocus('confirmPassword')}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="confirm-password">Confirm Password</label>
                  </div>
                  <span className="checkbox remember">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={acceptTerms}
                      onChange={(e) =>
                        dispatch(setInputValue({ field: 'acceptTerms', value: e.target.checked }))
                      }
                    />
                    <label htmlFor="terms" className="read-text">
                      I have read <b>Terms and Conditions</b>
                    </label>
                  </span>
                  <button disabled={!registerEmail || !registerPassword || !acceptTerms}>
                    Register
                  </button>
                </form>
                <a
                  href="javascript:void(0)"
                  className="account-check"
                  onClick={() => dispatch(toggleLoginVisibility())}
                >
                  Already have an account? <b>Sign in</b>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
