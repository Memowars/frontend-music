import React, { useState } from 'react';
import LogIn from './LogIn';
import SignIn from './SignIn';

const LoginScreen = () => {
  const [Auth, setAuth] = useState(true);
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
