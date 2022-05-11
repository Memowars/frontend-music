import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LogIn from '../auth/LogIn';
import SignIn from '../auth/SignIn';

const LoginScreen = () => {
  useSelector;
  const [Auth, setAuth] = useState(false);
  return (
    <div className="loging_Container ">
      <h1>Music 8G</h1>
      <hr
        style={{ color: 'white', width: '700px' }}
        className="animate__animated  animate__backInLeft"
      />
      {Auth ? <SignIn /> : <LogIn />}
      <hr
        style={{ color: 'white', width: '700px' }}
        className="animate__animated  animate__backInRight"
      />
    </div>
  );
};

export default LoginScreen;
