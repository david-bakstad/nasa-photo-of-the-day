import React, { useState , useEffect } from "react";
import Axios from "axios";

function NasaPhoto() {
    const [planetPic, setPlanetPic] = useState("");
  
    useEffect(() => {
      Axios
      .get('https://api.nasa.gov/planetary/apod?api_key=cpqLJjicRi9oQ3hO7uLRsln5h3hhxhVeYgiBjN8W&date=2020-11-19')
      .then((response) => { 
        setPlanetPic(response.data.url)
      })
      .catch((err) => console.log(err));
    }, []) 
  
    return (
      <img src={ planetPic } alt="Planet Picture" />
   
    )};
  

    export default NasaPhoto