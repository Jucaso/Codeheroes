import React, { useEffect } from 'react';
import './styles/niveles.css'
export default function Nivel_1_parte1() {
    
    useEffect(() => {
        getData();
        var draggedStart, draggedEnd;
        document.getElementById("btn").addEventListener("click", function(){
            document.querySelectorAll(".caja").forEach(function(e){
                const divParent = document.getElementById('main');
                divParent.innerHTML = '<div class="caja" draggable="true">hola</div> \
                                        <div class="zone1">print(</div> \
                                        <div class="zone2"></div> \
                                        <div class="zone3">mundo)</div>';
                e.parentNode.removeChild(e);
                
            });
        });
        document.addEventListener("dragstart", event => {
        // store a ref. on the dragged elem
        draggedStart = event.target;
        //console.log("dragged", dragged);
        });

        document.addEventListener("dragover", event => {
        // prevent default to allow drop
        event.preventDefault();
        //console.log("draggedover", dragged);
        });

        document.addEventListener("drop", event => {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        var dragged = event.target;
        console.log("drop", dragged);
        // move dragged element to the selected drop target
        if (event.target.className == "zone2") {
            draggedEnd = event.target;
            draggedStart.parentNode.removeChild(draggedStart);
            event.target.appendChild(draggedStart);
        }
});
    }, []);
    async function getData(){
        try {
            const request = await fetch('http://127.0.0.1:8000/usuarios/');
            const data = await request.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <div class="container">
            <div class="card">
                <div class="card-header">
                    Evaluación práctica #1 - Variables y operciones aritméticas
                </div>
                <div class="card-body">
                    <div id="main">
                    <div className="caja" draggable="true">hola</div>
                    <div className="zone1">print(</div>
                    <div className="zone2"></div>
                    <div className="zone3">mundo)</div>
                    </div>
                    <div id="btn">
                        <button id= "btn">Cancel</button>
                    </div>     
                    <a name="" id="" className="btn btn-primary btnRight" role="button">Terminar</a>  
                </div>
                <div class="card-footer text-muted">
                    @Copyright CODEHEROES 2022
                </div>
            </div>
        </div>
        

    );
}