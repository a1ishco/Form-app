import React from "react";
import Form from "../../components/Form/Form";
import Api from "../../components/API/Api";
import { useGlobalContext } from "../../components/Context/Context";
import styles from "./styles.css"

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

const Contact = () => {
  const { countries, country } = useGlobalContext();
  const getBackgroundImage = (country) => {
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


  return (
    <>
    
      <div className="container-fluid container-fluid-contact">
        <div className="container container-contact">
          <div className="row contactrows">
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
              <Form />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
