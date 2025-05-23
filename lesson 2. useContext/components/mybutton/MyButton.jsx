import './MyButton.css';
import { useState, useContext } from 'react';
import { AppContext } from '../../contexts/AppContext.jsx';

export function MyButton() {
    const [count, setCount] = useState(0);
    const { theme, toggleTheme } = useContext(AppContext);

    const handleClick = () => {
        setCount((prev) => prev + 1);
        toggleTheme(); // переключение темы при клике
    };

    return (
        <button
            className="my-button"
            onClick={handleClick}
            style={{
                backgroundColor: theme.background,
                color: theme.color,
            }}
        >
            Нажми меня (Кликов: {count})
        </button>
    );
}