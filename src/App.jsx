import React,{ Fragment, useState, useEffect } from 'react';
import './App.css';


//-38.718433213708806, -62.26625760978698
const LAT = -38.718433213708806
const LON = -62.26625760978698

const API_KEY = 'c3c1d52d35c864fc990df40d28c02f87'
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}`

function App() {

  const [datos, setDatos] = useState({})
  const [location, setLocation] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then((res) => {
        setDatos(res)
        console.log(res)
      })
  },[])


  return (
    <Fragment>
      <div>
        <h1>Location: {datos.name}</h1>
        {datos.main ? <h2>{datos.main.temp}</h2> : null}
      </div>
    </Fragment>    
  );
}

export default App;
