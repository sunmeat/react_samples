import './Header.css';
import { useState } from 'react';

export function Header({ title, userCount, theme }) {
    const [isHighlighted, setIsHighlighted] = useState(false);

    const toggleHighlight = () => {
        setIsHighlighted(prev => !prev);
    };

    return (
        <header
            className="header"
            style={{
                backgroundColor: theme.background,
                color: theme.color,
                border: isHighlighted ? '2px solid gold' : 'none'
            }}
        >
            <h1 className="header-title">{title}</h1>
            <p style={{ textAlign: theme.align }}>
                Користувачів по всьому світі прям зараз: {userCount}
            </p>
            <button
                className="header-button"
                onClick={toggleHighlight}
            >
                {isHighlighted ? 'Прибрати виділення' : 'Виділити заголовок'}
            </button>
        </header>
    );
}
