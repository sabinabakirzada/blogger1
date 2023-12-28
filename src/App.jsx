import React from "react";
import "./App.css";
import Header from "./layouts/header";
import Latest from "./pages/latest";
import Toner from "./pages/toner";
import Travel from "./pages/travel";
import Footer from "./layouts/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Toner />
      <Latest />
      <Travel />
      <Footer />
    </div>
  );
};

export default App;
