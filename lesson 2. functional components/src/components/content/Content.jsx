import './Content.css';
import {MyButton} from "../mybutton/MyButton.jsx";

export function Content() {
    return (
        <main className="content">
            <h2 className="content-title">Добро пожаловать</h2>
            <p className="content-text">Нажмите на кнопку ниже, чтобы начать новую игру!</p>
            <MyButton />
        </main>
    );
}