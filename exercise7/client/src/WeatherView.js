import { useState, useEffect } from "react";



function WeatherView(){

    
const [loading, setLoadingData] = useState(true);
const [error, setError] = useState(false);
const [emptyData, setEmptyData] = useState(false);
const [data, setData] = useState(false);
const lat = "32.7157";
const lon = "-117.1611";

const zip = "92130"
const country = "US"
const APIkey = "d0d76988de6a89c6b546dc5ebcd2c643"

    useEffect(() => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
        )
          // handling responses
          .then((response) => response.json())
          // handling normal data state
          .then((actualData) => {
            setLoadingData(false);
            setError(false);
            setData(actualData);
            console.log(actualData)
          })
          // handling errors
          .catch((err) => {
            // console.log(err.message);
            setLoadingData(false);
            setError(true);
          });
      }, []);
      // Render
  return (
    <>
    {!loading && !error && (
        <>
          Location: {data.name}
          <br />
          Temperature: {data.main.temp}
          <br/>
          Temperature-Min: {data.main.temp_min} Temperature-Max: {data.main.temp_max}
          <br/>
          Description: {data.weather[0].description}
          <br/>
          Wind Speed: {data.wind.speed} Wind Degree: {data.wind.deg}
          <br/>
        </>
    )}
      </>
  );
      }
  
  export default WeatherView;