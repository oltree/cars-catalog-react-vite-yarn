import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../providers/AuthProvider';

export const withAuth = (Component) => (props) => {
  const { user } = useContext(AuthContext);

  if (!user)
    return (
      <>
        <Link to="/">Back</Link>
        <p> You are not autorized to view this page</p>
      </>
    );

  return <Component {...props} />;
};
