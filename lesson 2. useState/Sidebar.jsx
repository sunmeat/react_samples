import './Sidebar.css';
import { useState } from 'react';

export function Sidebar({ menuItems, onMenuSelect }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleMenuClick = (event, item) => {
        event.preventDefault();
        setSelectedItem(item);
        onMenuSelect(item);
    };

    return (
        <aside className="sidebar">
            <nav>
                <ul className="sidebar-menu">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href="#"
                                className={`sidebar-link ${selectedItem === item ? 'selected' : ''}`}
                                onClick={(e) => handleMenuClick(e, item)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            {selectedItem && (
                <p className="sidebar-selected">Выбрано: {selectedItem}</p>
            )}
        </aside>
    );
}