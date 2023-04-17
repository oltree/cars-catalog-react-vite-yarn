import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';

import { TypeUser } from '../types/user.interface';

type TypeAuthContext = {
  user: TypeUser;
  setUser: Dispatch<SetStateAction<TypeUser>>;
};

export const AuthContext = createContext<TypeAuthContext>({
  user: null,
  setUser: () => {},
});

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<TypeUser>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;