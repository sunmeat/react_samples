import './MyButton.css';

export function MyButton(props) {
    return (
        <button className="my-button" onClick={props.onClick}>
            {props.label} (Кликнули {props.clickCount} раз)
        </button>
    );
}