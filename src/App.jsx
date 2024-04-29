import React from "react";
import Navbar from "./components/Navbar";
import './index.css';
import Hero from "./components/Hero";
import HeadlineCrads from "./components/HeadlineCrads";
import Food from "./components/Food";
import Category from "./components/Category"


function App () {

  return (
    <>

     <Navbar />
     <Hero />
     <HeadlineCrads/>
     <Food />
     <Category />

    </>
  )
}

export default App
