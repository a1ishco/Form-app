import React, { createContext, useEffect, useState } from "react";
import Form from "../Form/Form";
import Select from "../Select/Select";


function Api() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let responseAll = await (
      await fetch(
        "https://apinew.testqmeter.net/api/v1/template/new-country-list/?format=json"
      )
    ).json();
    setCountries(responseAll);
  };

  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/?key=qEldnr2jFnjTJGxGIoSy")
      .then((res) => res.json())
      .then((responseOne) => {
        setCountry(responseOne.country)
      })
      .catch(() => {
        console.log("IP API ERROR");
      });
  }, []);

  return (
    <>
      <div>
        <Form />
      </div>
    </>
  );
}

export default Api;
