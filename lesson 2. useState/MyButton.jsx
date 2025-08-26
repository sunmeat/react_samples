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

// при оновленні сторінки стан втрачається, втім це теж можна вирішити
// useState — це тимчасовий стан тільки на час роботи сторінки
// якщо потрібно «запам'ятати» щось після оновлення — використовується localStorage, sessionStorage або БД

/*
// приблизна реалізація useState:

let globalState = []; // масив, в якому зберігаються значення всіх useState
let stateCursor = 0; // покажчик, що відстежує поточну позицію useState

function useState(initial) {
    const i = stateCursor; // зберігаємо поточну позицію перед її збільшенням
    stateCursor++; // збільшуємо покажчик для наступного useState

    if (globalState[i] === undefined) {
        globalState[i] = initial; // якщо значення на поточній позиції не задано, ініціалізуємо його
    }

    const setState = (value) => {
        globalState[i] = value; // зберігаємо нове значення в потрібну комірку
        render(); // викликаємо перемальовування компонента
    };

    return [globalState[i], setState]; // повертаємо поточне значення і функцію його зміни
}

 */
