import React, { useState } from 'react';
import './ContactUs.scss';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="contact-us">
        <h2 className="contact-us__title">Contact us</h2>
        <form className="contact-us__form" onSubmit={handleFormSubmit}>
          <div className="form__input-wrap">
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input id="name" type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form__input-wrap">
            <label htmlFor="email" className="form__label">
              E-mail
            </label>
            <input id="email" type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form__input-wrap">
            <label htmlFor="text" className="form__label">
              Text
            </label>
            <textarea
              id="text"
              rows="1"
              className="input form__message"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = `${e.target.scrollHeight + 2}px`;
              }}
            ></textarea>
          </div>
          <button className="btn contact-us__btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
