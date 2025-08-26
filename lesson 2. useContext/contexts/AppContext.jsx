import { createContext, useState } from 'react';

// створення контексту
export const AppContext = createContext();
// щоб прибрати попередження ESLint, необхідно винести провайдер контексту в окремий файл
// AppContextProvider.jsx (але це некритично)

// провайдер контексту
export function AppContextProvider({ children }) {
    const [theme, setTheme] = useState({
        background: '#4a90e2',
        color: '#ffffff',
        align: 'center',
    });
    const [user] = useState({
        name: 'Гість',
        userCount: 1530,
    });

    // функція для перемикання теми
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
