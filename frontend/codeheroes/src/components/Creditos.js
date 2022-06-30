import React from 'react';
import "./styles/Creditos.css";
import { Howl } from "howler"

export default function creditos() {

    const sound = new Howl({
        src: ['https://cdn.fbsbx.com/v/t59.3654-21/281375870_599909711417295_2742978437609871688_n.mp3/creditosbyDANPHAT.mp3?_nc_cat=111&ccb=1-7&_nc_sid=7272a8&_nc_eui2=AeGqTEqROyYreefwN32VpromHEpsTBiK98EcSmxMGIr3wVfUxSJ9HXkgT01FJSjd767kvYZMP7D0jbsUY5gyulPj&_nc_ohc=ptccvj8zON0AX-AF_OD&_nc_ht=cdn.fbsbx.com&oh=03_AVLvs8RZmcZNhmif3Nn0UdeWS0tGoAVEkT3WUfOuR82-dw&oe=62BE72F6&dl=1'],
        html5: true,
        preload: true,
        autoplay: true,
    });
    sound.seek(148);
    return (
        <div className='fonditofinal'>
            <div onClick={() => sound.pause()}>clickme </div>
            <div className='linkcito fade-in-text'>
            <a type='button' href='/inicio'>SOMOS CODEHEROES.</a> 
            </div>
            <div className="wrappercred bodycred"> 
                <div className="scroll-text">
                    <h1>CODEHEROES</h1>
                    <h2>Equipo de desarrolladores:</h2>
                    <p>Daniel Holguín Domínguez</p>
                    <p>Juan Camilo Rivera Soto</p>
                    <p>Nicolay Vélez Solarte</p>
                    <p>Estiven Tapasco Ramirez</p>
                    <h2>Música de los creditos:</h2>
                    <p>DANPHAT</p>
                    <h2>Patrocinios:</h2>
                    <p>Diseños Dolly</p>
                    <p>Pepe y Jucaso</p>
                    <p>Puchos herbales by rasta</p>
                    <p>Gracias por jugar la demo, esperamos que hayas aprendido lo básico del lenguaje Python, estamos preparando un nuevo viaje con desafíos mucho más difíciles.</p>
                    <p>NOS VEREMOS PRONTO.</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                   
                </div>
            </div>
            
        </div>
        );
    }