import React from 'react';
import ContactCard from './ContactCard';
import './../App.css';

function ContactList({ people, isLoading, onDelete, onEdit, onAddContact }) {
    return (
        <div className="contact-list">
            {isLoading ? (
                <p className="loading-text">Загрузка данных...</p>
            ) : people.length === 0 ? (
                <p className="loading-text">Нет данных</p>
            ) : (
                <div className="cards-container">
                    {people.map(contact => (
                        <ContactCard
                            key={contact.id}
                            contact={contact}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
            <button className="add-button" onClick={onAddContact}>
                Добавить контакт
            </button>
        </div>
    );
}

export default ContactList;