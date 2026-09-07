import React, { createContext, useContext, useState } from 'react';

interface User {
    name: string;
    phone: string;
}

interface AuthContextType {
    user: User | null;
    login: (name: string, phone: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        const savedUser = localStorage.getItem('blinkit_user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (name: string, phone: string) => {
        const newUser = { name, phone };
        setUser(newUser);
        localStorage.setItem('blinkit_user', JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('blinkit_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
