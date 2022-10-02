import React from 'react';
import {Link, useParams} from 'react-router-dom';
import './Detail.css';

export function Detail({ciudades}){
    
    let {idCity} = useParams();
    let detailCity = ciudades.find(c =>  c.id == idCity);
    
    return(
        <div className='detailDiv'>
            <span>
                <Link to='/'>Volver</Link>
            </span>
            <h1>{detailCity.name}</h1>
            <span>
                <img src={`https://openweathermap.org/img/wn/${detailCity.weather[0]['icon']}@2x.png`} alt="img" />
            </span>
            <ul>
                <li>Sensacion Termica: {(detailCity.main['feels_like'] - 275.15).toFixed()}°C</li>
                <li>T°: {(detailCity.main['temp'] - 275.15).toFixed()} °C</li>
                <li>Min: {(detailCity.main['temp_min'] - 275.15).toFixed()} °C</li>
                <li>Max: {(detailCity.main['temp_max'] - 275.15).toFixed()} °C</li>
                <li>Humedad: {detailCity.main['humidity']} %</li>
                <li>Presion: {detailCity.main['pressure']} Hpa</li>
                <li>Nubosidad: {detailCity.clouds['all']} %</li>
            </ul>
        </div>
    );
};