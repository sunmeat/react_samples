import React from 'react';
import ContactCard from './ContactCard';
import './../App.css';

function ContactList({ people, isLoading }) {
    return (
        <div className="contact-list">
            <h2 className="list-title">Список контактів</h2>
            {isLoading ? (
                <p className="loading-text">Завантаження даних...</p>
            ) : people.length === 0 ? (
                <p className="loading-text">Нема даних</p>
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
