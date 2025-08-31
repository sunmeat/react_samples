import React, { useState, useEffect } from 'react';
import Person from './models/Person';
import ContactList from './components/ContactList';
import './App.css';

function App() {
    const [people, setPeople] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isCancelled = false; // прапорець для запобігання подвійного виклику

        setIsLoading(true);
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => {
                if (isCancelled) return; // пропускаємо, якщо компонента розмонтована

                console.log('Дані від API:', data); // для налагодження

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
                console.error('Помилка:', error);
                setIsLoading(false);
            });

        return () => {
            isCancelled = true; // скасування при розмонтуванні
        };
    }, []);

    return (
        <div className="app-container">
            <h1 className="app-title">Контакти</h1>
            <ContactList people={people} isLoading={isLoading} />
        </div>
    );
}

export default App;
