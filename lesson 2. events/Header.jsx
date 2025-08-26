import './Header.css';

export function Header({title, userCount, theme}) {
    const handleMouseMove = (event) => {
        console.log(`Курсор: (${event.clientX}, ${event.clientY})`);
    };

    const handleContextMenu = (event) => {
        event.preventDefault();
        alert('Контекстне меню в заголовку');
    };

    return (
        <header
            className="header"
            style={{backgroundColor: theme.background, color: theme.color}}
            onMouseMove={handleMouseMove}
            onContextMenu={handleContextMenu}
        >
            <h1 className="header-title">{title}</h1>
            <p style={{textAlign: theme.align}}>Користувачів по всому світі зараз: {userCount}</p>
        </header>
    );
}
