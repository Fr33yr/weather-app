import React,{ Fragment, useState, useEffect } from 'react';
import './styles/main.css';

import Weather from './components/weather';


const API_KEY = 'e01295aee6c84749a40110748222004'
//const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${searchLocation}`
//Api forecast url
//const FC_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=London&days=3&aqi=no&alerts=no`

function App() {

  const [datos, setDatos] = useState([])
  const [searchLocation, setSearchLocation] = useState('')

  const API_SEARCH = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchLocation}&days=3&aqi=no&alerts=no`


  const handleOnSubmit = (event) => {
    event.preventDefault()

    fetch(API_SEARCH)
      .then(res => res.json())
      .then((res) => {
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

      

      <div className="wheather-container">
      {
        datos.map((dato, index)=> <Weather key={index} {...dato}/>)
      }
      </div>
    </Fragment>    
  );
}

export default App;
