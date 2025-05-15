import './Content.css';
import { useState } from 'react';
import { MyButton } from '../mybutton/MyButton.jsx';
import { TodoItem } from '../todoitem/TodoItem.jsx';

export function Content() {
    // состояние для списка задач
    const [todos, setTodos] = useState([]);
    // состояние для текста новой задачи
    const [inputValue, setInputValue] = useState('');

    // функция для добавления задачи
    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos((prev) => [
                ...prev,
                { id: Date.now(), text: inputValue, completed: false },
            ]);
            setInputValue('');
        }
    };

    // функция для удаления задачи
    const removeTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    // функция для обновления текста ввода
    const updateInput = (value) => {
        setInputValue(value);
    };

    // !!! родительский компонент Content определяет функции (addTodo, removeTodo, updateInput)
    // и передает их дочерним компонентам (MyButton, TodoItem) через props !!!

    // дочерние компоненты вызывают эти функции при определённых событиях
    // (например, клик по кнопке или ввод текста), передавая данные назад родителю, если нужно

    // эти вызовы обновляют состояние родителя (todos, inputValue), что приводит к ререндеру

    return (
        <main className="content">
            <h2 className="content-title">
                Список задач
            </h2>
            <p>Всего задач: {todos.length}</p>
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