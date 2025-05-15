import './TodoItem.css';

export function TodoItem({ todo, onRemove }) {

    // обработчик удаления задачи
    const handleRemove = () => {
        onRemove(todo.id); // !!! коллбэк onRemove вызывается при изменении текста в поле ввода !!!
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
                Удалить
            </button>
        </li>
    );
}