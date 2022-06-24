import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './styles/nivelesparte1.css'
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import 'animate.css';

export default function Nivel_1_parte1() {
    
    let navigate = useNavigate();
    const cookies = new Cookies();
    const [estrellas, setEstrellas] = useState(0);
    const [puntaje, setPuntaje] = useState(0);
    const [levelStats, setLevelStats] = useState("");

    useEffect(() => {
        getData();
    }, []);



    async function getData(){
        try {
            const request = await fetch("http://127.0.0.1:8000/usuarios/"+cookies.get('idUsuarioStats')+"/");
            const data = await request.json();
            console.log(data);
            setPuntaje(data.puntaje);
            setEstrellas(data.estrellas);
            setLevelStats(data.nivel_1);
        } catch (error) {
            console.log(error);
        }
    }

    function ConteoEstrellas(){

        Swal.fire({
          title: '¡Hemos terminado!',
          text: "Ahora, echemos un vistazo a los resultados",
          width: 700,
          height: 700,
          icon: 'success',
          iconColor: 'orange',
          color: 'white',
          background: 'radial-gradient(circle, rgba(44,125,113,1) 0%, rgba(18,27,38,1) 100%)',
          confirmButtonColor: '#0d2736',
                  confirmButtonText: '<img width="20px" src="https://cdn.discordapp.com/attachments/981331949501181962/989673233072672798/bien.png"/>  ¡Vamos allá!'
        }).then((result) => {
          if (result.isConfirmed) {     
                Swal.fire({
                  title: '¡Estás son las estrellas que obtuviste!',
                  width: 700,
                  color: 'white',
                  background: 'radial-gradient(circle, rgba(44,125,113,1) 0%, rgba(18,27,38,1) 100%)',
                  html: ' <div style={{height: "400px"}}>\
                  <img class="animate__animated animate__fadeInBottomLeft"  width="50px" \
                  src="https://cdn.discordapp.com/attachments/981331949501181962/988638636402679868/estrella.png"/>\
                  <img class="animate__animated animate__fadeInDown"  width="50px" \
                  src="https://cdn.discordapp.com/attachments/981331949501181962/988638636402679868/estrella.png"/>\
                  <img class="animate__animated animate__fadeInBottomRight"  width="50px" \
                  src="https://cdn.discordapp.com/attachments/981331949501181962/988638636402679868/estrella.png"/>\
                  </div>',
                  confirmButtonColor: '#0d2736',
                  confirmButtonText: '<img width="20px" src="https://cdn.discordapp.com/attachments/981331949501181962/989673233072672798/bien.png"/>  ¡Genial, sigamos!'
                })         
          }
        })
  
      }

    
    const terminar =     function() {
        var currentLevelStars = levelStats[0];
        var auxEstrellas = estrellas;
        let newNivelStats = "";
        var puntajeAux = puntaje;
        var auxComa = 0;
        // Revisa si ha conseguido estrellas en el nivel actual, en caso de que no, le suma los puntos por completar a los puntos que tiene
        if(currentLevelStars == 0){
            puntajeAux = puntajeAux + 20
            auxEstrellas = 3 + estrellas;
        }
        
        for(let i=0;i<levelStats.length;i++){
            if(i == 0){
                newNivelStats = 3;
            }
            else{
                newNivelStats = newNivelStats + levelStats[i];
            }
        }


        console.log("Puntaje:", puntajeAux);    
        console.log("Estrellas:", estrellas); 
        console.log("LevelStats (stars):", currentLevelStars);
        console.log("newNivelStats:", newNivelStats);
        try {
            fetch("http://127.0.0.1:8000/usuarios/"+cookies.get('idUsuarioStats')+"/", {
            'method':'PUT',
            headers: {
                'Content-Type':'application/json',           
            }, 
            body:JSON.stringify({estrellas: auxEstrellas,
                                puntaje: puntajeAux,
                                nivel_1: newNivelStats,
                                user: cookies.get('idUsuario')
                                })
            }).then(() => {
                //setMode(true);
                navigate('/nivel_1_parte2');
            })
        } catch (error) {
            console.log(error);
        } 
        ConteoEstrellas();
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
            <br></br><button name="" id="" className="btn btncito--3 buttonback" onClick={() => terminar()} role="button">Terminar</button>
            </Accordion.Body>
            </Accordion.Item>


            </Accordion>
            </div>
        </div>
        </div>
    );
}