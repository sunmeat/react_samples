import './MyButton.css';

export function MyButton() {
    function handleClick() {
        alert('Стартуем!');
    }
    return (
        <button className="my-button" onClick={handleClick}>
            Начать новую игру!
        </button>
    );
}