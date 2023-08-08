import React, { useEffect, useState } from "react";

const Button = ({ onClick, buttonText }) => {

  return (
    <>
      <p className="informText">
        By filling out the form, you consent to the processing of personal data
      </p>
      <div className="row">
        <button className="buttonSubmit" onClick={onClick}>
          <div className="buttonTitle">{buttonText}</div>
        </button>
      </div>
    </>
  );
};

export default Button;
