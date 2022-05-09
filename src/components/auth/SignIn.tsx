import React from 'react';
import { Button, Link } from '@mui/material';
import { useFormik } from 'formik';
import { IForm } from '../../Interfaces/IForm';
import * as Yup from 'yup';

const SignIn = () => {
  const formik = useFormik<IForm>({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, 'Nombre demasiado largo')
        .required('Nombre requerido'),
      email: Yup.string().email('Correo invalido').required('Correo requerido'),
      password: Yup.string().required('Contraseña requerida'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div className="animate__animated animate__fadeIn animate__delay-1s">
        <h1>Registrate</h1>
        <div>
          <Button style={{ textTransform: 'none' }} color="inherit">
            <p style={{ marginRight: '3px' }}>¿Ya tienes una cuenta? </p>
            <Link href="/">Iniciar sesión</Link>
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
              {formik.touched.userName && formik.errors.userName ? (
                <p>{formik.errors.userName}</p>
              ) : null}
              <input
                type="text"
                className="Login_input"
                placeholder="Nombre"
                name="userName"
                onChange={formik.handleChange}
                onBlur={formik.handleChange}
                value={formik.values.userName}
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
                Registrate
              </Button>
            </div>
          </form>
        </div>
        <div>
          <p>¿Olvidaste tu contraseña?</p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
