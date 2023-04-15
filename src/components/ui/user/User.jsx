import { memo } from 'react';

import { useAuth } from '../../../hooks/useAuth';

import styles from './User.module.scss';

const User = () => {
  const { user, setUser } = useAuth();

  const handleClick = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({ name: 'Max' });
    }
  };

  const welcomeMessage = user ? `Welcome, ${user.name}` : 'Welcome';
  const buttonText = user ? 'Logout' : 'Login';

  return (
    <div className={styles.wrapper}>
      <h2>{welcomeMessage}</h2>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default memo(User);
