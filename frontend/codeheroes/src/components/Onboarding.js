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
          {/* <img className="img-fluid imgonb" width="110px" height="110px" margin="20px" src="https://cdn-icons.flaticon.com/png/512/1350/premium/1350905.png?token=exp=1656098621~hmac=ac73c5b14e79b34a071741db01839e6f" alt="logo"/> */}
            <Card className="card2"> 
              <Card.Body className="hola1">
              <div className="titulo">BIENVENIDO HUMANO</div>
                <br/>
                <Card.Title className="Mensaje">Tenemos una misión para tí</Card.Title>
                 <span className="Mensaje">Estamos buscando entusiastas en la programación para una misión súper importante en el espacio.</span>
                 <span className="Mensaje">Sin embargo, necesitamos de tu ayuda para enviar un mensaje importante al centro espacial.</span>
                 <span className="Mensaje">¿Quieres ayudarnos?</span>
                <div className="botones">
                  <Link to="/juego" className="btn button5 type1">
                  ¡Sí, Vamos!
                  </Link>
                   <Link to="/login" className="btn button5 type1">
                    No, tengo prisa.
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
