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
          <img className="img-fluid" width="110px" height="110px" margin="20px" src="https://cdn-icons-png.flaticon.com/512/2026/2026506.png" alt="logo"/>
            <Card className="card"> 
              <Card.Body className="hola1">
              <div className="titulo">Tenemos una misión para tí</div>
                <br/>
                <Card.Title className="Mensaje" >BIENVENIDO HUMANO</Card.Title>
                 <span className="Mensaje">Estamos buscando entusiastas en la programación para una misión súper importante en el espacio.</span>

                 <span className="Mensaje">¿Quieres Unirte?</span>
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
