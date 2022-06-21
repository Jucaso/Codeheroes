import React, { useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import './styles/nivelesparte1.css'
export default function Nivel_1_parte1() {


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
        <div>
        <div className='n1p1contenedor'>
            <div className='contenidoAco'>
            <h1 className="n1p1titulo">Teoría #1 - Variables y operaciones aritméticas</h1> 
            <Accordion className="n1p1acordeon" defaultActiveKey="0">
            
            <Accordion.Item className="n1p1Aitem"eventKey="0">
            <Accordion.Header className="n1p1Aheader">Breve descripción de python</Accordion.Header>
            <Accordion.Body>
            Python es un lenguaje de programación de alto nivel, de tipado dinámico, muy famoso hoy en día, este permite
            trabajar de manera muy comoda para el desarrollador. <br></br> Es importante destacar que python maneja indentaciones para separar los diferentes
            bloques de codigo, por ejemplo:<br></br> 
            <img src="https://media.discordapp.net/attachments/981331949501181962/988570756340387850/XD.png" className="img-fluid|thumbnail rounded-top" alt=""></img>
            <br></br> Es importante tener esto en cuenta para más adelante, pero vamos poco a poco {";)"}
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="n1p1Aitem" eventKey="1">
            <Accordion.Header>Variables</Accordion.Header>
            <Accordion.Body>
            Las variables son aquellos objetos que ocupan un espacio en memoria y permiten almacenar diferentes datos.
            Estas deben tener un nombre único ya que ocupan un espacio en memoria único.
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="n1p1Aitem" eventKey="2">
            <Accordion.Header>Alcance</Accordion.Header>
            <Accordion.Body>
            Python por defecto cada vez que se crea una variable la define localmente, esto quiere decir que solo es usable 
            en el bloque de código donde se haya definido. Ahora bien, si se quiere que una variable sea global, se debe definir con la palabra reservada global.
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="n1p1Aitem" eventKey="3">
            <Accordion.Header>Asignación de valores</Accordion.Header>
            <Accordion.Body>
            La asignación de valores a una variable es una operación que se realiza con el signo igual (=). Python permite asignar valores
            dinamicamente, sin necesidad de especificarle que tipo de dato será la variable, observemos algunos tipos de datos:<br></br><br></br>
            <b>- Enteros:</b> Son valores numericos enteros, por ejemplo: 1, -5, 2, etc.<br></br>
            <br></br><b> - Flotantes:</b> Son valores numericos con decimales, por ejemplo: 1.5, -5.5, 2.5, etc.<br></br>
            <br></br><b>- String:</b> Son cadenas de texto, por ejemplo: "Hola", "Adios", "Hola mundo", etc.
            </Accordion.Body>
            </Accordion.Item>
            

            <Accordion.Item className="n1p1Aitem" eventKey="4">
            <Accordion.Header>Operaciones Aritméticas</Accordion.Header>
            <Accordion.Body className= "n1p1body">
            En python existen operaciones aritméticas, estas se realizan con el signo de suma (+), resta (-), multiplicación (*), división (/) y exponenciación (**).
            Existen más this especiales como el signo de división entre dos números (//) y el signo de residuo (%).<br></br>
            <img src="https://media.discordapp.net/attachments/981331949501181962/988576761971372163/XDDD.png" className="img-fluid|thumbnail rounded-top" alt=""></img>
            <br></br><a name="" id="" className="btn btncito--3 buttonback" href={"/nivel_1_parte2"} role="button">Terminar</a>
            </Accordion.Body>
            </Accordion.Item>


            </Accordion>
            </div>
        </div>
        </div>
    );
}