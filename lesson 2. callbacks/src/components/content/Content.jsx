import './Content.css';
import { useState } from 'react';
import { MyButton } from '../mybutton/MyButton.jsx';
import { TodoItem } from '../todoitem/TodoItem.jsx';

export function Content() {
    // стан для списку задач
    const [todos, setTodos] = useState([]);
    // стан для тексту нової задачі
    const [inputValue, setInputValue] = useState('');

    // функція для додавання задачі
    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos((prev) => [
                ...prev,
                { id: Date.now(), text: inputValue, completed: false },
            ]);
            setInputValue('');
        }
    };

    // функція для видалення задачі
    const removeTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    // функція для оновлення тексту вводу
    const updateInput = (value) => {
        setInputValue(value);
    };

    // !!! батьківський компонент Content визначає функції (addTodo, removeTodo, updateInput)
    // і передає їх дочірнім компонентам (MyButton, TodoItem) через props !!!

    // дочірні компоненти викликають ці функції при певних подіях
    // (наприклад, клік по кнопці або введення тексту), передаючи дані назад батькові, якщо потрібно

    // ці виклики оновлюють стан батька (todos, inputValue), що призводить до ререндерингу

    return (
        <main className="content">
            <h2 className="content-title">
                Список задач
            </h2>
            <p>Всього задач: {todos.length}</p>
            <MyButton
                inputValue={inputValue}
                onInputChange={updateInput}
                onAddTodo={addTodo}
            />
            <ul className="todo-list">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onRemove={removeTodo}
                    />
                ))}
            </ul>
        </main>
    );
}
