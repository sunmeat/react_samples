import './Header.css';
import { useEffect, useState } from 'react';

export function Header({ title, userCount, theme }) {
    const [apiUser, setApiUser] = useState(null);

    // периодический запрос к API для получения случайного пользователя каждые 5 секунд
    useEffect(() => {
        const fetchUser = async () => {
            try {
                // случайный ID от 1 до 10 (jsonplaceholder имеет 10 пользователей)
                const randomId = Math.floor(Math.random() * 10) + 1;
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`);
                if (!response.ok) {
                    throw new Error(`HTTP ошибка: ${response.status}`);
                }
                const data = await response.json();
                setApiUser(data);
                console.log('Пользователь с API:', data);
            } catch (error) {
                console.error('Ошибка API:', error);
            }
        };

        fetchUser(); // начальный запрос
        const interval = setInterval(fetchUser, 5000); // каждые 5 секунд
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
                Активных игроков по всему миру прямо сейчас: {userCount}
            </p>
            {apiUser && <p>Лучший игрок на данный момент: {apiUser.name}</p>}
        </header>
    );
}