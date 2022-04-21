import React,{ Fragment, useState } from 'react';
import './styles/main.css';

import Weather from './components/weather';


const API_KEY = 'e01295aee6c84749a40110748222004'
//const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${searchLocation}`
//Api forecast url
//const FC_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=London&days=3&aqi=no&alerts=no`

function App() {

  const [datos, setDatos] = useState([])
  const [location, setLocation] = useState('')
  const [searchLocation, setSearchLocation] = useState('')

  const API_SEARCH = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchLocation}&days=3&aqi=no&alerts=no`


  const handleOnSubmit = (event) => {
    event.preventDefault()

    fetch(API_SEARCH)
      .then(res => res.json())
      .then((res) => {
        setLocation(res.location)
        setDatos(res.forecast.forecastday)
      })
      .catch((err) => (
        console.log(err)
      ))
  }

  const handleOnChange = (event) => {
    setSearchLocation(event.target.value)
  }


  return (
    <Fragment>
      <nav>
        <div className='search-container'>
          <form action="" onSubmit={handleOnSubmit}>
            <input 
              className='search' 
              type="text" name='' id='' 
              placeholder='City...'
              value={searchLocation}
              onChange={handleOnChange}
              required
            />
            <button type="submit" className='search-btn'>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </nav>

      <h2 className='region'>{location.country} {location.region}</h2>

      <div className="weather-container">
      {
        datos.map((dato, index)=> <Weather key={index} {...dato}/>)
      }
      </div>


      <footer>
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"/>
        </a>
      </footer>
    </Fragment>    
  );
}

export default App;
