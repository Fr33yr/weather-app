import React,{ Fragment } from "react";

function Weather({ day }){


    return(
        <Fragment>
            <div className="weather">
                <div className="temp">
                    <h1 className="temp-max">{day.maxtemp_c} °C</h1>
                    <h2 className="temp-min">{day.mintemp_c} °C</h2>
                    <p>{day.condition.text}</p>
                    <img src={day.condition.icon} alt="" className="icon"/>
                </div>
                <div className="line"></div>
                <div>
                    <p>viento: {day.maxwind_kph} km/h</p>
                    <p>Lluvia: {day.daily_chance_of_rain}%</p>
                    <p>Precipitaciones: {day.totalprecip_mm}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Weather