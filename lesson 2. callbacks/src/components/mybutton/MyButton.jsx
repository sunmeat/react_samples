import './MyButton.css';
import { useState } from 'react';

export function MyButton({ inputValue, onInputChange, onAddTodo }) {
    const [clickCount, setClickCount] = useState(0);

    // обработчик клика по кнопке
    const handleAddClick = () => {
        setClickCount((prev) => prev + 1);
        onAddTodo(); // !!! коллбэк onAddTodo вызывается при клике по кнопке "Добавить" !!!
    };

    // обработчик изменения ввода
    const handleInputChange = (e) => {
        onInputChange(e.target.value); // !!! коллбэк onInputChange вызывается при изменении текста в поле ввода !!!
    };

    return (
        <div className="my-button-container">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Введите текст задачи"
                className="my-button-input"
            />
            <button
                className="my-button"
                onClick={handleAddClick}
            >
                Добавить (Кликов: {clickCount})
            </button>
        </div>
    );
}