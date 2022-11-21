import { useState, useEffect } from "react";
import {loading} from 'react';



function WeatherView(){

    
const [loadingData, setLoadingData] = useState(true);
const [error, setError] = useState(false);
const [emptyData, setEmptyData] = useState(false);
const [data, setData] = useState(false);
const lat = "33.6425";
const lon = "-117.8417";

const zip = "92130"
const country = "US"
const APIkey = "d0d76988de6a89c6b546dc5ebcd2c643"

    useEffect(() => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
        )
          // handling responses
          .then((response) => response.json())
          // handling normal data state
          .then((actualData) => {
            setLoadingData(false);
            setError(false);
            setData(actualData);
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
    loading: {loading ? "loading" : "not loading"}
    <br />
    error: {error ? "error" : "no error"}
    <br />
    {!loading && !error && (
        <>
          location: {data.name}
          <br />
          location: {data.main.temp}
        </>
    )}
      </>
  );
      }
  
  export default WeatherView;