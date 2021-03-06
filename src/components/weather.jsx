import React,{ Fragment } from "react";

function Weather({ day, date }){

    const setDate = (d) => {
        let date = new Date(d).toString()

        return `${date.slice(0,3)} ${date.slice(8,10)}`
    }

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
                    <h3 className="date">{setDate(date)}</h3>
                    <p>Wind: {day.maxwind_kph} km/h</p>
                    <p>Rain: {day.daily_chance_of_rain}%</p>
                    <p>Precip: {day.totalprecip_mm}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Weather