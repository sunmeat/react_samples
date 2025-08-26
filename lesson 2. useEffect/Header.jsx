import './Header.css';
import { useEffect, useState } from 'react';

export function Header({ title, userCount, theme }) {
    const [apiUser, setApiUser] = useState(null);

    // періодичний запит до API для отримання випадкового користувача кожні 5 секунд
    useEffect(() => {
        const fetchUser = async () => {
            try {
                // випадковий ID від 1 до 10 (jsonplaceholder має 10 користувачів)
                const randomId = Math.floor(Math.random() * 10) + 1;
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`);
                if (!response.ok) {
                    throw new Error(`HTTP помилка: ${response.status}`);
                }
                const data = await response.json();
                setApiUser(data);
                console.log('Користувач з API:', data);
            } catch (error) {
                console.error('Помилка API:', error);
            }
        };

        fetchUser(); // початковий запит
        const interval = setInterval(fetchUser, 5000); // кожні 5 секунд
        return () => clearInterval(interval);
    }, []);

    return (
        <header
            className="header"
            style={{
                backgroundColor: theme.background,
                color: theme.color,
            }}
        >
            <h1 className="header-title">{title}</h1>
            <p style={{ textAlign: theme.align }}>
                Гравців по всьому світі зараз: {userCount}
            </p>
            {apiUser && <p>Найкращий гравець: {apiUser.name}</p>}
        </header>
    );
}
