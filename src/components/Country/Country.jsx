import React, { useEffect, useState } from "react";
import styles from "./styles.css";
import Form from "../Form/Form";

const Country = ({ countries, country }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [locationName, setLocationName] = useState(null);

  const [selectedOption, setSelectedOption] = useState(country);
  const [iconOpen, setIconOpen] = useState(true);
  const [sendCountry, setSendCountry] = useState(locationName);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIconOpen(!iconOpen);
  };

  useEffect(() => {
    setLocationName(country);
    setSendCountry(locationName);
    console.log(country, "- First Location");
  }, [country, locationName]);

  const handleOptionClick = (option) => {
    console.log(option , "- Selected Country");
    setSelectedOption(option);
    setIsOpen(false);
    setIconOpen(true);
  };

  const handleOptionMouseDown = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const closeOut = (e) => {
      if (!e.target.closest(".custom-select-country")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", closeOut);
    }

    return () => {
      document.removeEventListener("mousedown", closeOut);
    };
  }, [isOpen]);

  return (
    <div className="custom-select-country">
      <div className="select-header-country" onClick={toggleDropdown}>
        {selectedOption ? (
          selectedOption
        ) : (
          <div className="optionIcon">{locationName}</div>
        )}
        <img
          alt="select_icon"
          id={iconOpen ? "listIconClose" : "listIconOpen"}
          src="https://qmeter.net/_next/static/media/select_arrow.0be6d369.svg"
        />
      </div>
      {isOpen && (
        <ul className="select-options-country selectCountry">
          {countries.map((option, index) => (
            <li
              className="optionLi"
              key={index}
              onClick={() => handleOptionClick(option.name)}
              onMouseDown={(e) => handleOptionMouseDown(e, option.name)}
            >
              <div className="optionIcon">{option.name}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Country;
