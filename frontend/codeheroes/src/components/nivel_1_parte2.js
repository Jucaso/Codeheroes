import React, { useEffect, useState } from 'react';
import './styles/niveles.css'
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
                    Quiz #1 - Variables y operciones aritméticas
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