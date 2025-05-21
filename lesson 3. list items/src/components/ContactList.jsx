import React from 'react';
import ContactCard from './ContactCard';
import './../App.css';

function ContactList({ people, isLoading }) {
    return (
        <div className="contact-list">
            <h2 className="list-title">Список контактов</h2>
            {isLoading ? (
                <p className="loading-text">Загрузка данных...</p>
            ) : people.length === 0 ? (
                <p className="loading-text">Нет данных</p>
            ) : (
                <div className="cards-container">
                    {people.map(person => (
                        <ContactCard key={person.id} person={person} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ContactList;