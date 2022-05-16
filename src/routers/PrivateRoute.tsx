import { Route, Navigate } from 'react-router-dom';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};
