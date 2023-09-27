import React from "react";
import { useState } from "react";
import validator from "validator";

const ContactUs = () => {
  const [Name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [Email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [Textarea, setTextarea] = useState("");
  const [textareaError, setTextareaError] = useState(false);

  const handlename = (e) => {
    let Name = e.target.value;
    if (Name.length < 4) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(Name);
  };

  const validateEmail = (e) => {
    let Email = e.target.value;
    if (validator.isEmail(Email)) {
      setEmailError(true);
    } else {
      setEmailError("Enter valid Email!");
    }
    setEmail(Email);
  };

  const handletextarea = (e) => {
    let Textarea = e.target.value;
    if (Textarea.length < 4) {
      setTextareaError(true);
    } else {
      setTextareaError(false);
    }
    setTextarea(Textarea);
  };

  const handleubsmit = (e) => {
    e.preventDefault();
    if (Name.length < 4) {
      setNameError(true);
      return false;
    } else {
      setNameError(false);
    }

    if (validator.isEmail(Email)) {
      setEmailError(true);
      return false;
    } else {
      setEmailError("Enter valid Email!");
    }

    if (Textarea.length < 4) {
      setTextareaError(true);
      return false;
    } else {
      setTextareaError(false);
    }
  };

  return (
    <>
      <div className="BGMI">
        <div className="NEW">
          <img
            className="CONTACTIMG"
            src="	https://colorlib.com/etc/cf/ContactFrom_v12/images/img-01.png"
            alt=""
          />
        </div>
        <div className="contact">
          <h2 className="mb-3">Contact Us</h2>
          <form className="FORM" onSubmit={handleubsmit}>
            <div className="mb-3">
              <label className="form-label" name="name">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                onChange={handlename}
                value={Name}
              />
              {nameError ? (
                <p style={{ fontWeight: "bold", color: "red" }}>
                  Name must be 4 characters{" "}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label className="form-label" name="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                onChange={(e) => validateEmail(e)}
                value={Email}
              />{" "}
              <br />
              <span style={{ fontWeight: "bold", color: "red" }}>
                {emailError}
              </span>
            </div>
            <div className="mb-3">
              <label className="form-label" name="message">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                onChange={handletextarea}
                value={Textarea}
              />
              {textareaError ? (
                <p style={{ fontWeight: "bold", color: "red" }}>
                  Enter minimum 4 alphabets
                </p>
              ) : (
                ""
              )}
            </div>
            <button className="btn-danger" type="submit">
              submit
            </button>
          </form>
          <div className="ICONS">
            <i className="fa-solid fa-location-pin"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-solid fa-phone"></i>
            <i className="fa-solid fa-envelope"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
