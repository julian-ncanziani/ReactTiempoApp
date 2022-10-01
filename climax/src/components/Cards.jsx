import React from 'react';
import { Card } from './Card';
import './Cards.css';

export function Cards({ciudades, setCiudades}){

    console.log(ciudades);
    return(
        <div className='cardsDiv'>
            {!ciudades ? <></> :
            ciudades.map((city)=>{
                return <Card 
                ciudades={ciudades}
                setCiudades={setCiudades}
                key={city.id} 
                name={city.name} 
                weatherInfo={city.weather[0]}
                temp={city.main.temp - 275.15
                }/>})
            }
        </div>
    );
};