import './Content.css';
import {MyButton} from "../mybutton/MyButton.jsx";

export function Content({ welcomeMessage, settings, ButtonComponent }) {
    return (
        <main className="content">
            <h2 className="content-title">{welcomeMessage}</h2>
            <p>
                Уровень сложности: {settings.difficulty} | Игроков из группы ПВ421: {settings.players}
            </p>
            <ButtonComponent />
        </main>
    );
}

/*
Ошибка "unused component ..." обычно возникает в инструментах линтинга
(например, ESLint) или IDE, когда компонент, переданный через props, не используется явно в коде,
или линтер не распознает его как используемый. ButtonComponent используется как JSX-элемент (<ButtonComponent />),
но линтер может не понимать, что это динамический компонент, переданный через props.

В компоненте Content передаётся ButtonComponent как prop и используется как <ButtonComponent />.
Однако некоторые линтеры (например, ESLint с правилом react/prop-types или no-unused-vars) могут не распознавать,
что ButtonComponent — это компонент, и считать его неиспользуемой переменной, особенно если:
- Отсутствует явное определение типов props (например, с помощью PropTypes)
- Линтер настроен строго, и не понимает динамическое использование компонента

Чтобы устранить предупреждение, можно:
1. Добавить PropTypes для явного указания типа
Нужно указать, что ButtonComponent — это компонент, используя PropTypes.elementType или PropTypes.func.
Это поможет линтеру понять, что prop используется корректно.
2. Либо отключить правило в конфигурации ESLint (в файле .eslintrc.json / eslint.config.js):
{
    "rules": {
        "no-unused-vars": ["error", { "varsIgnorePattern": "ButtonComponent" }]
    }
}
3. Либо установить плагин eslint-plugin-react
npm install eslint-plugin-react eslint-plugin-react-hooks --save-dev
4. Либо добавить строку в  rules: { eslint.config.js
"react/jsx-uses-vars": "error",
и потом сделать
File > Invalidate Caches / Restart, для обновления кэша и перезагрузки конфигурации ESLint !!! мне в шторме помогло именно это
*/
