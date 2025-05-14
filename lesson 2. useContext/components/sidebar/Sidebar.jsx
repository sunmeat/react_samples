import './Sidebar.css';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext.jsx';

export function Sidebar() {
    const { theme, user } = useContext(AppContext);
    const menuItems = ['Новая игра', 'Загрузить игру', 'Таблица рекордов', 'Об авторах', 'Выйти'];

    return (
        <aside className="sidebar" style={{ backgroundColor: theme.background }}>
            <nav>
                <ul className="sidebar-menu">
                    {menuItems.map((item, index) => (
                        <li key={`${item}-${index}`}>
                            <a href="#" className="sidebar-link">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
                <p>Игрок: {user.name}</p>
            </nav>
        </aside>
    );
}