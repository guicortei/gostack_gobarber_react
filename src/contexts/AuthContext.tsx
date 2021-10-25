import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface CredentialsType {
  email: string;
  password: string;
}

interface AuthContextType {
  name: string;
  signIn(credentials: CredentialsType): void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }): Promise<void> => {
    const response = await api.post('sessions', { email, password });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'gui', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
