import './Content.css';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext.jsx';
import { MyButton } from '../mybutton/MyButton.jsx';

export function Content() {
    const { theme, user } = useContext(AppContext);

    return (
        <main className="content">
            <h2 className="content-title" style={{ color: theme.color }}>
                Ласкаво просимо, {user.name}!
            </h2>
            <MyButton />
            <br />
            <br />
        </main>
    );
}
