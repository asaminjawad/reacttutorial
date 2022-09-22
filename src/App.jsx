import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import AboutUs from "./Routing/AboutUs";
import ContactUs from "./Routing/ContactUs";
import Home from "./Routing/Home";
import Blogs from "./Routing/Blogs";
import ColorSchemesExample from "./Routing/Navbar";

function App() {
  return (
    <BrowserRouter>
      <ColorSchemesExample />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
