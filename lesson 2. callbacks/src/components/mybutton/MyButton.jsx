import './MyButton.css';
import { useState } from 'react';

export function MyButton({ inputValue, onInputChange, onAddTodo }) {
    const [clickCount, setClickCount] = useState(0);

    // обробник кліку по кнопці
    const handleAddClick = () => {
        setClickCount((prev) => prev + 1);
        onAddTodo(); // !!! колбек onAddTodo викликається при кліку по кнопці "Додати" !!!
    };

    // обробник зміни вводу
    const handleInputChange = (e) => {
        onInputChange(e.target.value); // !!! колбек onInputChange викликається при зміні тексту в полі вводу !!!
    };

    return (
        <div className="my-button-container">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Введіть текст задачі"
                className="my-button-input"
            />
            <button
                className="my-button"
                onClick={handleAddClick}
            >
                Додати (Кліків: {clickCount})
            </button>
        </div>
    );
}
