import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

export function Card({name, weatherInfo, temp, ciudades, setCiudades}){

    function removeCard(event){
        let arr = [...ciudades];
        arr = ciudades.filter(city => city.name.toLowerCase() !== event.target.value);
        setCiudades(arr);
    }
    return(
        <div className='cardDiv'>
            <span><button value={name.toLowerCase()} onClick={e=> removeCard(e)}>X</button></span>
            <span>
                <img src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`} alt="img" />
                <p>{temp.toFixed()}°C</p>
                <h3>{name}</h3>
            </span>
        </div>
    );
};