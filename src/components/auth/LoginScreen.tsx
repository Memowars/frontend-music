import { Button } from '@mui/material';
import Link from '@mui/material/Link';

export const LoginScreen = () => {
  /*   const [formLoginValues, handleLoginInputChange] = useForm({
    loginEmail: 'memowars@outlook.es',
    loginPassword: '123456',
  }); */

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log('login');
  };
  const handleLoginInputChange = (e: any) => {
    e.preventDefault();
    console.log('xd');
  };
  return (
    <div className="loging_Container ">
      <h1>Inicio de sesión</h1>
      <div>
        <Button style={{ textTransform: 'none' }} color="inherit">
          <p style={{ marginRight: '3px' }}>¿Aún no tienes una cuenta? </p>
          <Link href="/">Registrate</Link>
        </Button>
      </div>
      <div className="login-form">
        <form action="post">
          <div className="Login_input_container">
            <p>Correo electronico</p>
            <input
              type="text"
              className="Login_input"
              placeholder="Correo"
              name="loginEmail"
              onChange={handleLoginInputChange}
            />
          </div>
          <div className="Login_input_container">
            <p>Contraseña</p>
            <input
              type="password"
              className="Login_input"
              placeholder="Contraseña"
              name="loginEmail"
              onChange={handleLoginInputChange}
            />
          </div>
          <div className="Login_button">
            <Button
              color="primary"
              type="submit"
              value="Iniciar sesión"
              variant="outlined"
              size="large"
              onClick={handleLogin}
            >
              Iniciar sesión
            </Button>
          </div>
          <div>
            <p>¿Olvidaste tu contraseña?</p>
          </div>
        </form>
      </div>
    </div>
  );
};
