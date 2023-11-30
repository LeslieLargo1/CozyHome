// import React from "react"
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


import Homepage from "./components/homepage/Homepage"
import Register from "./components/register/Register"
import About from "./components/aboutUs/About"
import Login from "./components/signIn/Login"
import Adminspace from "./components/adminspace/AdminSpace"
import Propertylist from "./components/propertylist/PropertyList"
import Idproperty from "./components/idproperty/IdProperty"


const Navigation = lazy(() => import("./components/navigation/Navigation"));
const Footer = lazy(() => import("./components/footer/Footer"));

const App = () => {
  return (
    <main style={{ 'height': '100vh' }}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/property/properties" element={<Propertylist />} />
            <Route path="/property/:properyid" element={<Idproperty />} />
            <Route path="/admin" element={<Adminspace />} />
          </Routes>

          <Footer />
        </Suspense>
      </Router>
    </main>
  );
};

export default App;


