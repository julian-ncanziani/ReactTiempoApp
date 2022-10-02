import './App.css';
import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
//componentes
import { Home } from './components/Home';
import {Detail} from './components/Detail';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}>
            <Route path='detail/:idCity' element={<Detail></Detail>}></Route>
            <Route path='*' element={<Navigate replace to='/'/>}></Route>
        </Route>
        
      </Routes>
      
    </div>
  );
}

export default App;