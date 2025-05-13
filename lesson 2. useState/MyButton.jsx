import './MyButton.css';
import { useState } from 'react';

export function MyButton(props) {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
        // count++; // ERROR! Attempt to assign to const or readonly variable
    };

    return (
        <button
            className="my-button" onClick={handleClick}>
            {props.text} (Кликов: {count})
        </button>
    );
}

// при обновлении страницы состояние теряется, впрочем это тоже можно решить
// useState — это временное состояние только на время работы страницы
// если нужно "помнить" что-то после обновления — используется localStorage, sessionStorage или БД

/*
// примерная реализация useState:

let globalState = []; // массив, в котором хранятся значения всех useState
let stateCursor = 0; // указатель, отслеживающий текущую позицию useState

function useState(initial) {
    const i = stateCursor; // сохраняем текущую позицию перед её увеличением
    stateCursor++; // увеличиваем указатель для следующего useState

    if (globalState[i] === undefined) {
        globalState[i] = initial; // если значение на текущей позиции не задано, инициализируем его
    }

    const setState = (value) => {
        globalState[i] = value; // сохраняем новое значение в нужную ячейку
        render(); // вызываем перерисовку компонента
    };

    return [globalState[i], setState]; // возвращаем текущее значение и функцию его изменения
}
 */