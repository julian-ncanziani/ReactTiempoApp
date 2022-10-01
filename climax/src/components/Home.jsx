import React, {useState, useEffect} from 'react';
import './Home.css';
import { Cards } from './Cards';
import { NavBar } from './NavBar';

export function Home (){
    
    const [ciudades, setCiudades] = useState([]);
    
    return(
        <div>
            <NavBar ciudades={ciudades} setCiudades={setCiudades}></NavBar>
            <h1>Home Page</h1>
            <Cards ciudades={ciudades} setCiudades={setCiudades}></Cards>
        </div>
    );
};