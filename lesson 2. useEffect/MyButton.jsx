import './MyButton.css';
import { useState, useEffect } from 'react';

export function MyButton(props) {
    const [count, setCount] = useState(0);
    const [buttonText, setButtonText] = useState(props.text); // Инициализируем текст из пропса

    const handleClick = () => {
        setCount(prev => prev + 1);
        setButtonText(`Нажми меня! (Кликов: ${count + 1})`);
    };

    // логирование изменения счётчика
    useEffect(() => {
        console.log('Счётчик кликов обновлен:', count);
    }, [count]);

    /*
    useEffect выполняет код (побочный эффект) после рендера компонента
    () => { console.log('Счётчик кликов обновлен:', count); } — функция, которая выполняется
    [count] — массив зависимостей. useEffect срабатывает, когда значение count изменяется
    код внутри useEffect запускается после рендера, если изменился count
    внизу есть примерная реализация useEffect
     */

    // логирование текста кнопки при монтировании
    useEffect(() => { // useEffect понимает, что произошло монтирование или размонтирование компонента, благодаря внутренней архитектуре React
        console.log('Кнопка смонтирована с текстом:', props.text);
        return () => { // cleanup-функция
            console.log('Кнопка размонтирована');
        };
    }, [props.text]);

    // наблюдение за изменением текста кнопки
    useEffect(() => {
        console.log('Текст кнопки изменён:', buttonText);
    }, [buttonText]);

    // периодическое логирование счётчика каждые 3 секунды
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Текущий счётчик кликов:', count);
        }, 3000);
        return () => clearInterval(interval);
    }, [count]);

    return (
        <button
            className="my-button"
            onClick={handleClick}
        >
            {props.text} (Кликов: {count})
        </button>
    );
}

// примерная реализация useEffect (если интересно :))
/*
// внутреннее состояние React для хранения эффектов
let hooks = []; // массив хуков для текущего компонента
let currentHookIndex = 0; // индекс текущего хука
let isFirstRender = true; // флаг первого рендера

// структура эффекта
function createEffect(callback, dependencies) {
    return {
        callback, // функция эффекта
        dependencies, // массив зависимостей
        cleanup: null // функция очистки (если возвращена)
    };
}

// реализация useEffect
function useEffect(callback, dependencies) {
    // получаем или создаём эффект для текущего хука
    const hookIndex = currentHookIndex++;
    const prevEffect = hooks[hookIndex] || null;

    // проверяем, изменились ли зависимости
    const hasChanged = !prevEffect || dependencies.some(
        (dep, i) => !Object.is(dep, prevEffect.dependencies[i])
    );

    // если это первый рендер или зависимости изменились
    if (isFirstRender || hasChanged) {
        // создаём новый эффект
        const effect = createEffect(callback, dependencies);
        hooks[hookIndex] = effect;

        // асинхронно выполняем эффект после рендера
        queueMicrotask(() => {
            // выполняем эффект
            const cleanup = callback();
            // сохраняем функцию очистки, если она есть
            if (typeof cleanup === 'function') {
                effect.cleanup = cleanup;
            }
        });
    }
}

// рендер компонента
function renderComponent(component) {
    hooks = []; // сбрасываем хуки (или берём из Fiber)
    currentHookIndex = 0;
    isFirstRender = !component.hasRendered;

    // выполняем компонент
    component();

    // помечаем, что рендер завершён
    component.hasRendered = true;
}

// при размонтировании компонента
function unmountComponent() {
    hooks.forEach(effect => {
        // вызываем функцию очистки, если она есть
        if (effect.cleanup) {
            effect.cleanup();
        }
    });
    hooks = []; // очищаем хуки
}

// пример использования в компоненте
function MyComponent() {
    const [count, setCount] = useState(0); // другой хук

    useEffect(() => {
        // эффект
        console.log('Счётчик кликов обновлен:', count);
        // возвращаем функцию очистки (опционально)
        return () => console.log('Очистка для count:', count);
    }, [count]);

    // ... остальная логика компонента
}
 */