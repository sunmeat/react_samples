import './Content.css';
import {MyButton} from "../mybutton/MyButton.jsx";

export function Content({welcomeMessage, settings, ButtonComponent}) {
    const handleInputChange = (event) => {
        console.log('Введено:', event.target.value);
    };

    const handleInputFocus = () => {
        console.log('Поле в фокусе');
    };

    const handleInputBlur = () => {
        console.log('Поле потеряло фокус');
    };

    return (
        <main className="content">
            <h2 className="content-title">{welcomeMessage}</h2>
            <p>
                Уровень сложности: {settings.difficulty} | Игроков из группы ПВ421: {settings.players}
            </p>
            <ButtonComponent/>
            <div>
                <input
                    type="text"
                    className="content-input"
                    placeholder="Введите текст..."
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onKeyDown={(e) => console.log('Нажата клавиша:', e.key)}
                    onKeyUp={(e) => console.log('Отпущена клавиша:', e.key)}
                    onCopy={() => console.log('Текст скопирован')}
                    onCut={() => console.log('Текст вырезан')}
                    onPaste={() => console.log('Текст вставлен')}
                />
            </div>
        </main>
    );
}