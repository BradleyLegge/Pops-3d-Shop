import React, { useState } from "react";
import { Form } from "react-router-dom";

const Contact = () => {
  return (
    <section className="contact-container">
      <h1 className="contact-header">Contact Us</h1>
      <Form className="form-container">
        <div className="name-container">
          <div className="first-name-container">
            <label for="firstName">
              First Name<span className="ast"> *</span>
            </label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="last-name-container">
            <label for="lastname">
              Last Name<span className="ast"> *</span>
            </label>
            <input type="text" id="lastname" name="lastname" />
          </div>
        </div>
        <label for="email">
          Email Address<span className="ast"> *</span>
        </label>
        <input type="text" id="email" name="email" />
        <label for="phoneNumber">Phone Number</label>
        <input type="text" id="phoneNumber" name="phoneNumber"></input>
        <label for="request">
          Request<span className="ast"> *</span>
        </label>
        <textarea rows="5" id="request" name="request"></textarea>
        <input type="submit" className="submit-btn"></input>
      </Form>
    </section>
  );
};

export default Contact;
