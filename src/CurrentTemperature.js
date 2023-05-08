import React, { useState } from "react";


export default function CurrentTemperature(props) {
    const [unit, setunit]=useState("celsius");
    
    function showFahrenheit(event) {
        event.preventDefault();
        setunit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setunit("celsius");
    }

    if (unit=== "celsius") {
        return (
            <div className="CurrentTemperature">
                
              <span className="temperature">{Math.round((props.celsius *9)/5+32)}</span>

              <span className="unit">°C / {" "} <a href="/" onClick={showFahrenheit}>°F</a></span>
            </div>
          );

    }else {
        return (
            <div className="CurrentTemperature">
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="unit">°C / {" "} <a href="/" onClick={showCelsius}>°F</a></span>
            </div>

        );

    }
 }
