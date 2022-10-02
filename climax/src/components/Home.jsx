import React, {useState, useEffect} from 'react';
import { Outlet,Routes, Route, Navigate } from 'react-router-dom';
import './Home.css';
//componentes
import { Cards } from './Cards';
import { NavBar } from './NavBar';
import { Detail } from './Detail';

export function Home (){
    
    const [ciudades, setCiudades] = useState([]);

    return(
        <div>
            <NavBar ciudades={ciudades} setCiudades={setCiudades}></NavBar>
            <Routes>
                <Route index element={<Cards ciudades={ciudades} setCiudades={setCiudades}></Cards>}></Route>
                <Route path='detail/:city' element={<Detail></Detail>}></Route>
            </Routes>
        </div>
        
    );
};