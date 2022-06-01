import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Onboarding from './components/Onboarding';
import Juego from './components/Juego';

function Routers() {
  return(
      <BrowserRouter>
        <Routes>
          <Route  path = "/login" element = {<Login/>}/>
          <Route  path = "/" element = {<Onboarding/>}/>
          <Route  path = "/juego" element = {<Juego/>}/>
        </Routes>
      </BrowserRouter>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<Routers/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
