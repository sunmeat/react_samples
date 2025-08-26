import './Sidebar.css';

export function Sidebar({menuItems, onMenuSelect}) {
    const handleMenuClick = (event, item) => {
        event.preventDefault();
        onMenuSelect(item);
    };

    const handleWheel = (event) => {
        console.log('Колесо над сайдбаром:', event.deltaY);
    };

    return (
        <aside
            className="sidebar"
            onWheel={handleWheel}
        >
            <nav>
                <ul className="sidebar-menu">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className="sidebar-link"
                                onClick={(e) => handleMenuClick(e, item)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
