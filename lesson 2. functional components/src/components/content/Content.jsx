import './Content.css';
import {MyButton} from "../mybutton/MyButton.jsx";

export function Content() {
    return (
        <main className="content">
            <h2 className="content-title">Ласкаво просимо</h2>
            <p className="content-text">Натисніть на кнопку нижче, щоб почати нову гру!</p>
            <MyButton />
        </main>
    );
}
