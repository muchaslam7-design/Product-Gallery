import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Contacts from "./Pages/Contacts/Contacts.jsx";
import Home from "./Pages/Home/Home.jsx";
import Api from "./Pages/API/Api.jsx";
import APIDetail from "./Pages/API/APIDetail.jsx";



const App = () => {
  return (
    <div className="p-6">
      <nav className="flex gap-4 mb-5 bg-white p-4 shadow-sm border-b">
  <Link to="/" className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-all">Home</Link>
  <Link to="/contacts" className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-all">Contacts</Link>
  <Link to="/api" className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-all">API</Link>
</nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/api" element={<Api />} />
        <Route path="/product/:id" element={<APIDetail />} />
      </Routes>
    </div>
  );
};

export default App;
