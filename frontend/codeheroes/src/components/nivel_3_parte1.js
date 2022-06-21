import React, { useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import './styles/nivelesparte1.css'
export default function Nivel_3_parte1() {
    
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
                <h1 className="n1p1titulo">Teoría #3 - Funciones</h1> 
                
                <Accordion className="n1p1acordeon" defaultActiveKey="0">
                
                <Accordion.Item className="n1p1Aitem"eventKey="0">
                <Accordion.Header className="n1p1Aheader">¿Qué son las funciones?</Accordion.Header>
                <Accordion.Body>
                Una función es un bloque de código reutilizable en el que se pueden definir acciones o tareas. Estas nos permiten ejecutar codigo facilmente en varias
                partes del espacio de trabajo, sin necesidad de reescribir lo mismo en todas partes, observemos un ejemplo:<br></br> 
                <img src="https://media.discordapp.net/attachments/981331949501181962/988614965856448562/Funciones-en-Python.-Estructura-de-una-funcion.png?width=630&height=473" className="img-fluid|thumbnail rounded-top" alt=""></img>
                <br></br> En este ejemplo, podemos observar la definición de la función, como se mencionaba en la parte uno del nivel uno, es importante comprender que Python se maneja con indentaciones.
                <br></br> Una vez definida, observa como se imprime la función <b>suma(5,6)</b>, ya que esta retorna el valor de la suma definida en si. De esta manera se crean las funciones, y ahora <b>suma(a,b)</b> se
                        puede llamar en cualquier parte del espacio de trabajo.<br></br>
                        
                        <br></br><a name="" id="" className="btn btncito--3 buttonback" href={"/nivel_3_parte2"} role="button">Terminar</a>
                </Accordion.Body>
                </Accordion.Item>

                </Accordion>
            </div>
        </div>
    );
}