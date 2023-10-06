import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


import Homepage from "./components/homepage/Homepage"
import Navigation from "./components/navigation/Navigation"
import Footer from "./components/footer/Footer"
import Register from "./components/register/Register"
import About from "./components/aboutUs/About"
import Login from "./components/signIn/Login"
import Adminspace from "./components/adminspace/AdminSpace"
import Propertylist from "./components/propertylist/PropertyList"
import Idproperty from "./components/idproperty/IdProperty"



const App = () => {
  return (

    <main style={{ 'height': '100vh' }}>


      <Router>
        {<Navigation />}

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/property/properties" element={<Propertylist />} />
          <Route path="/property/:properyid" element={<Idproperty />} />
          <Route path="/admin" element={<Adminspace />} />

        </Routes>

        {<Footer />}
      </Router>
    </main>
  );
}

export default App;
