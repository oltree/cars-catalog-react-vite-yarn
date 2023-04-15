import { useCallback, useContext, memo } from 'react';

import { AuthContext } from '../../../../providers/AuthProvider';

const User = () => {
  const { user, setUser } = useContext(AuthContext);
  const handleLogin = useCallback(() => setUser({ name: 'Max' }), [setUser]);
  const handleLogout = useCallback(() => setUser(null), [setUser]);

  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      {user ? (
        <>
          <h2>Welcome, {user.name}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Welcome</h2>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default memo(User);
