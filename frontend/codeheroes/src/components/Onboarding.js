import React from 'react';
import "./styles/Onboarding.css";
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';




function Onboarding() {


  return (
      <div>
        <div className="bg_animate">
        <div className="banner contenedor">
          <div className="banner_title">
            <Card className="hola0">
              <Card.Header className="hola">Tenemos una misión para tí</Card.Header>
              <Card.Body className="hola1">
                <Card.Title >BIENVENIDO HUMANO</Card.Title>
                <div className="bienvenida">
                  Estamos buscando entusiastas en la programación para una misión súper importante en el espacio, ¿Quieres unirte?
                </div>
                    
                
                <div className="botones">
                  <Link to="/juego" className="btn button5 type1">
                  ACEPTO
                  </Link>
                   <Link to="/login" className="btn button5 type1">
                    NO, GRACIAS
                  </Link>  
                </div>
              </Card.Body>
            </Card>
                  
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
