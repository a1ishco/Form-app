import React from "react";
import { GlobalProvider } from "./components/Context/Context";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
