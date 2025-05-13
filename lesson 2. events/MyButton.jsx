import './MyButton.css';

export function MyButton(props) {
    const handleDoubleClick = () => {
        alert('Двойной клик по кнопке!');
    };

    const handleMouseEnter = () => {
        console.log('Курсор над кнопкой');
    };

    const handleMouseLeave = () => {
        console.log('Курсор ушел с кнопки');
    };

    return (
        <button
            className="my-button"
            onClick={props.onClick}
            onDoubleClick={handleDoubleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {props.label} (Кликнули {props.clickCount} раз)
        </button>
    );
}