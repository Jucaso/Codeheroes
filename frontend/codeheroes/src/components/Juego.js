import React, {useState} from 'react';
import "./styles/Juego.css";
import { DragDropContext, Droppable, Draggable}  from 'react-beautiful-dnd';
import {Link} from 'react-router-dom';	
import {Card} from 'react-bootstrap';

const initialTasks = [
    {
        id: "5",
        text: ")",
    },
    {
        id: "2",
        text: "HOLA",
    },
    {
        id: "3",
        text: "MUNDO",
    },
    {
        id: "1",
        text: "PRINT",
    },
    {
        id: "4",
        text: "(",
    },
    
];

const ordenado = [
    {
        id: "1",
        text: "PRINT",
    },
    {
        id: "4",
        text: "(",
    },
    {
        id: "2",
        text: "HOLA",
    },
    {
        id: "3",
        text: "MUNDO",
    },
    {
        id: "5",
        text: ")",
    },
];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

function Juego() {

    const [tasks, setTasks] = useState(initialTasks);
    const [order, setOrder] = useState(ordenado);

    const Verificar = () => {
        
        console.log(tasks[0].id);
        console.log(ordenado[0].id);
        
        if(tasks[0].id === ordenado[0].id &&
           tasks[1].id === ordenado[1].id &&
           tasks[2].id === ordenado[2].id
            )
        {
            const divParent = document.getElementById('main');
            divParent.innerHTML = ' <div className="mensaje1">  \
                                    ¡QUE BIEN! El mensaje se ha enviado  \
                                    <div> \
                                    Por tu gran esfuerzo, guarda este ticket, podrás reclamar cosas impresionantes dentro de la nave ;) \
                                    </div> \
                                    <div className="ola"> \
                                    <a type="button" href="/login" className="btn button5 type1 ola"> \
                                    EMPECEMOS \
                                    </a>  \
                                    </div>';
        }
        else {
            const divParent = document.getElementById('main');
            divParent.innerHTML = ' <div className="mensaje1"> \
                                    Hmm, parece que hay un error en el mensaje</div> \
                                    <div> \
                                    ¡Intenta de nuevo!</div>';

        }
        //Hacer un if donde si tasks [0].id === 1
      

    }

    return (
        <div className="bg_animate">
        <DragDropContext
            onDragEnd={(result) => {
                const { source, destination} = result;
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
            <div className="app1">
                    <h1 className="titulomision"> MISION IMPORTANTE </h1>
                
                
                <Droppable droppableId="tasks" direction="horizontal">
                    {(provided) => (
                        <ul
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className= "task-container"
                        >
                        {tasks.map((task, index) => (
                            <Draggable key = {task.id} draggableId = {task.id} index = {index}>
                                {(provided) => (
                                    <li
                                    {...provided.draggableProps}
                                    ref={provided.innerRef}
                                    {...provided.dragHandleProps}
                                    className = "task-item"
                                    >
                                        {task.text}
                                    </li>
                                )}
                                </Draggable>
                                ))}
                                {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
               
                </div>
                <br/>
                <div class="content centered-elements">
                    <div>
                        <button onClick={Verificar} className="btn btncito--3 botin">
                        ENVIAR MENSAJE
                        </button>
                    </div>
                </div>
                <br/>
                <h3 className="titulomision"> Resultado del mensaje </h3>
                <div id="main">

                </div>
               
                
                
            </DragDropContext>
            </div>
        );
}

export default Juego;







