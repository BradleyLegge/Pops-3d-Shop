import React, { useState } from "react";
import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    reset();
  };

  return (
    <section className="contact-container">
      <h1 className="contact-header">Contact Us</h1>
      <Form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="name-container">
          <div className="first-name-container">
            <label htmlFor="firstName" className="first-name">
              First Name *
              {errors.firstName && (
                <p className="input-error">{errors.firstName.message}</p>
              )}
            </label>
            <input
              className={`${"firstName" in errors && "input-error-border"}`}
              type="text"
              id="firstName"
              {...register("firstName", {
                required: "First Name required",
              })}
            />
          </div>
          <div className="last-name-container">
            <label htmlFor="lastName" className="last-name">
              Last Name *
              {errors.lastName && (
                <p className="input-error">{errors.lastName.message}</p>
              )}
            </label>
            <input
              type="text"
              className={`${"lastName" in errors && "input-error-border"}`}
              id="lastname"
              {...register("lastName", {
                required: "Last Name required",
              })}
            />
          </div>
        </div>
        <label htmlFor="email" className="email">
          Email Address *
          {errors.email && (
            <p className="input-error">{errors.email.message}</p>
          )}
        </label>
        <input
          type="text"
          className={`${"email" in errors && "input-error-border"}`}
          id="email"
          {...register("email", {
            required: "E-mail required",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Email is not valid",
            },
          })}
        />
        <label htmlFor="phoneNumber" className="phone-number">
          Phone Number
          {errors.phoneNumber && (
            <p className="input-error">{errors.phoneNumber.message}</p>
          )}
        </label>
        <input
          type="text"
          className={`${"phoneNumber" in errors && "input-error-border"}`}
          id="phoneNumber"
          {...register("phoneNumber", {
            pattern: {
              value: /^\d{3}-\d{3}-\d{4}$/,
              message: "Phone number is not valid",
            },
          })}
        ></input>
        <label htmlFor="request" className="request">
          Request *
          {errors.request && (
            <p className="input-error">{errors.request.message}</p>
          )}
        </label>
        <textarea
          rows="5"
          className={`${"request" in errors && "input-error-border"}`}
          id="request"
          {...register("request", { required: "Request required" })}
        ></textarea>
        <input type="submit" className="submit-btn"></input>
      </Form>
    </section>
  );
};

export default Contact;
