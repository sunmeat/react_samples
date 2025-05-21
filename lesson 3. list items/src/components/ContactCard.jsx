import React from 'react';
import './../App.css';

function ContactCard({ person }) {
    return (
        <div className="contact-card">
            <img
                src={person.picture}
                alt={`${person.firstName} ${person.lastName}`}
                className="contact-image"
            />
            <div className="contact-info">
                <h3 className="contact-name">
                    {person.firstName} {person.lastName}
                </h3>
                <p className="contact-phone">{person.phoneNumber}</p>
            </div>
        </div>
    );
}

export default ContactCard;