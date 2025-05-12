import './Sidebar.css';

export function Sidebar({ menuItems, onMenuSelect }) {
    return (
        <aside className="sidebar">
            <nav>
                <ul className="sidebar-menu">
                    {menuItems.map((item, index) => ( // .map() здесь перебирает массив menuItems и для каждого элемента создаёт HTML-элемент <li> с ссылкой, то есть он превращает каждый пункт меню в отдельный элемент списка
                        <li key={index}>
                            <a href="#"
                                className="sidebar-link"
                                onClick={() => onMenuSelect(item)}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
