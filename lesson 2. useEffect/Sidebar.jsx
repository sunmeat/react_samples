import './Sidebar.css';
import { useEffect, useState } from 'react';

export function Sidebar({ menuItems }) {
    const [localMenuItems, setLocalMenuItems] = useState(menuItems); // локальний стан меню

    // логування змін елементів меню
    useEffect(() => {
        console.log('Елементы меню оновлено:', localMenuItems);
    }, [localMenuItems]);

    // логування монтування компонента
    useEffect(() => {
        console.log('Компонент Sidebar змонтовано');
        return () => {
            console.log('Компонент Sidebar розмонтовано');
        };
    }, []);

    // періодичний запит до API для отримання випадкового завдання кожні 5 секунд
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                // випадковий ID від 1 до 200
                const randomId = Math.floor(Math.random() * 200) + 1;
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomId}`);
                if (!response.ok) {
                    throw new Error(`HTTP помилка: ${response.status}`);
                }
                const data = await response.json();
                console.log('Задача з API:', data);
                // додаємо заголовок завдання як новий пункт меню
                setLocalMenuItems(prev => [...prev, data.title]);
            } catch (error) {
                console.error('Помилка API:', error);
            }
        };

        fetchTodos(); // початковий запит
        const interval = setInterval(fetchTodos, 5000); // кожні 5 секунд
        return () => clearInterval(interval);
    }, []);

    // періодичне логування меню кожні 8 секунд
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Поточні елементи меню:', localMenuItems);
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

