import React,{ Fragment } from "react";

function Weather({ maxtemp_c }){

    return(
        <Fragment>
            <div className="weather">
                <div className="temp">
                    <h1 className="temp-max">{maxtemp_c} °C</h1>
                    <h2 className="temp-min">0 °C</h2>
                    <img src="" alt="" className="icon"/>
                </div>
                <div className="line"></div>
                <div>
                    <p>wnd: 25 km/h NE</p>
                    <p>gust: 40 km/h NE</p>
                    <p>humidity: 39%</p>
                    <p>rain: 11mm</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Weather