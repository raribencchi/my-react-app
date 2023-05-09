import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App"> 
    <div className='Container'>
    <h1>React Weather App </h1>
    <Weather defaultCity="Paris" />
    <footer>
      This project is coded by <a href="https://ra-responsive-portfolio-v2.netlify.app"> Rashmi Aribenchi</a> and is {" "}
      <a href="https://github.com/raribencchi/my-react-app" target="blank"> Open-sourced on GitHub and hosted on Netlify.</a>

      </footer>
      </div>
    </div>
  );
}