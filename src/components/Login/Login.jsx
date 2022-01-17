import React from 'react';
import FormLogin from './FormLogin';

const Login = () => {
  return (
    <div>
      <div className="App">
        <div className="login">
          <FormLogin />
          <div className="login__img">
            <div className="imgLogo"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
