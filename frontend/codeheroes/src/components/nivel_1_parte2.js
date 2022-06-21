import React, { useEffect, useState } from 'react';
import './styles/n1p2.css'
export default function Nivel_1_parte2() {
  const preguntas = [
        {
          titulo: "Una variable se guarda en memoria, por lo que es correcto afirmar que:",
          opciones: [
            { textoRespuesta: "El acceso a la variable debe ser con una posicion de memoria dada", isCorrect: false },
            { textoRespuesta: "La variable ocupa un espacio único en memoria", isCorrect: true },
            { textoRespuesta: "No se pueden definir más variables porque ya existe una.", isCorrect: false },
            { textoRespuesta: "La variable solo se puede usar una vez.", isCorrect: false },
          ],
        },
        {
          titulo: "Una variable definida en un bloque indentado puede ser usada en todo el codigo",
          opciones: [
            { textoRespuesta: "Verdadero", isCorrect: false },
            { textoRespuesta: "Falso", isCorrect: true },
          ],
        },
        {
          titulo: "¿Cuál es el opérador potencia en Python?",
          opciones: [
            { textoRespuesta: "*", isCorrect: false },
            { textoRespuesta: "+", isCorrect: false },
            { textoRespuesta: "//", isCorrect: false },
            { textoRespuesta: "**", isCorrect: true },
          ],
        },

      ];
  const [users, setUsers] = useState([]);  
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [puntajeConvertido, setPuntajeConvertido] = useState(0);
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
  function ejemplo(a){
    console.log(puntuacion);
  }
  
  function terminarIntento(){
    let estrellas = 0;
    let puntaje = puntajeConvertido;

    if(puntaje == 100){
      estrellas = 1;
    }
    console.log("estrellas: " + estrellas);
    console.log("puntaje: " + estrellas);
    //window.location.href = "/nivel_1_parte2"
  }
  
  function transformarPuntaje(puntaje){
      if (puntaje == 0){
          setPuntajeConvertido(0);
         
      }
      if (puntaje == 1){
          setPuntajeConvertido(33);
        
      }
      if (puntaje == 2){
          setPuntajeConvertido(66);
         
      }
      if (puntaje == 3){
          setPuntajeConvertido(100);
       
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
                      <button className="textoresp button2" onClick={() => (window.location.href = "/inicio")}>
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
                    className="n1p2botonsig button2"
                      onClick={() => {
                        if (preguntaActual === preguntas.length - 1) {
                          window.location.href = "/"; //Aquí debería redirigir a los 3 modulos del nivel
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

    async function getData(){
        try {
            const request = await fetch('http://127.0.0.1:8000/usuarios/');
            const data = await request.json();
            console.log(data);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }
    
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
                    <h1>QUIZ #1:</h1> <h3>Variables y operaciones aritméticas</h3>
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
                          <button className="button2"
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