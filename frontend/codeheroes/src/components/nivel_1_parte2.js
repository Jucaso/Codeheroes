import React, { useEffect } from 'react';
import './styles/niveles.css'
export default function Nivel_1_parte1() {
    
    useEffect(() => {
        getData();
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
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    Quiz #1 - Variables y operciones aritméticas
                </div>
                    <div className="card-body">
                
                    <legend>¿Pregunta va aquí?</legend>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        Opción 1
                    </label>
                    </div>

                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Opción 2
                    </label>
                    </div>   

                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label class="form-check-label" for="flexRadioDefault3">
                        Opción 3
                    </label>
                    </div>  
                    <a name="" id="" className="btn btn-primary btnRight" role="button">Terminar</a>                      
                </div>
                
                <div className="card-footer text-muted">
                    @Copyright CODEHEROES 2022
                </div>
            </div>
        </div>
    );
}