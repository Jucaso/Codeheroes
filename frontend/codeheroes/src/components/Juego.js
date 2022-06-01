import React, {useState} from 'react';
import "./styles/Juego.css";
import { DragDropContext, Droppable, Draggable}  from 'react-beautiful-dnd';
import {Link} from 'react-router-dom';	

const initialTasks = [
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
];

const ordenado = [
    {
        id: "1",
        text: "PRINT",
    },
    {
        id: "2",
        text: "HOLA",
    },
    {
        id: "3",
        text: "MUNDO",
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
            alert("GANASTE");
            const divParent = document.getElementById('main');
            divParent.innerHTML = '<div> \
                                    GANASTE </div>';
        }
        //Hacer un if donde si tasks [0].id === 1
      

    }

    return (
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
                <h1> MISION IMPORTANTE </h1>
                <Droppable droppableId="tasks">
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
                <button onClick={Verificar} className="btn btn-primary boton"> Enviar mensaje </button>
                </div>
                <div id="main">
                
                </div>
                
            </DragDropContext>
        );
}

export default Juego;







