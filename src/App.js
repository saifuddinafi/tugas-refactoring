import React from "react";
import Header from "./Components/header";
import Home from "./Components/home";
import AboutUs from "./Components/aboutus";
import Services from "./Components/services";
import Footer from "./Components/footer";
import './App.css' ;


const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <AboutUs />
      <Services />
      <Footer />
    </div>
  )
}

export default App;