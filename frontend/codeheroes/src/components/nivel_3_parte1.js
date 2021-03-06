import React, { useEffect, useState  } from 'react';
import { Accordion } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './styles/nivelesparte1.css'
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import 'animate.css';
import { motion } from 'framer-motion';

export default function Nivel_3_parte1() {
    
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
            setLevelStats(data.nivel_3);
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
                                nivel_3: newNivelStats,
                                user: cookies.get('idUsuario')
                                })
            }).then(() => {
                //setMode(true);
                navigate('/nivel_3_partes');
            })
        } catch (error) {
            console.log(error);
        } 
        ConteoEstrellas();
    }
    
    return(
        <motion.div 
        
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={ {x: window.innerWidth, transition: {duration: 1}}} className='n1p1contenedor'>
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
                        
                        <br></br><button name="" id="" className="btn btncito--3 buttonback" onClick={() => terminar()} role="button">Terminar</button>
                </Accordion.Body>
                </Accordion.Item>

                </Accordion>
            </div>
        </motion.div>
    );
}