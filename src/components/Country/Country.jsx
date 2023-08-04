import React, { useEffect, useState } from "react";
import styles from "./styles.css";
import Form from "../Form/Form";

const Country = ({ countries, country }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [locationName, setLocationName] = useState(null);

  const [selectedOption, setSelectedOption] = useState(country);
  const [iconOpen, setIconOpen] = useState(false);



  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIconOpen(!iconOpen);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setIconOpen(false);
  };

  useEffect(()=>{
    if(selectedOption!=setSelectedOption){
      setIconOpen(!iconOpen)
    console.log(selectedOption?.props.children)
    }
      },[selectedOption])

  useEffect(()=>{
    setLocationName(country)
  
  },[country])


 
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
              onClick={() =>
                handleOptionClick(
                  <div className="optionIcon">{option.name}</div>
                )
              }
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
