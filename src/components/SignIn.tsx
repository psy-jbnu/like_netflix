
import React from 'react';
import '../styles/sign-in.css';

const SignIn: React.FC = () => {
    return (
        <div className="sign-in">
            <h1>Sign In</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default SignIn;
