import './MyButton.css';
import { useState, useEffect } from 'react';

export function MyButton(props) {
    const [count, setCount] = useState(0);
    const [buttonText, setButtonText] = useState(props.text); // ініціалізація тексту з пропса

    const handleClick = () => {
        setCount(prev => prev + 1);
        setButtonText(`Натисни мене! (Кліків: ${count + 1})`);
    };

    // логування зміни значення лічильника
    useEffect(() => {
        console.log('Лічильник кліків оновлено:', count);
    }, [count]);

    /*
    useEffect виконує код (побічний ефект) після рендерингу компонента
    () => { console.log("Лічильник кліків оновлено:", count); } — функція, яка виконується
    [count] — масив залежностей. useEffect спрацьовує, коли значення count змінюється
    код всередині useEffect запускається після рендерингу, якщо змінився count
    внизу є приблизна реалізація useEffect
     */

    // логування тексту кнопки при монтуванні
    useEffect(() => { // useEffect розуміє, що відбулося монтування або демонтування компонента, завдяки внутрішній архітектурі React
        console.log('Кнопку змонтовано з текстом:', props.text);
        return () => { // cleanup-функція
            console.log('Кнопку розмонтовано');
        };
    }, [props.text]);

    // спостереження за зміною текста кнопки
    useEffect(() => {
        console.log('Текст кнопки изменён:', buttonText);
    }, [buttonText]);

    // періодичне логування лічильника кожні 3 секунди
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Кількість кліків:', count);
        }, 3000);
        return () => clearInterval(interval);
    }, [count]);

    return (
        <button
            className="my-button"
            onClick={handleClick}
        >
            {props.text} (Кліків зроблено: {count})
        </button>
    );
}

// приблизна реалізація useEffect (якщо цікаво :))
/*
// внутрішній стан React для зберігання ефектів
let hooks = []; // масив хуків для поточного компонента
let currentHookIndex = 0; // індекс поточного хука
let isFirstRender = true; // прапор першого рендерингу

// структура ефекту
function createEffect(callback, dependencies) {
    return {
        callback,     // функція ефекту
        dependencies, // масив залежностей
        cleanup: null // функція очищення (якщо повернута)
    };
}

// реалізація useEffect
function useEffect(callback, dependencies) {
    // отримуємо або створюємо ефект для поточного хука
    const hookIndex = currentHookIndex++;
    const prevEffect = hooks[hookIndex] || null;

    // перевіряємо, чи змінилися залежності
    const hasChanged = !prevEffect || dependencies.some(
        (dep, i) => !Object.is(dep, prevEffect.dependencies[i])
    );

    // якщо це перший рендер або залежності змінилися
    if (isFirstRender || hasChanged) {
        // створюємо новий ефект
        const effect = createEffect(callback, dependencies);
        hooks[hookIndex] = effect;

        // асинхронно виконуємо ефект після рендерингу
        queueMicrotask(() => {
            // виконуємо ефект
            const cleanup = callback();
            // зберігаємо функцію очищення, якщо вона є
            if (typeof cleanup === "function") {
                effect.cleanup = cleanup;
            }
        });
    }
}

// рендер компоненту
function renderComponent(component) {
    hooks = []; // скидаємо хуки (або беремо з Fiber)
    currentHookIndex = 0;
    isFirstRender = !component.hasRendered;

    // виконуємо компонент
    component();

    // позначаємо, що рендер завершено
    component.hasRendered = true;
}

// при демонтуванні компонента
function unmountComponent() {
    hooks.forEach(effect => {
        // викликаємо функцію очищення, якщо вона є
        if (effect.cleanup) {
            effect.cleanup();
        }
    });
    hooks = []; // очищаємо хуки
}

// приклад використання в компоненті
function MyComponent() {
    const [count, setCount] = useState(0); // інший хук

    useEffect(() => {
        // ефект
        console.log("Лічильник кліків оновлено: ", count);
        // повертаємо функцію очищення (опціонально)
        return () => console.log("Очищення для count: ", count);
    }, [count]);

    // ... решта логіки компонента
}

 */
