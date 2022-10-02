import './App.css';
import React, {useState} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
//componentes
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { Cards } from './components/Cards';
import {Detail} from './components/Detail';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}>
            <Route path='detail/:city' element={<Detail></Detail>}></Route>
            <Route path='*' element={<Navigate replace to='/'/>}></Route>
        </Route>
        
      </Routes>
      
    </div>
  );
}

export default App;