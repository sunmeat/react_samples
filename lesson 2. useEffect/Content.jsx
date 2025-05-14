import './Content.css';
import React, { useEffect, useState } from 'react';
import { MyButton } from "../mybutton/MyButton.jsx";

export function Content({ welcomeMessage, settings }) {
    const [comments, setComments] = useState([]);

    // логирование приветственного сообщения при монтировании
    useEffect(() => {
        console.log('Компонент Content смонтирован с сообщением:', welcomeMessage);
        return () => {
            console.log('Компонент Content размонтирован');
        };
    }, [welcomeMessage]);

    // периодическое логирование настроек каждые 5 секунд
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Текущие настройки:', settings);
        }, 5000);
        return () => clearInterval(interval);
    }, [settings]);

    // добавление случайного комментария каждую секунду
    useEffect(() => {
        const fetchComment = async () => {
            try {
                const randomId = Math.floor(Math.random() * 500) + 1; // JSONPlaceholder имеет 500 комментариев
                const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${randomId}`);
                const data = await response.json();
                setComments(prev => [...prev, data]);
                console.log('Новый комментарий:', data);
            } catch (error) {
                console.error('Ошибка API при получении комментария:', error);
            }
        };

        fetchComment(); // начальный запрос
        const interval = setInterval(fetchComment, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="content">
            <h2 className="content-title">{welcomeMessage}</h2>
            <MyButton text="Нажми меня" /><br></br><br></br>
            <div>
                <h3>Комментарии:</h3>
                {comments.length > 0 ? (
                    <ul>
                        {comments.map((comment, index) => (
                            <li key={index}>
                                <strong>{comment.name}</strong>: {comment.body}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Комментариев пока нет</p>
                )}
            </div>
        </main>
    );
}