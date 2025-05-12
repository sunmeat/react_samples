import './Sidebar.css';

export function Sidebar() {
    return (
        <aside className="sidebar">
            <nav>
                <ul className="sidebar-menu">
                    <li><a href="#" className="sidebar-link">Новая игра</a></li>
                    <li><a href="#" className="sidebar-link">Загрузить игру</a></li>
                    <li><a href="#" className="sidebar-link">Об авторе</a></li>
                    <li><a href="#" className="sidebar-link">Настройки</a></li>
                    <li><a href="#" className="sidebar-link">Выход</a></li>
                </ul>
            </nav>
        </aside>
    );
}