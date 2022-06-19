import React, { useEffect } from 'react';
import './styles/niveles.css'
export default function Nivel_3_parte1() {
    
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
                    Teoría #3 - Funciones
                </div>
                <div className="card-body">
                    <h4 className="card-title">¿Qué son las funciones?</h4>
                    <p className="card-text">Una función es un bloque de código reutilizable en el que se pueden definir acciones o tareas. Estas nos permiten ejecutar codigo facilmente en varias
                    partes del espacio de trabajo, sin necesidad de reescribir lo mismo en todas partes, observemos un ejemplo:</p>
                    <img src='https://naps.com.mx/blog/wp-content/uploads/2020/06/Funciones-en-Python.-Estructura-de-una-funci%C3%B3n.png' width={'30%'} height={'30%'}></img>
                    <p>
                    En este ejemplo, podemos observar la definición de la función, como se mencionaba en el módulo 1, es importante comprender que Python se maneja con indentaciones. 
                    </p>
                    <p>
                    Una vez definida, observa como se imprime la función <b>suma(5,6)</b>, ya que esta retorna el valor de la suma definida en si. De esta manera se crean las funciones, ahora <b>suma(a,b)</b> se
                    puede llamar en cualquier parte del espacio de trabajo.
                    </p>

                    
                    <a name="" id="" className="btn btn-primary btnRight" role="button">Terminar</a>
       
                </div>
                <div className="card-footer text-muted">
                    @Copyright CODEHEROES 2022
                </div>
            </div>
        </div>
        

    );
}