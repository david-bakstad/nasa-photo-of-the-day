import React, { useState , useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

function nasaPhoto(props) {
  const [planetPic, setPlanetPic] = useState("");

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=cpqLJjicRi9oQ3hO7uLRsln5h3hhxhVeYgiBjN8W')
    .then((response) => { 
      setPlanetPic(object(response.data))
    })
    .catch((err) => console.log(err));
  }, []) 

  return (props.planetPic) ? (
    <img src={ planetPic} alt="Planet Picture" />
  );
  }
