import React, { useState } from 'react';
import LogIn from '../auth/LogIn';
import SignIn from '../auth/SignIn';

const LoginScreen = () => {
  const [Auth, setAuth] = useState(true);
  return (
    <div className="loging_Container ">
      <h1 className="text-6xl mb-6">Music 8G</h1>
      <hr
        style={{ color: 'white', width: '700px' }}
        className="animate__animated  animate__backInLeft"
      />
      <div className="h-4/6">
        <div>
          <p>{Auth ? '¿Ya tienes un cuenta?' : '¿No tienes cuenta?'}</p>
          <p
            onClick={() => setAuth(!Auth)}
            className="cursor-pointer text-blue-400"
          >
            {Auth ? 'Iniciar sesión' : 'Registrate'}
          </p>
        </div>
        {Auth ? <SignIn /> : <LogIn />}
      </div>
      <hr
        style={{ color: 'white', width: '700px' }}
        className="animate__animated  animate__backInRight"
      />
    </div>
  );
};

export default LoginScreen;
