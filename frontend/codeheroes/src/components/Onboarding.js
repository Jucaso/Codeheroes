import React from 'react';
import "./styles/Onboarding.css";
import {Link} from 'react-router-dom';




function Onboarding() {


  return (
      <div>
        <div className="bg_animate">
        <div className="banner contenedor">
          <div className="banner_title">
            <Link to="/ejercicio" className="btn btn-primary">Codeheroes</Link>
            
          </div>
          <div className="banner_img">
            <img src="https://media.discordapp.net/attachments/924106496059539557/981331949320798304/lg1.png" alt="logo"/>
          </div>
        </div>
        <div className="burbujas">
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          <div className="burbuja"></div>
          </div>
        </div>
      </div>
  )
}

export default Onboarding;
