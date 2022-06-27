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
                title: '¡Gracias, el mensaje se ha enviado, guarda el código de este tickect para reclamar cosas increíbles dentro de la nave!',
                width: 700,
                icon: 'success',
                iconColor: 'green',
                padding: '20px',
                color: '#2c7d71',
                background: 'radial-gradient(circle, rgba(217,218,238,1) 0%, rgba(189,189,198,1) 71%)',
                // eslint-disable-next-line no-multi-str
                html: '<img src="https://media.discordapp.net/attachments/981331949501181962/988559765477163018/ticket.png"/> \
                        </br> </br>\
                        <a type="button" class="btn btn-success" href="/Login"> ¡GENIAL! GRACIAS </a> ',
                showConfirmButton: false,
                })
        }
        else {
            Swal.fire({
                title: 'Hmm... al parecer hay un error en el mensaje, ¡intenta de nuevo!',
                width: 700,
                icon: 'warning',
                iconColor: 'green',
                padding: '20px',
                color: '#2c7d71',
                background: 'radial-gradient(circle, rgba(217,218,238,1) 0%, rgba(189,189,198,1) 71%)',
                confirmButtonText: 'Intentemos de nuevo',
                confirmButtonColor: 'green',
                })

        }
    }

    return (
    <div className="ContenedorJuego2">
        <div className="bg_animate2">
            <div className="juegoimgcont">
                <div className="juegoimgcont2">
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
                <div className="dentrodetablet">
                    <h1 className="titulomision"> ¡MISIÓN IMPORTANTE! </h1>
                    <div className="textomision">
                        ¡Necesitamos enviar un "Hola Mundo" a nuestro centro espacial!
                    </div>
                    <div className="textomision2">
                        Ordena los elementos en el orden correcto
                    </div>
                </div>
                <div>
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
                
                
                <div className='bation'>
                    <button  onClick={Verificar} className="btn btncito--4 botin bation">
                        ENVIAR MENSAJE
                    </button>
                </div>
           </div>

                </div>
            </DragDropContext>

            
            </div>
                
            </div>
            
                <div className="burbujas">
                    <div className="burbuja2"></div>
                    <div className="burbuja2"></div>
                    <div className="burbuja2"></div>
                    <div className="burbuja2"></div>
                    <div className="burbuja2"></div>
                    <div className="burbuja2"></div>
                    <div className="burbuja2"></div>
                </div>
        </div>
    </div>
        );
}

export default Juego;







