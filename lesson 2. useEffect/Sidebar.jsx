import './Sidebar.css';
import { useEffect, useState } from 'react';

export function Sidebar({ menuItems }) {
    const [localMenuItems, setLocalMenuItems] = useState(menuItems); // локальное состояние меню

    // логирование изменений элементов меню
    useEffect(() => {
        console.log('Элементы меню обновлены:', localMenuItems);
    }, [localMenuItems]);

    // логирование монтирования компонента
    useEffect(() => {
        console.log('Компонент Sidebar смонтирован');
        return () => {
            console.log('Компонент Sidebar размонтирован');
        };
    }, []);

    // периодический запрос к API для получения случайной задачи каждые 5 секунд
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                // случайный ID от 1 до 200
                const randomId = Math.floor(Math.random() * 200) + 1;
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomId}`);
                if (!response.ok) {
                    throw new Error(`HTTP ошибка: ${response.status}`);
                }
                const data = await response.json();
                console.log('Задача с API:', data);
                // добавляем заголовок задачи как новый пункт меню
                setLocalMenuItems(prev => [...prev, data.title]);
            } catch (error) {
                console.error('Ошибка API:', error);
            }
        };

        fetchTodos(); // начальный запрос
        const interval = setInterval(fetchTodos, 5000); // каждые 5 секунд
        return () => clearInterval(interval);
    }, []);

    // периодическое логирование меню каждые 8 секунд
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Текущие элементы меню:', localMenuItems);
        }, 8000);
        return () => clearInterval(interval);
    }, [localMenuItems]);

    return (
        <aside className="sidebar">
            <nav>
                <ul className="sidebar-menu">
                    {localMenuItems.map((item, index) => (
                        <li key={`${item}-${index}`}>
                            <a href="#" className="sidebar-link">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}