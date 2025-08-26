import './TodoItem.css';

export function TodoItem({ todo, onRemove }) {

    // обробник видалення задачі
    const handleRemove = () => {
        onRemove(todo.id); // !!! колбек onRemove викликається при зміні текста в полі вводу !!!
    };

    return (
        <li
            className="todo-item"
        >
            {todo.text}
            <button
                className="todo-remove-button"
                onClick={handleRemove}
            >
                Видалити
            </button>
        </li>
    );
}
