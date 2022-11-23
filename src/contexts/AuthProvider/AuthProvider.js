import React, { createContext } from 'react';
import useFetch from '../../hooks/useFetch';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const allContexts = useFetch();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider; 