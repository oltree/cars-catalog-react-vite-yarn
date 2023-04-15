import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

const ERROR_MESSAGE = 'You are not authorized to view this page!';

export const withAuth = (Component) => (props) => {
  const { user } = useAuth();

  return user ? (
    <Component {...props} />
  ) : (
    <>
      <Link to="/">Back</Link>
      <p>{ERROR_MESSAGE}</p>
    </>
  );
};
