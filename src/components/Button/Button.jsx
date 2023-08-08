import React, { useEffect, useState } from "react";
import styles from "./styles.css"
const Button = ({ onClick, buttonText }) => {

  return (
    <div className="buttonSide">
      <p className="informText">
        By filling out the form, you consent to the processing of personal data
      </p>
      <div className="rdw buttonRow">
        <button className="buttonSubmit" onClick={onClick}>
          <div className="buttonTitle">{buttonText}</div>
        </button>
      </div>
    </div>
  );
};

export default Button;
