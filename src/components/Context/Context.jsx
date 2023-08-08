import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let responseAll = await (
        await fetch(
          "https://apinew.testqmeter.net/api/v1/template/new-country-list/?format=json"
        )
      ).json();
      setCountries(responseAll);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/?key=qEldnr2jFnjTJGxGIoSy")
      .then((res) => res.json())
      .then((responseOne) => {
        setCountry(responseOne.country);
      })
      .catch(() => {
        console.log("IP API ERROR");
      });
  }, []);

  const contextValue = {
    countries,
    country,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
}
