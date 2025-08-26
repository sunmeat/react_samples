import './MyButton.css';

export function MyButton() {
    function handleClick() {
        alert('Стартуем!');
    }
    return (
        <button className="my-button" onClick={handleClick}>
            Почати нову гру!
        </button>
    );
}
