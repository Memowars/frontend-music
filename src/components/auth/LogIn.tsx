import { Button } from '@mui/material';
import React from 'react';
import Link from '@mui/material/Link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IForm } from '../../Interfaces/IForm';
const LogIn = () => {
  const formik = useFormik<IForm>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Correo invalido')
        .required('Correo requerido'),
      password: Yup.string().required('Contraseña requerida'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="animate__animated animate__fadeIn animate__delay-1s">
      <h2>Inicio de sesión</h2>
      <div>
        <Button style={{ textTransform: 'none' }} color="inherit">
          <p style={{ marginRight: '3px' }}>¿Aún no tienes una cuenta? </p>
          <Link href="/">Registrate</Link>
        </Button>
      </div>
      <div className="login-form">
        <form action="post" onSubmit={formik.handleSubmit}>
          <div className="Login_input_container">
            {formik.touched.email && formik.errors.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
            <input
              type="email"
              className="Login_input"
              placeholder="Correo"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="Login_input_container">
            {formik.touched.password && formik.errors.password ? (
              <p>{formik.errors.password}</p>
            ) : null}
            <input
              type="password"
              className="Login_input"
              placeholder="Contraseña"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="Login_button">
            <Button
              color="primary"
              type="submit"
              value="Iniciar sesión"
              variant="outlined"
              size="large"
            >
              Iniciar sesión
            </Button>
          </div>
        </form>
      </div>
      <div>
        <p>¿Olvidaste tu contraseña?</p>
      </div>
    </div>
  );
};

export default LogIn;