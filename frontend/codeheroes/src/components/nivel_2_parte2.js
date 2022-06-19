import React, { useEffect, useState } from 'react';
import './styles/niveles.css'
export default function Nivel_2_parte2() {
  const preguntas = [
        {
          titulo: "Un condicional es:",
          opciones: [
            { textoRespuesta: "Aquel que nos permite tomar una decisión en base a una condición establecida", isCorrect: true },
            { textoRespuesta: "Lo que nos permite iterar sobre una variable", isCorrect: false },
            { textoRespuesta: "Como se define una variable", isCorrect: false },
            { textoRespuesta: "Ninguna de las anteriores", isCorrect: false },
          ],
        },
        {
          titulo: "La sentencia if permite tomar una decisión en base a una condición establecida",
          opciones: [
            { textoRespuesta: "Verdadero", isCorrect: true },
            { textoRespuesta: "Falso", isCorrect: false },
          ],
        },
        {
          titulo: "La sentencia 'else' es la condición numérica que se ejecuta si un número es 0",
          opciones: [
            { textoRespuesta: "Verdadero ", isCorrect: false },
            { textoRespuesta: "Falso ", isCorrect: true},

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
      <div className="card">
          <div className="card-header">
              Header
          </div>
          <div className="card-body">
          <main className="app">
        <div className="juego-terminado">
          <span>
            {" "}
            Obtuviste {puntajeConvertido} de {100}{" "}
          </span>
          <button onClick={() => (window.location.href = "/")}>
            {" "}
            Terminar intento
          </button>
          <button
            onClick={() => {
              setIsFinished(false);
              setAnswersShown(true);
              setPreguntaActual(0);
            }}
          >
            Ver respuestas
          </button>
        </div>
      </main>
          </div>
          <div className="card-footer text-muted">
            @Copyright CODEHEROES 2022
          </div>
      </div>
    );

  if (answersShown)

      return (
      <main className="app">
        <div className="lado-izquierdo">
          <div className="numero-pregunta">
            <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
          </div>
          <div className="titulo-pregunta">
            {preguntas[preguntaActual].titulo}
          </div>
          <div>
            {
              preguntas[preguntaActual].opciones.filter(
                (opcion) => opcion.isCorrect
              )[0].textoRespuesta
            }
          </div>
          <button
            onClick={() => {
              if (preguntaActual === preguntas.length - 1) {
                window.location.href = "/"; //Aquí debería redirigir a los 3 modulos del nivel
              } else {
                setPreguntaActual(preguntaActual + 1);
              }
            }}
          >
            {preguntaActual === preguntas.length - 1
              ? "Terminar intento"
              : "Siguiente"}
          </button>
        </div>
      </main>
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
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    Quiz #2 - Condicionales
                </div>
                    <div className="card-body">
                      <main className="app">
                      <div className="lado-izquierdo">
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
                
                <div className="card-footer text-muted">
                    @Copyright CODEHEROES 2022
                </div>
            </div>
        </div>
    );
}