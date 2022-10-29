import React from "react";
import '../styles/contactForm.css';
import emailjs from '@emailjs/browser'
import { useTranslation } from "react-i18next";


const ContactForm = () => {

  const [t, i18n] = useTranslation('global');

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_0v4mmaj', 'template_bu46jna', event.target, 'AiF5cInMtyMIT8fBG')
          .then(response => console.log(response))
          .catch(error => console.log(error));
    }

  return (
    <section className="contactPage" onSubmit={sendEmail} id="contact">
        <h2>{t("contact.contact")}</h2>
      <form className="contactForm">
        <div class="form-group">
          <label for="exampleFormControlInput1">{t("contact.email")}</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="user_email"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">{t("contact.name")}</label>
          <input class="form-control" id="exampleFormControlSelect1" name="user_name"/>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">{t("contact.message")}</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            name="user_message"
          ></textarea>
        </div>
        <br />
        <button className="sendButton">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
