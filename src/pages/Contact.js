import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [status, setStatus] = useState("");

  const submitForm = e => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus({ status: "SUCCESS" });
      } else {
        setStatus({ status: "ERROR" });
      }
    };
    xhr.send(data);
    console.log(status)
  }

  return (
    <div id="contactContainer">
      <h3>Interested? Let's Get in Contact!</h3>
      <form action="https://formspree.io/mrgldoae" method="POST" onSubmit={submitForm}>
        <input type="text" name="name" placeholder="Name" className="userInput"/>
        <input type="email" name="_replyto" placeholder="Email" className="userInput"/>
        <input type="text" name="message" placeholder="Message *Optional" className="userInput"/>
        <input type="submit" value="Send" className="submitButton"/>
      </form>
    </div>
  )
}


export default Contact;
