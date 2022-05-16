import { Button } from '@mui/material';

import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { fetchSinToken } from '../../helpers/fetch';
import { IForm } from '../../Interfaces/IForm';
const LogIn = () => {
  const navigate = useNavigate();

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
      const login = async () => {
        const resp = await fetchSinToken('auth/login', values, 'POST');
        const res = await resp.json();
        console.log('DATA POSTEADA', res);
        navigate('/home', {
          replace: true,
        });
      };
      login();
    },
  });
  return (
    <div className="animate__animated animate__fadeIn  text-white py-8">
      <h2>Inicio de sesión</h2>
      <div className="login-form text-black">
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
          <div className="Login_button my-4">
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
