import './Header.css';

export function Header({ title, userCount, theme }) {
    return (
        <header className="header" style={{ backgroundColor: theme.background, color: theme.color }}>
            <h1 className="header-title">{title}</h1>
            <p style={{ textAlign: theme.align }}>Активных пользователей по всему миру прямо сейчас: {userCount}</p>
        </header>
    );
}