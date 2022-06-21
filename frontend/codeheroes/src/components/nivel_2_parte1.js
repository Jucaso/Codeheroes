import React, { useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import './styles/nivelesparte1.css'
export default function Nivel_2_parte1() {
    
    useEffect(() => {
        getData();
    }, []);

    async function getData(){
        try {
            const request = await fetch('http://127.0.0.1:8000/usuarios/');
            const data = await request.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <div className='n1p1contenedor'>
            <div className='contenidoAco'>
                <h1 className="n1p1titulo">Teoría #2 - Condicionales</h1> 
                
                <Accordion className="n1p1acordeon" defaultActiveKey="0">
                
                <Accordion.Item className="n1p1Aitem"eventKey="0">
                <Accordion.Header className="n1p1Aheader">¿Qué son los condicionales?</Accordion.Header>
                <Accordion.Body>
                Los condicionales son aquellos que le permiten al programa tomar una decisión con respecto al funcionamiento. La manera de cómo
                python toma estas decisiones es mediante una serie de operadores que se encuentran en la siguiente tabla:<br></br> 
                <img src="https://cdn.discordapp.com/attachments/981331949501181962/988605898916245534/python-aprendiendo-desde-cero-vi-operadores-3.png" className="img-fluid|thumbnail rounded-top" alt=""></img>
                <br></br> Podemos observar en la tabla los operadores que se usan en python y sus funciones, pero no en donde se aplican, para poder tomar una decisión se necesitan de las conocidas <b>sentencias condicionales</b>, observemos un ejemplo:<br></br> 
                <img src="https://media.discordapp.net/attachments/981331949501181962/988609359934279700/python1.png"></img>
                <br></br> En este ejemplo, el programa nos dice que si el valor de la variable <b>n</b> es mayor o menor a <b>0</b> entonces el programa imprime <b>Número positivo</b>, o <b>Número negativo</b> si es menor.
                        Pero se observa una sentencia <b>else</b>, que es la que se retornará en caso de que no se cumpla ningun caso anterior, en este caso el programa retornará <b>0</b> si no se cumplen
                        las sentencias anteriores.
                <br></br> <br></br>
                        Se concluye la importancia de los condicionales, pues las decisiones son fundamentales en todo ámbito, incluyendo la computación. Los condicionales son
                        poderosas herramientas que nos permiten realizar acciones que establezcamos y así poder crear un programa lógico y funcional.
                        <br></br><a name="" id="" className="btn btncito--3 buttonback" href={"/nivel_2_parte2"} role="button">Terminar</a>
                </Accordion.Body>
                </Accordion.Item>

                </Accordion>
            </div>
        </div>
    );
}