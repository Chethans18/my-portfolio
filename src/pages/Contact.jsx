import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send function
    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formData,
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <hr className="custom-hr" />
      <div className="contact-form-container">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>Email: <a href="mailto:name@domain.com">name@domain.com</a></p>
          <p>Phone: (555)123-4567</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. 
            Cras pulvinar, nisi at imperdiet pharetra.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
          {isSubmitted && <p className="success-message">Message sent successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
