import React, { useState, useEffect } from 'react';
import Person from './models/Person';
import ContactList from './components/ContactList';
import './App.css';

function App() {
    const [people, setPeople] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isCancelled = false; // флаг для предотвращения двойного вызова

        setIsLoading(true);
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => {
                if (isCancelled) return; // пропускаем, если компонент размонтирован

                console.log('Данные от API:', data); // для отладки

                if (data.results && data.results.length > 0) {
                    const fetchedPeople = data.results.map((user, index) => {
                        const phoneNumber = user.phone;
                        return new Person(
                            index + 1,
                            user.name.first,
                            user.name.last,
                            phoneNumber,
                            user.picture.large || `https://randomuser.me/api/portraits/men/${index + 1}.jpg`
                        );
                    });
                    setPeople(fetchedPeople);
                }
                setIsLoading(false);
            })
            .catch(error => {
                if (isCancelled) return;
                console.error('Ошибка загрузки данных:', error);
                setIsLoading(false);
            });

        return () => {
            isCancelled = true; // отмена при размонтировании
        };
    }, []);

    return (
        <div className="app-container">
            <h1 className="app-title">Контакты</h1>
            <ContactList people={people} isLoading={isLoading} />
        </div>
    );
}

export default App;