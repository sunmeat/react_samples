import { createContext, useState } from 'react';

// создание контекста
export const AppContext = createContext();
// чтобы убрать предупреждение ESLint, необходимо вынести провайдер контекста в отдельный файл
// AppContextProvider.jsx (но это некритично)

// провайдер контекста
export function AppContextProvider({ children }) {
    const [theme, setTheme] = useState({
        background: '#4a90e2',
        color: '#ffffff',
        align: 'center',
    });
    const [user] = useState({
        name: 'Гость',
        userCount: 1530,
    });

    // функция для переключения темы
    const toggleTheme = () => {
        setTheme((prev) => ({
            background: prev.background === '#4a90e2' ? '#2c3e50' : '#4a90e2',
            color: '#ffffff',
            align: 'center',
        }));
    };

    return (
        <AppContext.Provider value={{ theme, user, toggleTheme }}>
            {children}
        </AppContext.Provider>
    );
}