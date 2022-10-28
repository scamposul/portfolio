import React from "react";
import '../styles/contactForm.css';
import emailjs from '@emailjs/browser'

const ContactForm = () => {

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_0v4mmaj', 'template_bu46jna', event.target, 'AiF5cInMtyMIT8fBG')
          .then(response => console.log(response))
          .catch(error => console.log(error));
    }

  return (
    <div className="contactPage" onSubmit={sendEmail}>
        <h2>CONTACT</h2>
      <form className="contactForm">
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="user_email"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Company / First Name</label>
          <input class="form-control" id="exampleFormControlSelect1" name="user_name"/>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
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
    </div>
  );
};

export default ContactForm;
