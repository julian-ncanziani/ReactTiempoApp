import React from 'react';
import { Card } from './Card';
import './Cards.css';

export function Cards({ciudades, setCiudades}){

    
    return(
        <div className='cardsDiv'>
            {!ciudades ? <></> :
            ciudades.map((city)=>{
                return <Card 
                ciudades={ciudades}
                setCiudades={setCiudades}
                key={city.id} 
                cityGeneralData={city}
                />})
            }
        </div>
    );
};