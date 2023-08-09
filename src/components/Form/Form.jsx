import React, { useState } from "react";
import styles from "./styles.css";
import Select from "../Select/Select";
import Country from "../Country/Country";
import Button from "../Button/Button";

import { useGlobalContext } from "../../components/Context/Context";

const Form = ({ isTextareaVisible }) => {
  const { countries, country } = useGlobalContext();

  const [formDatas, setFormDatas] = useState({
    name: "",
    email: "",
    number: "",
    text:"",
  });

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    number: null,
  });

  const [buttonText, setButtonText] = useState(
    <span>Claim Your Free Consultation Now</span>
  );

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isValidName(name) {
    return /\S+ \S+/.test(name);
  }

  const handleChange =
    (field) =>
    ({ target: { value } }) => {
      let newErrors = { ...errors };

      if (field === "name") {
        newErrors.name = !isValidName(value) || value.length === 0;
      } else if (field === "email") {
        newErrors.email = !isValidEmail(value) || value.length === 0;
      } else if (field === "number") {
        newErrors.number =
          value.length !== 0 && (value.length < 7 || value.length > 11);
      }

      setErrors(newErrors);
      setFormDatas((prevData) => ({ ...prevData, [field]: value }));
    };

  const submitCheck = () => {
    const { name, email, number, text } = formDatas;

    if (!name || errors.name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: true }));
    }
    if (!email || errors.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: true }));
    }
    if (!number || errors.number) {
      setErrors((prevErrors) => ({ ...prevErrors, number: true }));
    }
    if (
      errors.name === false && errors.email === false && errors.number === false
    ) {
      setButtonText(
        <div className="buttonRow">
          <div className="col-2">
            <div
              className="spinner-border text-secondary button-spinner"
              role="status"
            ></div>
          </div>
          <div className="col-10">Sending...</div>
        </div>
      );
      console.log(name, email, number, text);
    }
  };

  return (
    <>
      <div className="formcol2">
        <div className="formInputs">
          <form>
            <div className="row">
              <div className="col-25">
                {isTextareaVisible && (
                  <label id="labelInput" htmlFor="fname">
                    Name
                  </label>
                )}
              </div>
              <div className="col-75">
                <input
                  id="nameInput fname"
                  type="text"
                  value={formDatas.name}
                  onChange={handleChange("name")}
                  placeholder=" Pietro Schirano"
                  className={errors.name ? "falseName" : "trueName"}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                {isTextareaVisible && <label htmlFor="email">Email</label>}
              </div>
              <div className="col-75">
                <input
                  id="emailInput lname"
                  value={formDatas.email}
                  type="text"
                  onChange={handleChange("email")}
                  placeholder=" example@qmeter.net"
                  className={errors.email ? "falseEmail" : "trueEmail"}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                {isTextareaVisible && (
                  <label htmlFor="subject code">Phone Number</label>
                )}
              </div>
              <div className="col-75" id="numberEntry">
                <div className={errors.number ? "falseNumber " : "trueNumber"}>
                  <div className="selectDiv">
                    <Select countries={countries} country={country} />
                  </div>

                  <input
                    id="numberInput"
                    type="tel"
                    value={formDatas.number}
                    onChange={handleChange("number")}
                    placeholder="(__) ___-__-__"
                    className="numberInput"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                {isTextareaVisible && (
                  <label htmlFor="subject code">Country</label>
                )}
              </div>
              <div className="col-75">
                <div id="selectCountry">
                  <div className="select-country">
                    <Country countries={countries} country={country} />
                  </div>
                </div>
              </div>
            </div>
          </form>

          {!isTextareaVisible && (
            <textarea
              name="comment"
              className="form_comment mt-3"
              id="formCommentDisplay"
              placeholder="Share your experience here..."
              rows="4"
              value={formDatas.text}
              onChange={handleChange("text")}
            />
          )}

          <Button onClick={submitCheck} buttonText={buttonText} />
        </div>
      </div>
    </>
  );
};

export default Form;
