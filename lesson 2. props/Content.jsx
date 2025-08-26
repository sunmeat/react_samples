import './Content.css';
import {MyButton} from "../mybutton/MyButton.jsx";

export function Content({ welcomeMessage, settings, ButtonComponent }) {
    return (
        <main className="content">
            <h2 className="content-title">{welcomeMessage}</h2>
            <p>
                Рівень складності: {settings.difficulty} | Гравців з групи СПР411: {settings.players}
            </p>
            <ButtonComponent />
        </main>
    );
}

/* помилка «unused component ...» зазвичай виникає в інструментах лінтування
(наприклад, ESLint) або IDE, коли компонент, переданий через props, не використовується явно в коді,
або лінтер не розпізнає його як використовуваний. ButtonComponent використовується як JSX-елемент (<ButtonComponent />),
але лінтер може не розуміти, що це динамічний компонент, переданий через props.

у компоненті Content передається ButtonComponent як prop і використовується як <ButtonComponent />.
однак деякі лінтери (наприклад, ESLint з правилом no-unused-vars) можуть не розпізнавати,
що ButtonComponent — це компонент, і вважати його невикористаною змінною, особливо якщо:
- відсутнє явне визначення типів props (тому що код на JavaScript, а не Typescript)
- лінтер налаштований строго і не розуміє динамічне використання компонента

щоб усунути попередження, можна відключити правило в конфігурації ESLint (у файлі .eslintrc.json / eslint.config.js):
{
    "rules": {
        "no-unused-vars": ["error", { "varsIgnorePattern": "ButtonComponent" }]
    }
} */
