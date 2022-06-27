import React, { useEffect, useState } from 'react';
import './styles/niveles.css'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';
import 'animate.css';
import { motion } from 'framer-motion';

export default function Nivel_2_parte3() {
    
    const initialTasks = [
        {
          id: "1",
          text: "if n < 30:",
        },
        {
          id: "2",
          text: "ㅤprint(\":(\")",
        },
        {
          id: "3",
          text: "else:",
          
        },
        {
          id: "4",
          
          text: "x = 5",
        },
        {
          id: "5",
          text: "ㅤprint(\"n es menor a 30\")",
        },
        {
          id: "6",
          text: "n = x * y + 5 ",
        },
        {
          id: "7",
          text: "y = x",
          
        },  
      ];

    const cookies = new Cookies();
    const [estrellas, setEstrellas] = useState(0);
    const [puntaje, setPuntaje] = useState(0);
    const [nivelStats, setNivelStats] = useState(0);
    const [estrellasId, setEstrellasId] = useState(0);

      const ordenado = [
        {
            id: "4",
            text: "x = 5",
          },
          {
            id: "7",
            text: "y = x",
          },
          {
            id: "6",
            text: "n = x * y + 5 ",
          },
          {
            id: "1",
            text: "if n < 30:",
          },
          {
            id: "5",
            text: "ㅤㅤprint(\"n es menor a 30\")",
          },
          {
            id: "3",
            text: "else:",
          },
          {
            id: "2",
            text: "ㅤㅤprint(\":(\")",
          }, 
    ];
      
      const reorder = (list, startIndex, endIndex) => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
      
        return result;
      };

      useEffect(() => {
        getData();
      });

      async function getData(){
        try {
            const request = await fetch("http://127.0.0.1:8000/usuarios/"+cookies.get('idUsuarioStats')+"/");
            const data = await request.json();
            console.log(data);
            setPuntaje(data.puntaje);
            setNivelStats(data.nivel_2);
            setEstrellas(data.estrellas);
        } catch (error) {
            console.log(error);
        }
      }
       
        
    const [tasks, setTasks] = useState(initialTasks);

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

    
    const Verificar = () => {
        
        //console.log(tasks[0].id);
        //console.log(ordenado[0].id);
        
        if(tasks[0].id === ordenado[0].id &&
           tasks[1].id === ordenado[1].id &&
           tasks[2].id === ordenado[2].id && 
           tasks[3].id === ordenado[3].id &&
            tasks[4].id === ordenado[4].id &&
            tasks[5].id === ordenado[5].id &&
            tasks[6].id === ordenado[6].id
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
                                  nivel_2: newLevelStats,
                                  user: cookies.get('idUsuario')
                                  })
              }).then(() => {
                  //setMode(true);
                  //navigate('/nivel_1_parte3');
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
              html: '<a type="button" class="btn btn-success" href="/nivel_1_parte3"> CONTINUAR </a>',
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
        ConteoEstrellas();
    }

    const ayuda = () => {
        Swal.fire({
            title: 'Arrastra los elementos a la posición correcta, dale a comprobar cuando pienses que está correcto. PISTA: ¡Define, indenta y vencerás!',
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
        <motion.div 
        
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={ {x: window.innerWidth, transition: {duration: 1}}} className="lvl3-container">
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
        </motion.div>
    );
}