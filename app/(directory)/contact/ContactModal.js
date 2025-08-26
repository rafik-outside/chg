import { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        content: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.content.trim()) {
            newErrors.content = 'Message content is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/sheets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formData }),
            });

            const result = await res.json();
            if (res.ok) {
                alert('Data saved to Google Sheets!');
            } else {
                alert('Error: ' + result.error);
            }
        } catch (error) {
            console.error(error);
            alert('Error saving data!');
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="overlay" onClick={handleOverlayClick}>
            <div className="modal">
                <div className="modalHeader">
                    <h2 className="title">Contact Us</h2>
                    <button
                        className="closeButton"
                        onClick={onClose}
                        type="button"
                    >
                        ×
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="form">
                    <div className="formGroup">
                        <label htmlFor="name" className="label">
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`input ${errors.name ? 'inputError' : ''}`}
                            placeholder="Enter your full name"
                        />
                        {errors.name && <span className="errorText">{errors.name}</span>}
                    </div>

                    <div className="formGroup">
                        <label htmlFor="email" className="label">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`input ${errors.email ? 'inputError' : ''}`}
                            placeholder="Enter your email address"
                        />
                        {errors.email && <span className="errorText">{errors.email}</span>}
                    </div>

                    <div className="formGroup">
                        <label htmlFor="subject" className="label">
                            Subject *
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={`input ${errors.subject ? 'inputError' : ''}`}
                            placeholder="Enter message subject"
                        />
                        {errors.subject && <span className="errorText">{errors.subject}</span>}
                    </div>

                    <div className="formGroup">
                        <label htmlFor="content" className="label">
                            Message *
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            rows="6"
                            className={`textarea ${errors.content ? 'inputError' : ''}`}
                            placeholder="Enter your message here..."
                        />
                        {errors.content && <span className="errorText">{errors.content}</span>}
                    </div>

                    {submitMessage && (
                        <div className={`message ${submitMessage.includes('success') ? 'successMessage' : 'errorMessage'
                            }`}>
                            {submitMessage}
                        </div>
                    )}

                    <div className="buttonGroup">
                        <button
                            type="button"
                            onClick={onClose}
                            className="cancelButton"
                            disabled={isSubmitting}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="submitButton"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default ContactModal;
