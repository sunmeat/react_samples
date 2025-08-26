import './Sidebar.css';

export function Sidebar() {
    return (
        <aside className="sidebar">
            <nav>
                <ul className="sidebar-menu">
                    <li><a href="#" className="sidebar-link">Нова гра</a></li>
                    <li><a href="#" className="sidebar-link">Завантажити гру</a></li>
                    <li><a href="#" className="sidebar-link">Про автора</a></li>
                    <li><a href="#" className="sidebar-link">Налаштування</a></li>
                    <li><a href="#" className="sidebar-link">Вийти</a></li>
                </ul>
            </nav>
        </aside>
    );
}
