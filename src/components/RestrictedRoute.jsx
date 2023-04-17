import { useAuth } from '../hooks';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoading } = useAuth();
  return isLoading ? <Navigate to={redirectTo} /> : Component;
};
