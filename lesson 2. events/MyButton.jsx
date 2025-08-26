import './MyButton.css';

export function MyButton(props) {
    const handleDoubleClick = () => {
        alert('Подвійний клік по кнопці!');
    };

    const handleMouseEnter = () => {
        console.log('Курсор над кнопкою');
    };

    const handleMouseLeave = () => {
        console.log('Курсор за межами кнопки');
    };

    return (
        <button
            className="my-button"
            onClick={props.onClick}
            onDoubleClick={handleDoubleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {props.label} (Клацнули {props.clickCount} разів)
        </button>
    );
}
