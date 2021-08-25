import React from "react";

function ContactForm() {
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        // name input
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name"></input>
        </div>
        // email input
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email"></input>
        </div>
        // message text area
        <div>
          <label htmlFor="messsage">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        // submit button
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
