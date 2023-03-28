import React, { useState, useRef } from "react";
import "../../css/conctact.css";

import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Information");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captcha.current.getValue()) {
      console.log("El usuario Paso la prueba");
      cambiarCaptchaValido(true);
      console.log(
        `Name: ${name}, Email: ${email}, Phone: ${phone}, Subject: ${subject}, Message: ${message}`);
    } else {
      console.log('Pro favor acepta el capcha');
      cambiarCaptchaValido(false);
    }
    // Aquí puedes añadir el código para enviar el formulario
  };

  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("El usuario Paso la prueba");
      cambiarCaptchaValido(true);

    }
  };

  const[capchaValido, cambiarCaptchaValido] = useState(null);

  return (
    <form onSubmit={handleSubmit}   >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label htmlFor="subject">Subject</label>
      <select
        id="subject"
        name="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      >
        <option value="Information">Information</option>
        <option value="Services">Services</option>
      </select>

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <div className="recaptcha">
        <ReCAPTCHA
          ref={captcha}
          sitekey="6LdOMAslAAAAAPX8dU8Z6XKbwlh6XgKd1ncsTlRB"
          onChange={onChange}
        />
        {capchaValido === false && <div className="error-captcha">Por favor acepta el captcha</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
    
  );
};

export default ContactForm;
