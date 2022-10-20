import './App.css';
import React from 'react'
import { Navigationbar } from "./components/Navigationbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Foot } from "./components/Foot";





function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <Hero/> 
      <Services/>
      <Gallery/>
      <Contact/>
      <Foot/>




    
    </div>
  );
}

export default App;
