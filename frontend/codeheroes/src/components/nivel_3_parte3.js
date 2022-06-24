import React, { useEffect, useState } from 'react';
import './styles/niveles.css'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";

export default function Nivel_3_parte3() {
    
    const initialTasks = [
        {
        id: "1",
        text: "precioManzana = 2000",
        },
        {
        id: "2",
        text: "ㅤㅤreturn precio*cantidad",
        },
        {
        id: "3",
        text: "print(\"Total:\",calculaTotal(precioManzana, manzanas))",
        
        },
        {
        id: "4",
        text: "manzanas = 7",
        },
        {
        id: "5",
        text: "def calculaTotal(precio, cantidad):",
        
        },
            
      ];

      const ordenado = [
        {
        id: "5",
        text: "def calculaTotal(precio, cantidad):",
        },
        {
        id: "2",
        text: "ㅤㅤreturn precio*cantidad",
        },
        {
        id: "1",
        text: "precioManzana = 2000",
        },
        {
        id: "4",
        text: "manzanas = 7",
        },
        {
        id: "3",
        text: "print(\"Total:\",calculaTotal(precioManzana, manzanas))",
        },
    ];
    let navigate = useNavigate();
    const cookies = new Cookies();
    const [estrellas, setEstrellas] = useState(0);
    const [puntaje, setPuntaje] = useState(0);
    const [nivelStats, setNivelStats] = useState(0);
    const [estrellasId, setEstrellasId] = useState(0);

    useEffect(() => {
      getData();
    });

    async function getData(){
      try {
          const request = await fetch("http://127.0.0.1:8000/usuarios/"+cookies.get('idUsuarioStats')+"/");
          const data = await request.json();
          console.log(data);
          setPuntaje(data.puntaje);
          setNivelStats(data.nivel_3);
          setEstrellas(data.estrellas);
      } catch (error) {
          console.log(error);
      }
    }

    const reorder = (list, startIndex, endIndex) => {
      const result = [...list];
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
    
      return result;
    };
        
    const [tasks, setTasks] = useState(initialTasks);
    
    const Verificar = () => {  
        //console.log(tasks);
        //console.log(ordenado);  
        if((tasks[0].id === ordenado[0].id &&
           tasks[1].id === ordenado[1].id &&
           tasks[2].id === ordenado[2].id &&
           tasks[3].id === ordenado[3].id &&
           tasks[4].id === ordenado[4].id) || 
           (tasks[0].id === ordenado[0].id &&
            tasks[1].id === ordenado[1].id &&
            tasks[3].id === ordenado[2].id &&
            tasks[2].id === ordenado[3].id &&
            tasks[4].id === ordenado[4].id) ||
            (tasks[2].id === ordenado[0].id &&
            tasks[1].id === ordenado[3].id &&
            tasks[2].id === ordenado[0].id &&
            tasks[3].id === ordenado[1].id &&
            tasks[4].id === ordenado[4].id) ||
            (tasks[0].id === ordenado[3].id &&
            tasks[1].id === ordenado[2].id &&
            tasks[2].id === ordenado[0].id &&
            tasks[3].id === ordenado[1].id &&
            tasks[4].id === ordenado[4].id)
            )
            {

              var estrellasAnteriores = nivelStats[4];
    
              if(estrellasAnteriores == 0){
                var newEstrellas = estrellas + 3;
                var newLevelStats = "";
                var newPuntaje = puntaje + 40;
                var auxComa = 0;
    
                for(var i = 0; i < nivelStats.length; i++){
                  if (auxComa != 2){
                    newLevelStats = newLevelStats + nivelStats[i];
                  }
    
                  if(nivelStats[i] == ','){
                    if(auxComa == 1){
                      newLevelStats = newLevelStats + 3;
                      auxComa++;
                    }
                    else{
                      auxComa++;
                    }              
                  }
                }
    
                console.log("newEstrellas: " + newEstrellas);
                console.log("newLevelStats: " + newLevelStats);
                console.log("newPuntaje: " + newPuntaje); 
                try {
                  fetch("http://127.0.0.1:8000/usuarios/"+cookies.get('idUsuarioStats')+"/", {
                  'method':'PUT',
                  headers: {
                      'Content-Type':'application/json',           
                  }, 
                  body:JSON.stringify({estrellas: newEstrellas,
                                      puntaje: newPuntaje,
                                      nivel_3: newLevelStats,
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
              
              Swal.fire({
                  title: '¡Acertaste!',
                  width: 500,
                  icon: 'success',
                  padding: '20px',
                  color: '#black',
                  background: '#fff',
                  html: '<a type="button" class="btn btn-success" href="/nivel_3_parte3"> CONTINUAR </a>',
                  showConfirmButton: false,
                  })
            }
            else {
                Swal.fire({
                    title: 'Hay algo mal, ¡intenta de nuevo!',
                    width: 500,
                    icon: 'warning',
                    iconColor: '#f44336',
                    padding: '20px',
                    color: '#black',
                    background: '#fff',
                    confirmButtonText: 'Intentar de nuevo',
                    confirmButtonColor: 'orange',
                })
            }
    }

    const ayuda = () => {
        Swal.fire({
            title: 'Arrastra los elementos a la posición correcta, dale a comprobar cuando pienses que está correcto. PISTA: ¡Definir antes de usar, la indentación no debes olvidar!',
            width: 500,
            icon: 'question',
            padding: '20px',
            color: '#black',
            background: '#fff',
            confirmButtonText: 'VALE',
            showConfirmButton: true,
            confirmButtonColor: 'blue',
            })
    }
    return(
        <div className="lvl3-container">
            <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;
          if (!destination) {
            return;
          }
          if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
          ) {
            return;
          }
  
          setTasks((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
          );
        }}
      >
        <div className="app-levels">
          <h1 align="center">Descifra el código</h1>
          <Droppable droppableId="tasks">
            {(droppableProvided) => (
              <ul
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
                className="task-container-levels"
              >
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(draggableProvided) => (
                      <li
                        {...draggableProvided.draggableProps}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                        className="task-item-levels"
                      >
                        {task.text}
                      </li>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </ul>
            )}
          </Droppable>
            
        </div>
        
      </DragDropContext>
      <br/>
            <div className="content-check centered-elements-check">
            <button onClick={ayuda} className="btn btncito--3-levels botin-levels">
                    ¿?
                </button>

                <button onClick={Verificar} className="btn btncito--3-levels botin-levels" >
                        COMPROBAR
                </button>
                      
            </div>
        </div>
    );
}