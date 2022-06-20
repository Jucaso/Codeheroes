import React, {useState} from 'react';
import "./styles/Juego.css";
import { DragDropContext, Droppable, Draggable}  from 'react-beautiful-dnd';
import {Link} from 'react-router-dom';	
import {Card} from 'react-bootstrap';
import Swal from 'sweetalert2';

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
            Swal.fire({
                title: '¡El mensaje se ha enviado, guarda el código de este tickect para reclamar cosas increíbles dentro de la nave!',
                width: 500,
                icon: 'success',
                padding: '20px',
                color: '#black',
                background: '#fff',
                html: '<a type="button" class="btn btn-success" href="/Login"> ACEPTO </a>',
                showConfirmButton: false,
                })
        }
        else {
            Swal.fire({
                title: 'Hmm... al parecer hay un error en el mensaje, ¡intenta de nuevo!',
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

    return (
    <div className="ContenedorJuego">
        <div className="bg_animate2">
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
            <div className="app">
                <h1 className="titulomision"> MISION IMPORTANTE </h1>
                <div>
                    Por favor, ordena los siguientes elementos de acuerdo a la secuencia correcta:
                </div>
                    <div className="contenidomision">
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
            </DragDropContext>
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
    </div>
        );
}

export default Juego;







