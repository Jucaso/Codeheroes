import React, { useEffect, useState } from 'react';
import './styles/n1p2.css'
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
export default function Nivel_3_parte2() {
  const preguntas = [
        {
          titulo: "Una función es única, es decir, no se puede usar más de una vez en todo el código:",
          opciones: [
            { textoRespuesta: "Verdadero", isCorrect: false },
            { textoRespuesta: "Falso", isCorrect: true },
          ],
        },
        {
          titulo: "Las funciones en python omiten la indentación (no es necesario indentar el contenido de la función):",
          opciones: [
            { textoRespuesta: "Verdadero ", isCorrect: false },
            { textoRespuesta: "Falso ", isCorrect: true },
          ],
        },
        {
          titulo: "Considere las siguientes afirmaciones y seleccione la correcta: ",
          opciones: [
            { textoRespuesta: "Las funciones en python deben tener un 'return' en el código.", isCorrect: false },
            { textoRespuesta: "Una función debe tener mínimo 2 parámetros.", isCorrect: false },
            { textoRespuesta: "Las funciones son reusables en todo el espacio de trabajo.", isCorrect: true },
          ],
        },
      ];
      let navigate = useNavigate();
      const cookies = new Cookies();
      const [users, setUsers] = useState([]);  
      const [preguntaActual, setPreguntaActual] = useState(0);
      const [puntuacion, setPuntuacion] = useState(0);
      const [puntajeConvertido, setPuntajeConvertido] = useState(0);
      const [puntajeId, setPuntajeId] = useState(0);
      const [estrellas, setEstrellas] = useState(0);
      const [nivelStats, setNivelStats] = useState(0);
      const [estrellasId, setEstrellasId] = useState(0);
      const [isFinished, setIsFinished] = useState(false);
      const [tiempoRestante, setTiempoRestante] = useState(10);
      const [areDisabled, setAreDisabled] = useState(false);
      const [answersShown, setAnswersShown] = useState(false);
    
      function handleAnswerSubmit(isCorrect, e) {  
        // añadir puntuación
        if (isCorrect) setPuntuacion(puntuacion + 1);
    
        // añadir estilos de pregunta
        e.target.classList.add(isCorrect ? "correct" : "incorrect");
        // cambiar a la siguiente pregunta
    
        setTimeout(() => {     
          if (preguntaActual == preguntas.length - 1) {
            setIsFinished(true);      
          } else {
            setPreguntaActual(preguntaActual + 1);
    
          }
          //console.log("isFinished:", isFinished);
        }, 500);
      }
    
      useEffect(() => {
          getData();
          transformarPuntaje(puntuacion);
      }, [puntuacion]);
    
      async function getData(){
        try {
            const request = await fetch("http://127.0.0.1:8000/usuarios/"+cookies.get('idUsuarioStats')+"/");
            const data = await request.json();
            console.log(data);
            setPuntajeId(data.puntaje);
            setNivelStats(data.nivel_3);
            setEstrellasId(data.estrellas);
        } catch (error) {
            console.log(error);
        }
    }
      
      function terminarIntento(){
        var estrellasAnteriores = nivelStats[2];
        var auxPuntaje = puntajeConvertido;
        console.log("Estrellas:", estrellas);
        console.log("EstrellasAnteriores:", estrellasAnteriores);
    
        
    
        if(estrellas > estrellasAnteriores){
          if(estrellasAnteriores == 1){
            auxPuntaje = auxPuntaje - 13;
          }
          else if(estrellasAnteriores == 2){
            auxPuntaje = auxPuntaje - 26;
          }
    
          console.log("estrellas: " + estrellas);
          console.log("puntaje: " + puntajeConvertido);
          console.log("puntajeId:", puntajeId);
          console.log("nivelStats:", nivelStats);
          console.log("estrellasId:", estrellasId);
          //window.location.href = "/nivel_1_parte2"
          var auxComa = 0;
          let newNivelStats = ""; // Aqui se guarda el progreso del nivel 1 parte 2
          var newEstrellas = estrellasId + estrellas - estrellasAnteriores; // Aquí se guarda el total de estrellas conseguidas hasta el momento
          console.log("Estrellas totales: " + newEstrellas);
          //let newPuntaje = 0;
    
          for(let i=0;i<nivelStats.length;i++){
            if (auxComa != 1){
              newNivelStats = newNivelStats + nivelStats[i];
            }
            else{
              auxComa=2;
            }
            
            if (nivelStats[i] == ',' && auxComa == 0){
              //console.log("Se encontró:", newNivelStats[i+1])
              auxComa++;
              newNivelStats = newNivelStats + estrellas;
            }
          }
          console.log("newNivelStats:", newNivelStats);
    
          try {
            fetch("http://127.0.0.1:8000/usuarios/"+cookies.get('idUsuarioStats')+"/", {
            'method':'PUT',
            headers: {
                'Content-Type':'application/json',           
            }, 
            body:JSON.stringify({estrellas: newEstrellas,
                                puntaje: auxPuntaje + puntajeId,
                                nivel_3: newNivelStats,
                                user: cookies.get('idUsuario')
                                })
            }).then(() => {
                //setMode(true);
                navigate('/nivel_3_parte3');
            })
          } catch (error) {
              console.log(error);
          } 
          }
          else{
            navigate('/nivel_3_parte3');
          }
      }
      
      function transformarPuntaje(puntaje){
          if (puntaje == 0){
            setPuntajeConvertido(0);
             
          }
          if (puntaje == 1){
            setPuntajeConvertido(13);
            setEstrellas(1);
          }
          if (puntaje == 2){
    
            setPuntajeConvertido(26);
            setEstrellas(2);
          }
          if (puntaje == 3){
            setPuntajeConvertido(40);
            setEstrellas(3);
           
          }
      }

  if (isFinished)
    return (
      <div className='n1p2Contenido'>
        <div className="n1p2TextoTerminado"> 
          <h1 className="n1p2colortexto"> ¡Genial! Hemos terminado </h1>
          <h5 className="n1p2colortexto"> Este es tu resultado: </h5>
            <div className="n1p2imgcont">
              <div className="n1p2img">   
                <img className="img-fluid n1p2img2" width="250px" height="250px" src="https://cdn-icons-png.flaticon.com/512/2026/2026480.png"/>
              </div>
              <div className="n1p2card">
                <div className='card-header'>
                  <h3 className="n1p2colortexto"> Resultado </h3>
                </div>
                <div className="card-body">
                  <main className="app">
                    <div className="juego-terminado">
                      <span>
                        {" "}
                        Obtuviste {puntajeConvertido} de {100}{" "}
                      </span>
                      <button className="textoresp button2" onClick={() => terminarIntento()}>
                        {" "}
                        <span className="textoresp">Terminar intento</span>
                      </button>
                      <button
                      className="textoresp button2"
                        onClick={() => {
                          setIsFinished(false);
                          setAnswersShown(true);
                          setPreguntaActual(0);
                          
                        }}
                      >
                        <span className="textoresp">Ver respuestas</span> 
                      </button>
                    </div>
                  </main>
                </div>
                <div className="card-footer text-muted">
                  <h5 className="copy"> @Copyright CODEHEROES 2022 </h5>
                </div>
              </div>
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
    );

  if (answersShown)

      return (
        <div className='n1p2Contenido'>
        <div className="n1p2TextoTerminado"> 
          <h1 className="n1p2colortexto"> ¡Perfecto!</h1>
          <h2 className="n1p2colortexto"> Echemos un vistazo <img className="img-fluid" width="50px" src="https://cdn-icons.flaticon.com/png/512/4459/premium/4459306.png?token=exp=1655757694~hmac=b0b75cdd26d29c8c80f84b0fbc00aaca"/> </h2>
          <div className="n1p2imgcont">
            <div className="n1p2img">
            <img className="img-fluid" width="250px" height="250px" src="https://cdn-icons-png.flaticon.com/512/926/926318.png"/>
            <br/>
            <br/>
            </div>
            <div className="n1p2espimgcont">
              <main className="app">
                <div className="lado-izquierdo n1p2contenidosig">
                  <div className="numero-pregunta">
                    <h3> Pregunta {preguntaActual + 1} de {preguntas.length} </h3>
                  </div>
                  <div className="titulo-pregunta">
                      {preguntas[preguntaActual].titulo}
                  </div>
                  <div>
                    <h3> Respuesta Correcta: </h3>
                    {
                      preguntas[preguntaActual].opciones.filter(
                        (opcion) => opcion.isCorrect
                      )[0].textoRespuesta
                    }
                  </div>
                  <button
                  className="n1p2botonsig"
                    onClick={() => {
                      if (preguntaActual === preguntas.length - 1) {
                        terminarIntento(); //Aquí debería redirigir a los 3 modulos del nivel
                      } else {
                        setPreguntaActual(preguntaActual + 1);
                      }
                    }}
                  >
                    {preguntaActual === preguntas.length - 1
                      ? <h5 className="n1p2textoresult">Terminar intento   <img className="img-fluid" width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/32/32282.png"/></h5> 
                      :  <h5 className="n1p2textoresult">Siguiente   <img className="img-fluid" width="30px" height="30px" src="https://cdn-icons.flaticon.com/png/512/3585/premium/3585717.png?token=exp=1655758654~hmac=e698aebeca19711321e614a29416c03c"/></h5> }
                  </button>
                </div>
              </main>
            </div>
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
    );
    
    return(
      <div className='n1p2Contenido'>
          <div className="n1p2img">
          <img className="img-fluid" width="250px" height="250px" src="https://cdn-icons-png.flaticon.com/512/2086/2086472.png"/>
          <br/>
          <br/>
          <h1 className="n1p2Texto n1p2img"> Tómate tu tiempo</h1>  
          </div>
          <br/>
            <div className="n1p2card">
                <div className="card-header">
                    <h1>QUIZ #3:</h1> <h3>Funciones</h3>
                </div>
                    <div className="card-body">
                      <main className="app">
                      <div className="lado-izquierdo n1p2izquierdo">
                        <div className="numero-pregunta">
                          <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
                        </div>
                        <div className="titulo-pregunta">
                          {preguntas[preguntaActual].titulo}
                        </div>
                        <div>
                        
                        </div>
                      </div>
                      <div className="lado-derecho">
                        {preguntas[preguntaActual].opciones.map((respuesta) => (   
                          <button
                          className='button2'
                            disabled={areDisabled}
                            key={respuesta.textoRespuesta}
                            onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
                          >
                            {respuesta.textoRespuesta}
                          </button>       
                        ))}
                      </div>
                        </main>                      
                    </div>
                
                <div className="card-footer text-muted copy">
                    <h5 className="copy"> @Copyright CODEHEROES 2022 </h5>
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
    );
}