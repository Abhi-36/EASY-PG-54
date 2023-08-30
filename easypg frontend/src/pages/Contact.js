// src/pages/Contact.js
import React from 'react';
import './Contact.css'; // Import the Contact.css file

function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-content">
                Have questions or feedback? Feel free to get in touch with us.
                You can reach out to our support team through the contact details
                provided below or fill out the contact form.
            </p>
            <div className="contact-info">
                <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <p>Email: contact@example.com</p>
                </div>
                <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
            </div>
            <form className="contact-form">
                {/* Your contact form fields */}
            </form>
        </div>
    );
}

export default Contact;
