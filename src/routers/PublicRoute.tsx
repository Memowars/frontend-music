import { Route, Navigate } from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? <Navigate to="/" /> : <Component {...props} />
      }
    />
  );
};
