import React from 'react';

const ContactUsButton = ({ onClick }) => {
    return (
        <button 
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={onClick}
        >
            Contact Us
        </button>
    );
}

export default ContactUsButton;
                   