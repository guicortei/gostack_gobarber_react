import React, { createContext, useCallback } from 'react';

interface AuthContextType {
  name: string;
  signIn(): void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log('signIn');
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'gui', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
