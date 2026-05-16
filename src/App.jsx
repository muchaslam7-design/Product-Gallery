import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import Contacts from "./Pages/Contacts/Contacts.jsx";
import Home from "./Pages/Home/Home.jsx";
import Api from "./Pages/API/Api.jsx";
import APIDetail from "./Pages/API/APIDetail.jsx";

const App = () => {
  return (
    <div>
      <Portfolio />
    </div>
  );
};

export default App;
