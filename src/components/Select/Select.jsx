import React, { useEffect, useState } from "react";
import styles from "./styles.css";
import Form from "../Form/Form";

const CustomSelect = ({ countries, country }) => {
  const [isOpenNumber, setIsOpenNumber] = useState(false);
  const [locationCode, setLocationCode] = useState(null);
  const [locationAbr, setLocationAbr] = useState(null);
  const [selectedOption, setSelectedOption] = useState(locationCode);
  const [iconOpen, setIconOpen] = useState(true);
  const [dialConf , setDialConf] = useState(locationCode);

  useEffect(() => {
    if (Array.isArray(countries)) {
      const dataAll = new Map(countries?.map((item) => [item.name, item]));
      for (const [name, item] of dataAll) {
        if (country == item.name) {
          setLocationCode(item?.dial_code);
          setLocationAbr(item?.code.toString().toLowerCase());
          break;
        }
      }
    }
  }, [countries]);

useEffect(()=>{
  setDialConf(locationCode)

},[country])

  const toggleDropdownNumber = () => {
    setIsOpenNumber(!isOpenNumber);
    setIconOpen(!iconOpen)
  };
  const handleOptionClickNumber = (option) => {
    setSelectedOption(option);
    setIsOpenNumber(false);
    setIconOpen(false)
    setLocationCode(selectedOption)
  };

  useEffect(()=>{
if(selectedOption!=setSelectedOption){
  setIconOpen(!iconOpen)
  setDialConf(dialConf);
}
  },[locationCode])



  return (
    <div className="custom-select">
      <div className="select-header" onClick={toggleDropdownNumber}>
        {selectedOption ? (
          selectedOption
        ) : (
          <div className="optionIcon">
            <img
              src={`https://flagcdn.com/w20/` + locationAbr + `.png`}
              width="16"
              height="12"
              alt={locationAbr}
            />
            {locationCode}
            
          </div>
        )}
        <img
              alt="select_icon"
              id={iconOpen ? "listIconClose" : "listIconOpen"}
              src="https://qmeter.net/_next/static/media/select_arrow.0be6d369.svg"
            />
      </div>
      {isOpenNumber && (
        
        <ul className="select-options selectCode">
          {countries.map((option, index) => (
            <li
              className="optionLi"
              key={index}
              onClick={() =>
                handleOptionClickNumber(
              
                  <div className="optionIcon">
                    <img
                      src={
                        `https://flagcdn.com/w20/` +
                        option.code.toString().toLowerCase() +
                        `.png`
                      }
                      width="16"
                      height="12"
                      alt={option.code}
                    />
                    {option.dial_code}
                                     
                  </div>
                )
              }
            >
              <div className="optionIcon">
                <img
                  src={
                    `https://flagcdn.com/w20/` +
                    option.code.toString().toLowerCase() +
                    `.png`
                  }
                  width="16"
                  height="12"
                  alt={option.code}
                />
                {option.dial_code}
              </div>
            </li>
          ))}
        </ul>
      )}
                    
 
    </div>
    
  );
};

export default CustomSelect;
