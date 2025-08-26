import './Header.css';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext.jsx';

export function Header() {
    const { theme, user } = useContext(AppContext);

    return (
        <header
            className="header"
            style={{
                backgroundColor: theme.background,
                color: theme.color,
            }}
        >
            <h1 className="header-title">Heroes of JavaScript and React III: useContext</h1>
            <p style={{ textAlign: theme.align }}>
                Користувачів по всьому світі прям зараз: {user.userCount}
            </p>
        </header>
    );
}
