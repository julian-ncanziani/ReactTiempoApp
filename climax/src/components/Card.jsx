import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

export function Card({ ciudades, setCiudades, cityGeneralData}){

    function removeCard(event){
        let arr = [...ciudades];
        arr = ciudades.filter(city => city.name.toLowerCase() !== event.target.value);
        setCiudades(arr);
    }
    
    return(
        <div className='cardDiv'>
            <span>
                <button value={cityGeneralData.name.toLowerCase()} onClick={e=> removeCard(e)}>X</button>
            </span>
            <Link to={`detail/${cityGeneralData.id}`} className='link'>{cityGeneralData.name}</Link>
            <span>
                <p>{new Date(cityGeneralData.dt * 1000).toLocaleDateString('arg',{weekday: 'long'}).toLocaleUpperCase()}</p>
                <p>{new Date(cityGeneralData.dt * 1000).toLocaleDateString('arg',{ year:'numeric', month:'numeric', day:'numeric'}).toLocaleUpperCase()}</p>
                <img src={`https://openweathermap.org/img/wn/${cityGeneralData.weather[0]['icon']}@2x.png`} alt="img" />
                <p>{(cityGeneralData.main['temp'] - 275.15).toFixed()}°C</p>
                <p>{cityGeneralData.city_longitude}</p>
            </span>
        </div>
    );
};