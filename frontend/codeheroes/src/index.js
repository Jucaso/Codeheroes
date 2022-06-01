import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Onboarding from './components/Onboarding';
import Juego from './components/Juego';

import './App.css';
function Routers() {
  return(
      <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark navbar-custom">
        <a className="navbar-brand" href="#">
        <img src="https://media.discordapp.net/attachments/924106496059539557/981338764217581578/lgb.png" width="60" height="30"></img>
        </a>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="nav navbar-nav mx-auto" >
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#">Inicio <span className="visually-hidden">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#">Tienda<span className="visually-hidden">(current)</span></a>
                    </li>
                </ul>
                <ul className="nav navbar-nav">
                  <li className="nav-item active">
                      <a name="" id="" className="btn btn-light" href="#" role="button">Cerrar sesión</a>
                  </li>
                </ul>
            </div>
    </nav>
        <Routes>
          <Route  path = "/login" element = {<Login/>}/>
          <Route  path = "/" element = {<Onboarding/>}/>
          <Route  path = "/juego" element = {<Juego/>}/>
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
