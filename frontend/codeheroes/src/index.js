import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Nivel_1_parte1 from './components/nivel_1_parte1';
import Nivel_1_parte2 from './components/nivel_1_parte2';
import Nivel_1_parte3 from './components/nivel_1_parte3';



import Onboarding from './components/Onboarding';
import Juego from './components/Juego';
import Inicio from './components/Inicio';
import './App.css';

function Routers() {

  return(
      <BrowserRouter>
      {/* navbar iria aqui cuando login sirva */}
        <Routes>
          <Route  path = "/" element = {<Login/>}/>
          <Route  path = "/nivel_1_parte1" element = {<Nivel_1_parte1/>}/>
          <Route  path = "/nivel_1_parte2" element = {<Nivel_1_parte2/>}/>
          <Route  path = "/nivel_1_parte3" element = {<Nivel_1_parte3/>}/>
          
          <Route  path = "/login" element = {<Login/>}/>
          <Route  path = "/" element = {<Onboarding/>}/>
          <Route  path = "/juego" element = {<Juego/>}/>
          <Route  path = "/inicio" element = {<Inicio/>}/>
        </Routes>
      </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routers/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
