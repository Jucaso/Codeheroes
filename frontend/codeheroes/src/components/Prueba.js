import React from 'react';
import "./styles/Prueba.css";
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';




function Prueba() {


  return (
      <div className = "agaga">
        <div className = "vacio">
            <img   width="50px" 
            src='https://cdn.discordapp.com/attachments/981331949501181962/988638636402679868/estrella.png'/>
            <img   width="50px" 
            src='https://cdn.discordapp.com/attachments/981331949501181962/988638636402679868/estrella.png'/>
            <img   width="50px" 
            src='https://cdn.discordapp.com/attachments/981331949501181962/988638636402679868/estrella.png'/>
        </div>
        <div className = "estrellascont">
        <img class="animate__animated estrella"  width="50px" 
                src="https://cdn.discordapp.com/attachments/981331949501181962/988638636402679868/estrella.png"/>
        <img class="animate__animated estrella"  width="50px" 
                src="https://cdn.discordapp.com/attachments/981331949501181962/988638636402679868/estrella.png"/>
        <img class="animate__animated estrella"  width="50px" 
                src="https://cdn.discordapp.com/attachments/981331949501181962/988638636402679868/estrella.png"/>
        </div>
        
      </div>
  )
}

export default Prueba;
