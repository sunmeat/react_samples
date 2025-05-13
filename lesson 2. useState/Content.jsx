import './Content.css';
import { MyButton } from "../mybutton/MyButton.jsx";
import { useState } from 'react';

export function Content({ welcomeMessage, settings, ButtonComponent }) {
    const [inputText, setInputText] = useState('Куку');
    const [showSettings, setShowSettings] = useState(false);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const toggleSettings = () => {
        setShowSettings(prev => !prev);
    };

    return (
        <main className="content">
            <h2 className="content-title">{welcomeMessage}</h2>
            <p>
                Уровень сложности: {settings.difficulty} | Игроков из группы ПВ421: {settings.players}
            </p>
            <button
                className="content-text"
                style={{ margin: '10px 0', padding: '5px 10px' }}
                onClick={toggleSettings}
            >
                {showSettings ? 'Скрыть настройки' : 'Показать настройки'}
            </button><br></br>
            {showSettings && (
                <div style={{ margin: '10px 0' }}>
                    <p>Детали настроек:</p>
                    <p>Сложность: {settings.difficulty}</p>
                    <p>Игроков: {settings.players}</p>
                </div>
            )}
            <ButtonComponent /><br></br><br></br>
            <div>
                <input
                    type="text"
                    className="content-input"
                    placeholder="Введите текст..."
                    value={inputText}
                    onChange={handleInputChange}
                />
                {inputText && (
                    <p style={{ marginTop: '5px' }}>Состояние текстового поля: {inputText}</p>
                )}
            </div>
        </main>
    );
}