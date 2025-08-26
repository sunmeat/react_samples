import './Content.css';
import React, { useEffect, useState } from 'react';
import { MyButton } from "../mybutton/MyButton.jsx";

export function Content({ welcomeMessage, settings }) {
    const [comments, setComments] = useState([]);

    // логінг вітального повідомлення при монтуванні
    useEffect(() => {
        console.log('Компонент Content змонтований з повідомленням:', welcomeMessage);
        return () => {
            console.log('Компонент Content розмонтовано');
        };
    }, [welcomeMessage]);

    // періодичне логування налаштувань кожні 5 секунд
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Поточні налаштування:', settings);
        }, 5000);
        return () => clearInterval(interval);
    }, [settings]);

    // додавання випадкового коментаря кожну секунду
    useEffect(() => {
        const fetchComment = async () => {
            try {
                const randomId = Math.floor(Math.random() * 500) + 1; // JSONPlaceholder має 500 коментарів
                const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${randomId}`);
                const data = await response.json();
                setComments(prev => [...prev, data]);
                console.log('Новий коментар:', data);
            } catch (error) {
                console.error('Помилка API при отриманні коментаря:', error);
            }
        };

        fetchComment(); // початковий запит
        const interval = setInterval(fetchComment, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="content">
            <h2 className="content-title">{welcomeMessage}</h2>
            <MyButton text="Нажми меня" /><br></br><br></br>
            <div>
                <h3>Коментарі:</h3>
                {comments.length > 0 ? (
                    <ul>
                        {comments.map((comment, index) => (
                            <li key={index}>
                                <strong>{comment.name}</strong>: {comment.body}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Коментарів поки що немає</p>
                )}
            </div>
        </main>
    );
}
