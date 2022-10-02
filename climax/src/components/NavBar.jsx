import React,{useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import './NavBar.css';
import logo from '../images/logo2.jpg';


export function NavBar({ciudades, setCiudades}){
    const [inputCity, setInpuCity] = useState('');

    //creo un arregllo nuevo donde copio el estado local, luego me fijo si ya existe esa ciudad en el estado local
    //sino existe la busco ocn fetch y la agrego a las ciudades a mostrar.
    async function onSearch(){
            let arr = [...ciudades];
            let isIn = arr.find(city => city.name.toLowerCase() === inputCity.toLowerCase());
            if(isIn) return;
            if(!isIn) {
                await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then((city) => {
                    console.log(city);
                    if(city.cod === 200) {
                        arr.push(city);
                        setCiudades(arr);
                    }else{
                        alert(city.cod +' ' + city.message);
                    }
                })
                .catch(err => console.log(err));
            }
    };

        
    return(
        <div className='navDiv'>
            <span>
                <img src={logo} alt="" />
                <h1>Climax</h1>
            </span>
            <span>
                <label htmlFor="">Buscar Ciudad:</label>
                <input type="text" onChange={e=>setInpuCity(e.target.value)}/>
                <button onClick={e => onSearch()}>Buscar</button>
            </span>
        </div>
    );
};