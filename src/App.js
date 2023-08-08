import React from "react";
import { GlobalProvider } from "./components/Context/Context";
import Home from "./pages/Home/Home"; // Import your main component
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <GlobalProvider>
      <Contact />
    </GlobalProvider>
  );
}

export default App;
