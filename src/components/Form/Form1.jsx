import React, { useState } from "react";
import styles from "./styles.css";
import Select from "../Select/Select";
import Country from "../Country/Country";

import usa from "../../assets/country/United_States.png";
import az from "../../assets/country/Azerbaijan.png";
import tr from "../../assets/country/Turkey.png";
import jordan from "../../assets/country/Jordan.png";
import uae from "../../assets/country/United_Arab_Emirates.png";
import pol from "../../assets/country/Poland.png";
import kuw from "../../assets/country/Kuwait.png";
import omn from "../../assets/country/Oman.png";
import sar from "../../assets/country/Saudi_Arabia.png";
import kz from "../../assets/country/Kazakhistan.png";

const Form = ({ countries, country }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [imageName, setImageName] = useState("United_States.png");

  const [buttonText, setButtonText] = useState(
    <span>Claim Your Free Consultation Now</span>
  );
  const [selectedCountryOption, setselectedCountryOption] = useState("");

  const [errorName, setErrorName] = useState(null);
  const [errorMail, setErrorMail] = useState(null);
  const [errorNumber, setErrorNumber] = useState(null);

  const [locationName, setLocationName] = useState(null);

  // useEffect(() => {
  //   if (Array.isArray(countries)) {
  //     const dataAll = new Map(countries?.map((item) => [item.name, item]));
  //     for (const [name, item] of dataAll) {
  //       if (country == item.name) {
  //         setLocationName(item?.name);
  //         setselectedCountryOption(locationName);
  //         break;
  //       }
  //     }
  //   }
  // }, [countries]);

  const getBackgroundImage = () => {
    switch (country) {
      case "United States":
        return `url(${usa})`;
      case "Azerbaijan":
        return `url(${az})`;
        case 'Turkey':
        return `url(${tr})`;
        case 'United Arab Emirates':
        return `url(${uae})`;
        case 'Jordan':
        return `url(${jordan})`;
        case 'Poland':
        return `url(${pol})`;
        case 'Kazakhistan':
        return `url(${kz})`;
        case 'Kuwait':
        return `url(${kuw})`;
        case 'Oman':
        return `url(${omn})`;
        case 'Saudi Arabia':
        return `url(${sar})`;
      default:
        return `url(${az})`;
    }
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isValidName(name) {
    return /\S+ \S+/.test(name);
  }

  const handleChangeMail = (mailEvent) => {
    if (
      !isValidEmail(mailEvent.target.value) ||
      mailEvent.target.value.length == 0
    ) {
      setErrorMail(true);
    } else {
      setErrorMail(false);
    }

    setEmail(mailEvent.target.value);
  };

  const handleChangeName = (nameEvent) => {
    if (
      !isValidName(nameEvent.target.value) ||
      nameEvent.target.value.length == 0
    ) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }

    setName(nameEvent.target.value);
  };

  const handleChangeNumber = (numberEvent) => {
    if (
      numberEvent.target.value.length != 0 &&
      numberEvent.target.value.length >= 7 &&
      numberEvent.target.value.length <= 11
    ) {
      setErrorNumber(false);
    } else {
      setErrorNumber(true);
    }
    setNumber(numberEvent.target.value);
  };

  const handleOptionChange = (e) => {
    setselectedCountryOption(e.target.value);
    setLocationName(e.target.value);
  };

  const submitCheck = () => {
    if (name.length == 0 || errorName == true) {
      setErrorName(true);
    }
    if (email.length == 0 || errorMail == true) {
      setErrorMail(true);
    }
    if (number.length == 0 || errorNumber == true) {
      setErrorNumber(true);
    }
    if (errorName == false && errorMail == false && errorNumber == false) {
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
      console.log(name, email, number);
    }
  };



  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row formsrow">
            <div className="column" id="col-1">
              <div className="formcol1">
                <h2>
                  Transform your
                  <br />
                  <span>Customer Experience </span>
                </h2>
                <div className="container formcol1p">
                  <p>
                    Get callback from our professionals to receive a free
                    consultation and define a customized solution for your
                    business needs. <br />
                    We have demonstrated experience in this field and are ready{" "}
                    <br />
                    to support you
                  </p>
                  <div className="dotsDiv">
                    <div className="dotsImg">
                      <div className="dotsIndex"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column" id="col-2" style={{backgroundImage:getBackgroundImage()}}>
              <div className="formcol2">
                <div className="formInputs">
                  <form>
                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="fname">Name</label>
                      </div>
                      <div className="col-75">
                        <input
                          id="nameInput fname"
                          type="text"
                          value={name}
                          onChange={handleChangeName}
                          placeholder=" Pietro Schirano"
                          className={errorName ? "falseName" : "trueName"}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="email">Email</label>
                      </div>
                      <div className="col-75">
                        <input
                          id="emailInput lname"
                          value={email}
                          type="text"
                          onChange={handleChangeMail}
                          placeholder=" example@qmeter.net"
                          className={errorMail ? "falseEmail" : "trueEmail"}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="subject code">Phone Number</label>
                      </div>
                      <div className="col-75" id="numberEntry">
                        <div
                          className={
                            errorNumber ? "falseNumber " : "trueNumber"
                          }
                        >
                          <div className="selectDiv">
                            <Select countries={countries} country={country} />
                          </div>

                          <input
                            id="numberInput"
                            type="tel"
                            value={number}
                            onChange={handleChangeNumber}
                            placeholder="(__) ___-__-__"
                            className="numberInput"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-25">
                        <label htmlFor="subject code">Country</label>
                      </div>
                      <div className="col-75">
                        <div id="selectCountry">
                          <div className="select-country">
                            <Country countries={countries} country={country} />
                          </div>
                        </div>

                        {/* <select
                          id="selectCountry"
                          value={locationName}
                          onChange={handleOptionChange}
                        >
                          {Array.isArray(countries) &&
                            countries.map((item) => (
                              <option key={item.id}>{item.name}</option>
                            ))}
                        </select> */}
                      </div>
                    </div>
                    <p className="informText">
                      By filling out the form, you consent to the processing of
                      personal data
                    </p>
                  </form>
                  <div className="row">
                    <button className="buttonSubmit" onClick={submitCheck}>
                      <div className="buttonTitle">{buttonText}</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
